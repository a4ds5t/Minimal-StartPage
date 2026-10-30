# Version tag component

The settings footer shows a clickable version label (`v1.5.9`). Activating it opens a small popover with the build timestamp (Europe/Amsterdam, date, time and short zone name) and a link to the changelog.

## Files

| File | Role |
|------|------|
| `version-tag.js` | Popover behaviour and Amsterdam timestamp formatting |
| `version-tag.css` | Layout for the tag and popover (light/dark via existing CSS variables) |
| `build-info.js` | Generated `BUILD_TIMESTAMP_ISO` (UTC ISO string), loaded before `script.js` |
| `scripts/generate-build-info.js` | Writes `build-info.js` at build/deploy time |

## Build-time timestamp

Wrangler runs the build command before upload:

```jsonc
"build": { "command": "node scripts/generate-build-info.js" }
```

So `wrangler deploy` and `wrangler versions upload` (and `wrangler deploy --dry-run`) always refresh `build-info.js` without a manual step. The app reads `BUILD_TIMESTAMP_ISO` and formats it in the browser with `Intl` and `timeZone: 'Europe/Amsterdam'`.

If `build-info.js` is missing (for example opening `index.html` via `file://`), the tag still shows `v{APP_VERSION}` and the popover omits the timestamp line.

`APP_VERSION` in `script.js` remains the version source; it is bumped by hand between releases (and by the release workflow for tagged releases).

## Reusing in another app

1. Copy `version-tag.js`, `version-tag.css`, and `scripts/generate-build-info.js`.
2. Hook the generator into your deploy (Wrangler `[build].command` or a `predeploy` script).
3. Load `build-info.js`, then `version-tag.js`, and call:

```javascript
initVersionTag({
  root: document.getElementById('my-version-root'),
  version: '1.0.0',
  buildIso: typeof BUILD_TIMESTAMP_ISO !== 'undefined' ? BUILD_TIMESTAMP_ISO : null,
  changelogUrl: 'https://example.com/changelog',
  strings: {
    updatedLabel: 'Updated',
    changelogLabel: 'Changelog',
    tagAria: 'Version {v}, show update details',
  },
})
```

4. Pass translated `strings` when the UI language changes (`update()` on the returned handle).
