[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sidkapahi/kapkit-starter)

# kapkit-starter

Use this as the base template for all kapkit projects!

A Cloudflare Worker that serves the static files in `public/`. Click the button
above to get a new GitHub repo and a Worker that deploys on every push, with
preview URLs for every branch.

## What to do next

### 1. Start a new project

1. Click the **Deploy to Cloudflare** button above.
2. Sign in to Cloudflare, connect GitHub if it asks, then set the **Git
   repository name** and the **Worker name** (e.g. `kapkit-myapp`) and click
   **Create and deploy**. Cloudflare creates the repo on your GitHub, creates
   the Worker, and turns on Workers Builds.
3. Check branch previews are on: **Workers & Pages** → the new Worker →
   **Settings** → **Build** → **Branch control** → **Builds for non-production
   branches** is ticked.
4. Custom domain (optional): same Worker → **Settings** → **Domains &
   Routes** → **Add** → **Custom domain** → e.g. `myapp.kapkit.ca`.

### 2. Hook it up to preview-bot

1. Open <https://previewbot.kaplabs.ca> → **Add project** → type the Worker
   name. If the editor doesn't subscribe the build queue for you yet, follow
   the dashboard step in preview-bot's README ("Adding a project", step 1).
2. **Delivery & settings**: pick the Discord channel, set the display name,
   production URL and icon, then click **Save**.
3. Push a branch to the new repo. A **Preview Ready** message should arrive
   with the preview link.

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
