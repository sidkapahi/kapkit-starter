# Project name

One line on what this is and who it's for.

**Live:** https://myapp.kapkit.ca · **Worker:** `kapkit-myapp`

<!-- kapkit-starter: delete from here to the "end of starter setup" line once the project is set up. -->

## Starter setup

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sidkapahi/kapkit-starter)

This repo is the kapKit starter. The button above gives you a new GitHub repo
and a Cloudflare Worker that deploys on every push, with preview URLs for every
branch. This README is copied into the new repo as the template for its own
README: fill in the sections below and delete this one.

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

### 3. Drop in your images

Replace these placeholders in `public/`, keeping the file names:

| File | Used for | Size |
| --- | --- | --- |
| `favicon.png` | Browser tab icon, home-screen icon, and the project icon in preview-bot | Square, 256×256 or larger |
| `og-image.png` | Social share card when the link is pasted into Discord, Slack, iMessage, X | 1200×630 |
| `discord-preview.png` | preview-bot's preview image | Whatever preview-bot expects |

Then in `public/index.html`, change `myapp.kapkit.ca` in the `og:url` and
`og:image` tags to your domain, and update the title and description tags.

### 4. Make this README yours

Replace the title, the one-liner and the **Live** line at the top, fill in
**About**, then delete this section.

<!-- end of starter setup -->

## About

What the project does, and anything a newcomer should know first.

## Layout

- `public/`: static site. `favicon.png` doubles as the project icon in preview-bot.
- `src/index.js`: Worker for anything that isn't a static file (404 by default).
- `wrangler.jsonc`: Worker config.

## Local dev

```sh
npm install
npx wrangler dev
```

## Deploys

Every push to `main` deploys to production. Every other branch gets its own
preview URL, and preview-bot posts it to Discord.

Set `version` in `package.json` above `0.0.0` once you want the **Release**
field to show in Discord.
