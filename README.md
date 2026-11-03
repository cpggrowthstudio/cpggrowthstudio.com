# cpggrowthstudio.com

The website for CPG Growth Studio: a fractional CMO practice for founder-led pet, snack and toy brands.

It is a plain static site (HTML + one stylesheet, no build step), hosted on GitHub Pages.

## Pages

Home, /services/, /work/ (plus four case studies), /about/, /book/, /privacy/.

Styles: `assets/styles.css` (one font, Inter Tight; colours are tokens at the top). Interactions: `assets/app.js` (menu, YouTube click-to-play, logo fallbacks).

## Logos and videos

- Logos load from Wikimedia Commons. If one fails, the brand name shows as text. To use your own files, put them in `assets/logos/` and change the `src`.
- Case study videos are YouTube embeds, set by `data-id="VIDEO_ID"` on each `.yt` button. Swap in the exact spots you want.

## Placeholders to fill

- **Booking link:** every "Book a free 30-min call" button points to `/book/`. Paste your Calendly or Cal.com embed into `book/index.html` where the `TODO` comment is.
- **Testimonials:** search for `[Testimonial placeholder` in `index.html`.
- **Your photo:** search for `[Photo of Ahmed]`.
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
