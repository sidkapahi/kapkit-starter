# Development

Everything you need to run Project name locally or contribute. For the user guide, see the [README](../README.md).

## Run locally

```bash
npm install
npx wrangler dev
```

The site runs at `http://localhost:8787/`. Static files come from `public/`; anything that isn't a file falls through to `src/index.js` (a 404 by default).

## Layout

- `public/`: the site, served as static assets. `favicon.png` doubles as the project icon in preview-bot, and `og-image.png` is the social share card.
- `src/index.js`: Worker code for any request that isn't a static file.
- `wrangler.jsonc`: Worker config. `name` must match the Worker in Cloudflare.
- `assets/`: images used by the README only (not served).
- `docs/`: this file and [DEPLOYMENT.md](./DEPLOYMENT.md).

## Env vars

None yet. Runtime secrets go on the Worker as **Secret** type (**Workers & Pages** → the Worker → **Settings** → **Variables and secrets**); for local dev, put them in `.dev.vars` (git-ignored).
