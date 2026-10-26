// Smoke tests for the basic behaviour of the start page.
// External services (IP lookup, weather, city search) are mocked, so the run needs no network.
// Run with: npm test (from the tests folder). See README.md.

const { chromium } = require('playwright');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PAGE = 'file://' + path.resolve(__dirname, '..', 'index.html');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'startpage-'));

let passed = 0;
let failed = 0;
const check = (cond, label) => {
  if (cond) { passed++; console.log('  ok    ' + label); }
  else { failed++; console.log('  FAIL  ' + label); }
};

const emptyForecast = {
  current: { time: '2026-10-11T12:00', temperature_2m: 12, weather_code: 3, apparent_temperature: 10, wind_speed_10m: 5, relative_humidity_2m: 70 },
  hourly: { time: [], temperature_2m: [], precipitation_probability: [], wind_speed_10m: [], weather_code: [] },
  daily: { time: [], weather_code: [], temperature_2m_max: [], temperature_2m_min: [], precipitation_probability_max: [] },
  timezone: 'Europe/Amsterdam', utc_offset_seconds: 7200,
};

(async () => {
  const executablePath = process.env.CHROMIUM_PATH || undefined;
  const browser = await chromium.launch({ executablePath });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, locale: 'en-US', acceptDownloads: true });

  await context.route('https://ipapi.co/**', (r) => r.fulfill({ contentType: 'application/json', body: JSON.stringify({ ip: '203.0.113.5', city: 'Utrecht', country_name: 'Netherlands', latitude: 52.09, longitude: 5.12, timezone: 'Europe/Amsterdam', org: 'Example ISP' }) }));
  await context.route('https://api.open-meteo.com/**', (r) => r.fulfill({ contentType: 'application/json', body: JSON.stringify(emptyForecast) }));
  await context.route('https://geocoding-api.open-meteo.com/**', (r) => r.fulfill({ contentType: 'application/json', body: JSON.stringify({ results: [] }) }));

  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('dialog', (d) => d.accept());

  const openSettings = async () => { await page.click('#settings-button'); await page.waitForSelector('#settings:not([hidden])'); };
  const isOpen = (sel) => page.evaluate((s) => { const e = document.querySelector(s); return !!e && !e.hidden; }, sel);

  console.log('Start-up');
  await page.goto(PAGE);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('#search');
  check(await page.isVisible('#search'), 'search box is shown');
  check(errors.length === 0, 'no errors on load');

  console.log('Search');
  await page.fill('#search', 'test query');
  const [popup] = await Promise.all([
    context.waitForEvent('page', { timeout: 3000 }).catch(() => null),
    page.click('#go'),
  ]);
  check(errors.length === 0, 'search button submits without a page error');
  if (popup) await popup.close();
  await page.waitForTimeout(300);
  await page.goto(PAGE); // the search may leave the page; come back to the start page
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('#search');

  console.log('Settings');
  check(await page.isVisible('#first-hint'), 'the first-visit hint shows on a first visit');
  await openSettings();
  check(await isOpen('#settings'), 'settings open from the gear button');
  check(!(await page.isVisible('#first-hint')), 'the hint is gone once settings are opened');
  await page.reload();
  await page.waitForSelector('#search');
  check(!(await page.isVisible('#first-hint')), 'the hint does not come back after a reload');
  await openSettings();
  await page.click('#settings-close');
  check(!(await isOpen('#settings')), 'settings close with the close button');

  console.log('Quick start');
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', 'en'); });
  await page.reload();
  await page.waitForSelector('#search');
  await page.click('#first-hint-quick');
  check(await isOpen('#quickstart'), 'the quick start opens from the first-visit card');
  check(!(await page.isVisible('#first-hint')), 'the first-visit card is gone once the quick start opens');
  await page.click('#quickstart-done');
  check(!(await isOpen('#quickstart')), 'the quick start closes with its OK button');
  await page.reload();
  await page.waitForSelector('#search');
  check(!(await page.isVisible('#first-hint')), 'the card stays away after the quick start was read');
  await openSettings();
  await page.click('#quickstart-open');
  check(await isOpen('#quickstart'), 'the quick start opens from the basic settings');
  await page.keyboard.press('Escape');
  check(!(await isOpen('#quickstart')), 'Escape closes the quick start');
  await page.evaluate(() => { document.getElementById('settings').hidden = true; });

  console.log('Export and import');
  await page.evaluate(() => localStorage.setItem('links', JSON.stringify([
    { title: 'Example', url: 'https://example.com/', description: '' },
    { title: 'Docs', url: 'https://example.org/docs', description: '' },
  ])));
  await page.reload();
  await openSettings();
  await page.click('#manage-open');
  await page.click('#tab-backup');
  const [download] = await Promise.all([page.waitForEvent('download'), page.click('#export-data')]);
  const exportFile = path.join(TMP, 'export.json');
  await download.saveAs(exportFile);
  const exported = JSON.parse(fs.readFileSync(exportFile, 'utf8'));
  check(Array.isArray(exported.data.links) && exported.data.links.length === 2, 'export holds the two links');
  check(!('ipInfo' in (exported.settings || {})), 'export leaves out the cached IP lookup');

  // Another device: start empty, then import in Replace mode.
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await openSettings();
  await page.click('#manage-open');
  await page.click('#tab-backup');
  let [chooser] = await Promise.all([page.waitForEvent('filechooser'), page.click('#import-data')]);
  await chooser.setFiles(exportFile);
  await page.waitForSelector('#import-window:not([hidden])');
  await page.click('#import-replace');
  await page.waitForTimeout(800);
  let links = await page.evaluate(() => JSON.parse(localStorage.getItem('links') || '[]'));
  check(JSON.stringify(links.map((l) => l.url)) === JSON.stringify(exported.data.links.map((l) => l.url)), 'replace restores the exported links in the same order');

  // Merge: the same address with different case, a www and a trailing slash must not duplicate.
  await page.evaluate(() => localStorage.setItem('links', JSON.stringify([
    { title: 'My own name', url: 'https://WWW.example.com', description: '' },
  ])));
  await page.reload();
  await openSettings();
  await page.click('#manage-open');
  await page.click('#tab-backup');
  chooser = (await Promise.all([page.waitForEvent('filechooser'), page.click('#import-data')]))[0];
  await chooser.setFiles(exportFile);
  await page.waitForSelector('#import-window:not([hidden])');
  await page.click('#import-merge');
  await page.waitForTimeout(800);
  links = await page.evaluate(() => JSON.parse(localStorage.getItem('links') || '[]'));
  check(links.length === 2, 'merge does not duplicate a link with the same address');
  check(links.some((l) => l.title === 'My own name'), 'merge keeps the existing link and its name');

  // A file that is not an export is refused without changing anything.
  const bad = path.join(TMP, 'bad.json');
  fs.writeFileSync(bad, '{"hello":1}');
  await page.waitForTimeout(500);
  await openSettings();
  await page.click('#manage-open');
  await page.click('#tab-backup');
  chooser = (await Promise.all([page.waitForEvent('filechooser'), page.click('#import-data')]))[0];
  await chooser.setFiles(bad);
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('links') || '[]'));
  check(after.length === 2, 'an invalid file leaves the links unchanged');

  console.log('Topbar language');
  const LANG_VALUES = 'auto,nl,en,de,fr,es,zh';
  check(await page.$('#top-lang-trigger'), 'topbar language control is a globe trigger');
  check(
    (await page.$eval('#top-lang-trigger', (el) => el.getAttribute('aria-haspopup') === 'menu' && !!el.getAttribute('aria-label'))),
    'language trigger exposes menu popup and aria-label',
  );
  check(
    (await page.$eval('#top-lang-menu', (menu) => [...menu.querySelectorAll('[data-lang-value]')].map((b) => b.dataset.langValue).join(','))) === LANG_VALUES,
    'topbar menu lists the same languages as landing (auto + six locales)',
  );
  check(
    (await page.$eval('#set-lang', (sel) => [...sel.options].map((o) => o.value).join(','))) === LANG_VALUES,
    'settings language lists the full set',
  );
  await page.click('#top-lang-trigger');
  check(
    (await page.$eval('#top-lang-trigger', (el) => el.getAttribute('aria-expanded') === 'true')) && !(await page.$eval('#top-lang-menu', (el) => el.hidden)),
    'language menu opens from the globe trigger',
  );
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
  check(
    (await page.$eval('#top-lang-trigger', (el) => el.getAttribute('aria-expanded') === 'false')) && (await page.$eval('#top-lang-menu', (el) => el.hidden)),
    'Escape closes the language menu',
  );
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', 'nl'); });
  await page.reload();
  await page.waitForSelector('#top-lang-trigger');
  check(
    await page.$eval('#top-lang-menu [data-lang-value="nl"]', (el) => el.getAttribute('aria-checked') === 'true'),
    'topbar language menu marks stored preference',
  );
  check(await page.$eval('#set-lang', (el) => el.value === 'nl'), 'settings language stays in sync on load');
  await page.click('#top-lang-trigger');
  await Promise.all([page.waitForNavigation(), page.click('#top-lang-menu [data-lang-value="es"]')]);
  await page.waitForSelector('#search');
  check(await page.$eval('#settings-button', (el) => el.getAttribute('aria-label') === 'Ajustes'), 'changing language in the topbar updates UI strings');
  check(await page.isVisible('.modes'), 'colour mode pill stays visible after language change');

  console.log('Windows');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);
  check(!(await isOpen('#manage')), 'Escape closes the data panel');
  if (await isOpen('#settings')) await page.click('#settings-close');
  await page.waitForTimeout(200);
  check((await page.getAttribute('#links-button', 'aria-label')) === 'Wikipedia', 'the links button is Wikipedia by default');

  check(errors.length === 0, 'no page errors during the run' + (errors.length ? ': ' + errors.join('; ') : ''));

  await browser.close();
  fs.rmSync(TMP, { recursive: true, force: true });
  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error('ERROR', e.message); process.exit(1); });
