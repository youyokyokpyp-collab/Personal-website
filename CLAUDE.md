# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

There is no build step. The site runs directly in the browser via CDN-loaded React 18 and Babel Standalone (which transpiles JSX at runtime).

Because the HTML loads `.jsx` files via `<script src="...">`, it **must be served over HTTP** — opening `index.html` directly as a `file://` URL will fail due to CORS restrictions on local script loading.

Start a local server from this directory:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Architecture

### No bundler, no npm

All dependencies (React, ReactDOM, Babel) are loaded from `unpkg.com` CDN in `index.html`. There is no `package.json`, no node_modules, and no build pipeline. JSX files are loaded as `type="text/babel"` scripts and compiled in the browser.

### Script load order matters

`index.html` loads scripts in dependency order — any component that references another (or a global from `data.js`) must come later in the file:

1. `data.js` — exports `CYCLE_PHASES`, `ABOUT`, `ARTICLE`, `RELATED_ESSAYS` as `window.*` globals
2. `tweaks-panel.jsx` — exports all tweak controls and `useTweaks` hook as `window.*`
3. `Ornament.jsx` — exports `Ornament`, `Eyebrow` as `window.*`
4. `Nav.jsx`, `Footer.jsx`, `CycleDiagram.jsx`, `HomeView.jsx`, `AboutView.jsx`, `ArticleView.jsx`
5. `App.jsx` — root; calls `ReactDOM.createRoot(...).render(...)`

Each `.jsx` file must assign its exports to `window.*` (e.g. `window.HomeView = HomeView`) rather than using ES module `export`.

### Global state: `useTweaks`

`App.jsx` holds all design-tweak state via `useTweaks(TWEAK_DEFAULTS)` from `tweaks-panel.jsx`. The `TWEAK_DEFAULTS` object is delimited by `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` comments — this is a host protocol marker that allows an external edit-mode host to rewrite the defaults on disk. The tweaks panel communicates with a parent frame via `window.parent.postMessage` using `__activate_edit_mode` / `__deactivate_edit_mode` / `__edit_mode_set_keys` / `__edit_mode_available` / `__edit_mode_dismissed` message types.

### Routing

There is no router library. `App.jsx` holds a `view` string in state (`'home'`, `'about'`, `'article'`). Navigation is done by calling `onNav(id)` which sets the view and scrolls to top. Views are conditionally rendered with `{view === 'x' && <XView />}`.

### Content

All content is in `data.js` as plain JS objects assigned to `window.*`. To change text, titles, timeline items, essay body, or related essays, edit `data.js` directly.

### Design system

`colors_and_type.css` defines the full design token set as CSS custom properties (`--ink`, `--sage-300`, `--sp-*`, `--fs-*`, `--font-body`, etc.). Components inline most styles via the `style` prop rather than using CSS classes, often referencing raw hex values from the palette directly rather than CSS variables — this is intentional for prototype flexibility.

The two primary typefaces are:
- **Cormorant Garamond** (display, serif body) — loaded from Google Fonts
- **IBM Plex Sans Thai** (UI, labels, eyebrows) — loaded from local `fonts/` directory via `@font-face` in `colors_and_type.css`

The accent color (`--sage-300`, default `#9AC39C`) is overridable at runtime via the Tweaks panel and is applied to `document.documentElement.style` in `App.jsx`.
