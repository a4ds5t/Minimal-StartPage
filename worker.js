/**
 * Route start.soholocal.nl: / = landing, /app = startpage app, 301 legacy paths.
 * Static files are served via the ASSETS binding; repo docs are not uploaded.
 */
import { applyLandingSeo, landingLocaleFromRequest } from "./landing-seo.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const redirect = REDIRECTS[path];
    if (redirect) {
      return Response.redirect(new URL(redirect, url.origin).href, 301);
    }

    if (path === "/app/") {
      return Response.redirect(new URL("/app", url.origin).href, 301);
    }

    if (path === "/nl/") {
      return Response.redirect(new URL("/nl", url.origin).href, 301);
    }

    if (path === "/" || path === "" || path === "/nl") {
      const langQuery = url.searchParams.get("lang");
      if ((path === "/" || path === "") && langQuery === "nl") {
        return Response.redirect(new URL("/nl", url.origin).href, 301);
      }
      if ((path === "/" || path === "") && langQuery === "en") {
        const clean = new URL(url);
        clean.searchParams.delete("lang");
        if (clean.search !== url.search) {
          return Response.redirect(clean.href, 301);
        }
      }

      const locale = landingLocaleFromRequest(path, url);
      return serveHomepage(env, request, locale ?? "en");
    }

    if (path === "/app") {
      return serveAsset(env, request, "/index.html");
    }

    if (isBlockedPath(path)) {
      return withSecurityHeaders(new Response("Not Found", { status: 404 }));
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (!assetResponse.ok) return assetResponse;
    return cloneResponseWithHeaders(assetResponse);
  },
};

function applySecurityHeaders(headers) {
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Content-Security-Policy", "frame-ancestors 'self'");
}

function cloneResponseWithHeaders(response) {
  const headers = new Headers(response.headers);
  applySecurityHeaders(headers);
  return new Response(response.body, { status: response.status, headers });
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  applySecurityHeaders(headers);
  return new Response(response.body, { status: response.status, headers });
}

const REDIRECTS = {
  "/homepage": "/",
  "/homepage.html": "/",
  "/index.html": "/app",
};

function isBlockedPath(path) {
  if (path.startsWith("/docs/")) return true;
  if (path === "/docs") return true;
  if (path.endsWith(".md")) return true;
  if (path === "/LICENSE" || path === "/README.md" || path === "/Installation.md") {
    return true;
  }
  return false;
}

async function serveHomepage(env, request, locale) {
  const response = await serveAsset(env, request, "/homepage.html");
  if (!response.ok) return response;

  const html = await response.text();
  const body = applyLandingSeo(html, locale);
  const headers = new Headers(response.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", headers.get("cache-control") || "public, max-age=0, must-revalidate");
  applySecurityHeaders(headers);
  return new Response(body, { status: response.status, headers });
}

async function serveAsset(env, request, assetPath) {
  const assetUrl = new URL(assetPath, request.url);
  const assetRequest = new Request(assetUrl, request);
  const response = await env.ASSETS.fetch(assetRequest);
  if (!response.ok) return response;

  const headers = new Headers(response.headers);
  headers.set("cache-control", headers.get("cache-control") || "public, max-age=0, must-revalidate");
  applySecurityHeaders(headers);
  return new Response(response.body, { status: response.status, headers });
}
