import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  applyLandingSeo,
  hreflangLinkTags,
  landingLocaleFromRequest,
  LANDING_LOCALES,
} from "./landing-seo.js";

const homepageHtml = readFileSync(new URL("./homepage.html", import.meta.url), "utf8");

test("landingLocaleFromRequest", () => {
  assert.equal(landingLocaleFromRequest("/", new URL("https://start.soholocal.nl/")), "en");
  assert.equal(landingLocaleFromRequest("/nl", new URL("https://start.soholocal.nl/nl")), "nl");
  assert.equal(
    landingLocaleFromRequest("/", new URL("https://start.soholocal.nl/?lang=nl")),
    "nl",
  );
});

test("applyLandingSeo sets NL primary meta and hreflang", () => {
  const html = applyLandingSeo(homepageHtml, "nl");
  assert.match(html, /<html lang="nl">/);
  assert.match(html, new RegExp(`<title>${LANDING_LOCALES.nl.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</title>`));
  assert.match(html, /<link rel="canonical" href="https:\/\/start\.soholocal\.nl\/nl">/);
  assert.match(html, /hreflang="nl"/);
  assert.match(html, /hreflang="x-default"/);
  assert.match(html, /<h1 data-i18n="h1">Een gratis startpagina die je met rust laat\.<\/h1>/);
  assert.match(
    html,
    /<meta property="og:description" content="[^"]*niet-commerci[^"]*">/,
  );
});

test("hreflangLinkTags includes EN and NL URLs", () => {
  const tags = hreflangLinkTags();
  assert.match(tags, /hreflang="en" href="https:\/\/start\.soholocal\.nl\/"/);
  assert.match(tags, /hreflang="nl" href="https:\/\/start\.soholocal\.nl\/nl"/);
});
