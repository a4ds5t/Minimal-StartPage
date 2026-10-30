# Development

The one place for how the page is built, why it is built that way, what is still open, and how a release is made. What changed in each version is in the [changelog](changelog/README.md); what the page does now is in [Built](Built.md).

## How the page is built

- Plain HTML, CSS and JavaScript, with no browser bundle build step. Production runs on a [Cloudflare Worker](https://start.soholocal.nl) (landing on `/` and `/nl`, app on `/app`). Deploy with Wrangler; repo docs and tooling stay in git only (see `.assetsignore`). The site used to be hosted on GitHub Pages.
- `script.js` holds the logic and the translations. `quotes.js` holds the quote pool.
- Tests: `tests/smoke.js` runs 17 checks in Chromium (Playwright), with all outside services mocked. Run them from the `tests` folder with `npm test`.
- Screenshots: `tests/screenshots.js` takes the pictures in `docs/images` from the page, so they show the current version.

## How a change is made

- Work happens on a branch, and each change goes in through a pull request.
- Every change to the app bumps the version: the last number goes up. Documentation-only changes do not bump it.
- A release is made on GitHub with a whole version as tag (`v1.5`). `APP_VERSION` in `script.js` must already match that tag; bump it in the pull requests that ship the release. Deploy with Wrangler (or the API); the deploy timestamp comes from `build-info.js` at build time. Retake screenshots with `tests/screenshots.js` when the UI changes warrant it.
- After a release: write the file in `docs/changelog/`, for example `v1.5.md`, and add a row to its index.

## Decisions

## Links and lists

- Wikipedia is a permanent link. It follows the browser language and cannot be removed.
- Permanent links are logos where the open icon set has them. Microsoft and Reuters are shown by name.
- Custom links: up to 15, with an optional description written by the visitor, only http and https addresses.
- The hover list shows only the visitor's own links. The permanent ones live in the window.
- The AI shortcuts are a visitor list: up to five, editable, and the row can be switched off.
- Limits are shown only when they are reached, in the add field, as "5 of 5 · full". Below the limit nothing is shown, so the visitor is not nagged.

## Settings

- Settings save straight away; there is no save button.
- A Quick start window (basic settings, Help and the first-visit card) shows the search engine icon with a red arrow, the AI links and the three pages. The same `assets/quickstart-search.png` also appears on the marketing landing page (beige SEARCH frame). `tests/screenshots.js` captures the live `/app` search bar inside that frame over a local HTTP server (because `index.html` uses `<base href="/">`). Retake the asset after search-bar or rail CSS changes, and nudge the Quick start arrow in `index.html` if the picture’s proportions shift.
- A first-visit hint points to the gear and the ? key. It shows only while nothing is stored yet, and goes for good on the first click, the first ? or when settings open.
- The IP address is a button in the basic settings (IP details), not a setting: it is looked up only on request or when the weather needs it.
- Page presets: Minimal and Standard, chosen in the settings. They switch display options only; the IP address is never changed by a preset. Weather is part of the presets only as a switch-off: no preset turns it on, since weather sends the IP address.
- Personal is shown when the choices match neither preset. It is a state, not a choice, so it cannot be clicked.
- Advanced is a button under the presets; its link goes back to the basic settings.
- The resets sit at the bottom of Advanced, under one heading. Both reset buttons have a red frame; Manage data sits beside them without one, because it does not destroy anything.
- Export and import have their own Backup tab, the last one in Manage data, with a short explanation.
- The version and the date of the last change sit at the bottom right of the basic settings.
- The version line links to the changelog on GitHub, so what changed and why is one click away.

## Look and buttons

- The background button is a cycle, not an on/off switch: none, then each wallpaper that is switched on. The first press from the default photo goes to none, so the plain page is always one press away.
- The colour is a button on every screen, with the same steps as the phone. The slider is hidden everywhere, so one control does one thing.
- Wallpapers are a list in Data beheren, with a switch each. The photo and the three new ones are on by default; a switch turns one off for good.
- Action buttons with a verb are a darker grey when they can be used, and a lighter, dimmed grey when they cannot. Arrows, pencils and crosses keep their look. Red is used only for the resets.
- The colour in the counters is kept soft: green while there is room, blue with "full" at the limit.
- Dialogs open with the panel focused, not a button, so nothing looks selected.

## Pages and documentation

- The pages start minimal: Minimal has only the search, the clock and the colour button, and Standard is the default for a new visitor. The AI shortcuts and time zones are off there, so their value is found, not forced.
- The README stays short: the top shows the start page; the settings and Manage data pictures are on docs/Screenshots.md, which the README links to.
- The questions people ask go to docs/FAQ.md, which the README links to.
- Screenshots are taken from the page by tests/screenshots.js, so they show the current version and options.

## Versions and releases

- The app shows the release number (1.4, 1.5 …). Between releases, a change gets a third number (1.4.1, 1.4.2 …), set by hand in script.js.
- `APP_VERSION` in `script.js` is the source of truth; bump it in pull requests. The build timestamp in the version tag comes from `build-info.js` when Wrangler deploys. The page does not ask GitHub for the version at runtime, so nothing extra leaves the page.
- Documentation-only changes do not change the app version.

## Not decided

- TypeScript: deferred until the split of script.js is done. The middle step without a build is JSDoc types with `// @ts-check`, checked in CI.
- Uploading a visitor's own photo: see docs/Wallpapers.md.

## Open items

What is still to be built. The finished work is in [Built](Built.md); the reasoning is in this page.

## Wallpapers

- Check the four wallpapers against the text colours in light and dark mode, and decide on the photo credits.
- Uploading a visitor's own photo: not decided. See [docs/Wallpapers.md](docs/Wallpapers.md).

## More permanent links

Candidates and the open question: [docs/Permanent-links.md](docs/Permanent-links.md).

## Accessibility

- Keyboard: every control in the settings, Manage data and Help can be reached and used with the keyboard alone, in a sensible order, and Escape closes each window.
- Screen readers: the labels, the states (full, greyed out, reset) and the new messages are announced, checked with a screen reader on at least one desktop and one phone.
- Colour contrast: the grey text, the dimmed buttons and the blue and green limit states, and the red reset frame, checked against the WCAG AA minimum in light and dark mode.
- Focus: the focus ring is visible on every control in both themes.

## Help

- A keyboard shortcut list in the Help guide, once the shortcuts are settled.

## Code structure

- Before splitting anything, add tests for the behaviour that exists now: limits, import and export, the new-tab options, the reset confirmation and the layout on phones.
- Move the translations and the icons out of `script.js` into their own files. This is the lowest-risk step and makes the file much shorter.
- Then split the logic (search, weather, links, AI shortcuts, settings) into separate modules. The shared state and the load order in `script.js` make this the risky part, so do it only with the tests in place.
- Not decided: whether a build step or plain ES modules is the right fit for a page without a build.
- Move the static data (the time zone list, the AI catalog, the page presets) out of `script.js` into its own file, next to `quotes.js`.
- Not decided: TypeScript. A middle step without a build is JSDoc types with `// @ts-check`, checked in CI with `tsc --checkJs`. Decide after the split.

## Translations

- Check the German, French, Spanish and Chinese wording of the Help, the settings and the new messages with a native speaker.
