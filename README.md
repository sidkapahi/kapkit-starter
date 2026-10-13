[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sidkapahi/kapkit-starter)

# kapkit-starter

Use this as the base template for all kapkit projects!

A Cloudflare Worker that serves the static files in `public/`. Click the button
above to get a new GitHub repo and a Worker that deploys on every push, with
preview URLs for every branch.

## Layout

- `public/`: static site. `favicon.png` doubles as the project icon in preview-bot.
- `src/index.js`: Worker for anything that isn't a static file (404 by default).
- `wrangler.jsonc`: Worker config. Rename `name` per project on the Deploy page.

## Local dev

```sh
npm install
npx wrangler dev
```

Set `version` in `package.json` above `0.0.0` once you want the **Release**
field to show in Discord.
