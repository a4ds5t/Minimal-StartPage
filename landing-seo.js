/**
 * Server-side SEO for the landing page (homepage.html).
 * Used by the Worker so crawlers see EN/NL title, description, H1, canonical, and hreflang without JS.
 */

export const SITE_ORIGIN = "https://start.soholocal.nl";

/** @type {Record<'en' | 'nl', { lang: string, canonical: string, title: string, description: string, h1: string }>} */
export const LANDING_LOCALES = {
  en: {
    lang: "en",
    canonical: `${SITE_ORIGIN}/`,
    title: "Free minimal start page — search, clock, privacy | Minimal-StartPage",
    description:
      "Free, noncommercial minimal start page with search, a clock, and optional weather and links. Privacy-first: no account, no tracking. Open in your browser.",
    h1: "A free start page that stays out of your way.",
  },
  nl: {
    lang: "nl",
    canonical: `${SITE_ORIGIN}/nl`,
    title: "Gratis minimale startpagina — zoeken, klok, privacy | Minimal-StartPage",
    description:
      "Gratis, niet-commerciële minimale startpagina met zoeken, een klok en optioneel weer en links. Privacy eerst: geen account, geen tracking. Open in je browser.",
    h1: "Een gratis startpagina die je met rust laat.",
  },
};

export function hreflangLinkTags() {
  const en = LANDING_LOCALES.en.canonical;
  const nl = LANDING_LOCALES.nl.canonical;
  return [
    `<link rel="alternate" hreflang="en" href="${en}">`,
    `<link rel="alternate" hreflang="nl" href="${nl}">`,
    `<link rel="alternate" hreflang="x-default" href="${en}">`,
  ].join("\n  ");
}

function escapeHtmlText(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function escapeHtmlAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

/**
 * @param {string} html
 * @param {'en' | 'nl'} locale
 */
export function applyLandingSeo(html, locale) {
  const meta = LANDING_LOCALES[locale] ?? LANDING_LOCALES.en;
  const title = escapeHtmlText(meta.title);
  const description = escapeHtmlAttr(meta.description);
  const h1 = escapeHtmlText(meta.h1);
  const canonical = meta.canonical;
  const hreflang = hreflangLinkTags();

  let out = html;
  out = out.replace(/<html lang="[^"]*">/, `<html lang="${meta.lang}">`);
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${description}">`,
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonical}">\n  ${hreflang}`,
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}">`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${description}">`,
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${canonical}">`,
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeHtmlAttr(meta.title)}">`,
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${description}">`,
  );
  out = out.replace(/<h1 data-i18n="h1">[\s\S]*?<\/h1>/, `<h1 data-i18n="h1">${h1}</h1>`);

  return out;
}

/**
 * @param {string} path
 * @param {URL} url
 * @returns {'en' | 'nl' | null}
 */
export function landingLocaleFromRequest(path, url) {
  const normalized = path.replace(/\/$/, "") || "/";
  if (normalized === "/nl") return "nl";
  if (normalized === "/" || normalized === "") {
    const q = url.searchParams.get("lang");
    if (q === "nl") return "nl";
    if (q === "en") return "en";
    return "en";
  }
  return null;
}
