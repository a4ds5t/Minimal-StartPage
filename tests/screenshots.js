// Retakes the screenshots in docs/images from the current page, so they show the current version and options.
// Run with: node screenshots.js (from the tests folder). The release workflow runs it after setting the version.
// Uses the same offline setup as smoke.js: no network, example links only.

const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, 'docs', 'images') + path.sep;

const MIME = {
  '.css': 'text/css',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let pathname = (req.url || '/').split('?')[0];
      if (pathname === '/app' || pathname === '/app/') pathname = '/index.html';
      const rel = pathname.replace(/^\//, '') || 'index.html';
      const file = path.join(ROOT, rel);
      if (!file.startsWith(ROOT)) {
        res.writeHead(403);
        res.end();
        return;
      }
      fs.readFile(file, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end();
          return;
        }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, base: `http://127.0.0.1:${server.address().port}` }));
  });
}

const exampleLinks = [
  { title: 'Work', url: 'https://work.example/', description: 'Tickets and mail' },
  { title: 'Reading', url: 'https://reading.example/', description: '' },
  { title: 'Projects', url: 'https://projects.example/board', description: 'Current sprint' },
];

(async () => {
  const { server, base } = await startStaticServer();
  const PAGE = `${base}/app`;
  const executablePath = process.env.CHROMIUM_PATH || undefined;
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1500 } });
  await page.route('https://**', (r) => r.abort());
  await page.goto(PAGE);
  await page.waitForSelector('#searchform');
  await page.evaluate((links) => {
    localStorage.clear();
    localStorage.setItem('lang', 'en');
    localStorage.setItem('links', JSON.stringify(links));
    localStorage.setItem('zones', JSON.stringify(['Europe/Amsterdam', 'America/New_York']));
    localStorage.setItem('askAiList', JSON.stringify([
      { title: 'Claude', url: 'https://claude.ai/' },
      { title: 'ChatGPT', url: 'https://chat.openai.com/' },
      { title: 'Grok', url: 'https://grok.com/' },
    ]));
    localStorage.setItem('engine', 'DuckDuckGo');
  }, exampleLinks);
  await page.reload();
  await page.waitForSelector('#engine svg');
  await page.waitForTimeout(400);

  // Landing SEARCH frame + live search bar (variant D rail), not a thin bar-only strip.
  const quickstartPath = path.resolve(ROOT, 'assets', 'quickstart-search.png');
  const captureId = 'landing-quickstart-capture';
  await page.evaluate((id) => {
    document.getElementById(id)?.remove();
    const form = document.getElementById('searchform');
    const parent = form.parentElement;
    const frame = document.createElement('div');
    frame.id = id;
    Object.assign(frame.style, {
      position: 'fixed',
      left: '0',
      top: '0',
      zIndex: '99999',
      boxSizing: 'border-box',
      width: '480px',
      padding: '28px',
      borderRadius: '22px',
      border: '1px solid #e2dccf',
      background: '#ebe7de',
    });
    const barWrap = document.createElement('div');
    Object.assign(barWrap.style, {
      borderRadius: '12px',
      boxShadow: '0 1px 2px rgba(31, 30, 27, 0.06), 0 18px 40px -18px rgba(31, 30, 27, 0.25)',
      overflow: 'hidden',
    });
    parent.insertBefore(frame, form);
    barWrap.appendChild(form);
    frame.appendChild(barWrap);
  }, captureId);
  await page.waitForTimeout(50);
  await page.locator(`#${captureId}`).screenshot({ path: quickstartPath });
  await page.reload();
  await page.waitForSelector('#searchform');
  await page.waitForTimeout(300);

  const panel = (id) => page.locator(`#${id} .settings-panel`);

  await page.click('#settings-button');
  await page.waitForTimeout(200);
  await page.locator('#settings:not([hidden]) .settings-panel').screenshot({ path: OUT + 'settings-basic.png' });

  await page.click('#advanced-toggle');
  await page.waitForTimeout(200);
  await page.locator('#settings:not([hidden]) .settings-panel').screenshot({ path: OUT + 'settings-advanced.png' });

  await page.click('#settings-close');
  await page.waitForTimeout(150);
  await page.click('#settings-button');
  await page.waitForTimeout(150);
  await page.click('#manage-open');
  await page.waitForTimeout(250);
  await panel('manage').screenshot({ path: OUT + 'manage-data.png' });

  await page.click('#tab-backup');
  await page.waitForTimeout(150);
  await panel('manage').screenshot({ path: OUT + 'manage-backup.png' });

  await browser.close();
  server.close();
  console.log('Screenshots written to ' + OUT);
})().catch((e) => { console.error('ERROR', e.message); process.exit(1); });
