/**
 * Route start.soholocal.nl: / = landing, /app = startpage app, 301 legacy paths.
 * Static files are served via the ASSETS binding; repo docs are not uploaded.
 */
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

    if (path === "/" || path === "") {
      return serveAsset(env, request, "/homepage.html");
    }

    if (path === "/app") {
      return serveAsset(env, request, "/index.html");
    }

    if (isBlockedPath(path)) {
      return new Response("Not Found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};

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

async function serveAsset(env, request, assetPath) {
  const assetUrl = new URL(assetPath, request.url);
  const assetRequest = new Request(assetUrl, request);
  const response = await env.ASSETS.fetch(assetRequest);
  if (!response.ok) return response;

  const headers = new Headers(response.headers);
  headers.set("cache-control", headers.get("cache-control") || "public, max-age=0, must-revalidate");
  return new Response(response.body, { status: response.status, headers });
}
