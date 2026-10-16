# Deployment

How this repo gets from a `git push` to a live site, a branch preview, and a Discord ping. Cloudflare is managed through the **dashboard**, so steps below are dashboard click-paths.

## The picture

```
        push to a branch                          merge to main
               │                                        │
               ▼                                        ▼
   ┌──────── Cloudflare Workers Builds (Worker: kapkit-myapp) ────────┐
   │   wrangler (preview upload)               wrangler deploy        │
   └───────┬──────────────────────────────────────────┬───────────────┘
           ▼                                          ▼
  <branch>-kapkit-myapp                        myapp.kapkit.ca
  .sid-kapahi.workers.dev                      (production)
  (preview URL)                                       │
           └──── build event → Queue kapkit-build-events ┘
                                │
                                ▼
                build-notify Worker (sidkapahi/preview-bot)
                                │
                                ▼
               Discord: "Preview Ready" / "Live" / "Build Failed"
```

## 1. The site: Workers Builds

[`wrangler.jsonc`](../wrangler.jsonc) defines one Worker that serves `public/` as static assets, with `src/index.js` handling anything else.

- **`"previews": {}`** and **`"preview_urls": true`**: Workers Builds runs a preview upload for every non-production branch, which needs a `previews` block to exist. It's empty because the site has no runtime vars or bindings.
- **Observability** keeps request and console logs under the Worker's **Observability** tab.

In the dashboard (**Workers & Pages** → the Worker → **Settings** → **Build**):

- **Production branch**: `main`. Deploy command `npx wrangler deploy`.
- **Branch control**: **Builds for non-production branches** ticked. This is what gives preview URLs.
- **Domains & Routes**: the custom domain, e.g. `myapp.kapkit.ca`.

## 2. The preview bot (Discord)

Workers Builds sends build events to the `kapkit-build-events` queue, and the shared `build-notify` Worker in [sidkapahi/preview-bot](https://github.com/sidkapahi/preview-bot) turns them into Discord messages. The project is set up in <https://previewbot.kaplabs.ca> (channel, display name, production URL, icon).

## Commit messages

The preview bot builds each Discord message from the built commit's message: the **first line is the embed title** and **the rest is the description** (trailing `Key: value` trailers such as `Co-Authored-By:` are dropped, and the description is cut at 1000 characters). So every commit follows this format:

```
Short title of the change

One sentence on what this does, for someone skimming Discord.

- Detail of what changed
- Another detail

Co-Authored-By: …
```

- **Line 1, title**: imperative, under ~70 characters, no trailing period.
- **Quick description**: one sentence, after a blank line.
- **Details**: after another blank line; bullets or short paragraphs.
- **Don't hard-wrap.** Discord keeps every line break, so text wrapped at 72 columns shows up broken mid-sentence.

On `main`, PRs are squash-merged, so the deployed commit's title is the **PR title** (with ` (#123)` appended). For several commits, edit the squash message in GitHub's merge box into the same format.

## Known gotchas

- **Branch names become hostnames.** Long branch names are truncated in the preview URL, and two branches that slug the same way share a preview URL.
- **Keep the Worker name stable.** The `name` in `wrangler.jsonc` must match the Worker in Cloudflare, or deploys create a second Worker.
- **Plain dashboard variables get wiped** by the next deploy. Use **Secret** for Worker secrets.
