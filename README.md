# cpggrowthstudio.com

The website for CPG Growth Studio: a fractional CMO practice for founder-led pet, snack and toy brands.

It is a plain static site (HTML + one stylesheet, no build step), hosted on GitHub Pages.

## Pages

| URL | File |
| --- | --- |
| / | `index.html` |
| /services/ | `services/index.html` |
| /pet/ | `pet/index.html` |
| /snacks-toys/ | `snacks-toys/index.html` |
| /work/ and the four case studies | `work/…/index.html` |
| /ai-growth-engine/ | `ai-growth-engine/index.html` |
| /about/ | `about/index.html` |
| /book/ | `book/index.html` |
| /privacy/ | `privacy/index.html` |

Styles live in `assets/styles.css` (colours and fonts are tokens at the top). Small interactions (menu, scroll reveals, number count-ups) are in `assets/app.js`.

## Placeholders to fill

- **Booking link:** every "Book a call" button points to `/book/`. Paste your Calendly or Cal.com embed into `book/index.html` where the `TODO` comment is.
- **Testimonials:** search for `[Testimonial placeholder` in `index.html`.
- **Photos and case study media:** search for `media-ph`. Replace each placeholder `<div>` with an `<img>` or video embed (put files in `assets/`).
- **LinkedIn:** search for `data-todo="linkedin"` and set the `href`.

## Publish with GitHub Pages

1. Merge the pull request into `main`.
2. Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
3. After a minute or two the site is live at `https://cpggrowthstudio.github.io/cpggrowthstudio.com/`.
4. **Custom domain (when ready):** in the same Pages settings, enter `www.cpggrowthstudio.com`. At your domain registrar, add:
   - a `CNAME` record for `www` pointing to `cpggrowthstudio.github.io`
   - `A` records for the bare domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Once DNS resolves, tick **Enforce HTTPS**.

Links between pages are relative, so the site works both at the github.io address and on the custom domain.
