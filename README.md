# Maritsalart

A chapter reader for a fantasy novel, published with GitHub Pages.

Live at: https://botnet1109.github.io/maritsalart/

## What it is

A static reading site. No framework, no build step, no database. GitHub Pages serves the repo root directly, so pushing to `main` updates the site.

- **`index.html`** — front page: title, blurb, table of contents, about, contact
- **`chapter.html`** — the reader. One page handles every chapter via `?ch=N`
- **`assets/chapters.js`** — **the only file you normally edit.** Book details and all chapter text
- **`assets/site.css`** — colours, type, spacing
- `404.html`, `robots.txt`, `sitemap.xml`, `og-image.png`

## Adding a chapter

Open `assets/chapters.js` and copy an existing block:

```js
{
  n: 3,
  title: "Chapter Three",
  subtitle: "The subtitle, or delete this line",
  body: `
    <p>First paragraph.</p>

    <p>Second paragraph.</p>
  `
},
```

Then commit. That's all — the table of contents, reading time, prev/next links and the browser tab title all update themselves.

Formatting rules for the body:

- Each paragraph wrapped in `<p> ... </p>`
- A blank line between paragraphs
- `<em>italics</em>`, `<strong>bold</strong>`
- `<hr>` for a scene break (renders as three centred dots)
- Do not use a backtick ( `` ` `` ) inside the body — it ends the string

## Book details

At the top of the same file:

```js
var BOOK = {
  title:  "Maritsalart",
  author: "Varun Singh",
  genre:  "Fantasy",
  blurb:  "…",
  email:   "varunsingh09@proton.me",
  youtube: "https://youtube.com/@panwar0911"
};
```

Changing `title`, `author` or `blurb` updates the front page, the reader header and the footer. `email` and `youtube` drive the Follow buttons — set either to `""` to drop that button.

## Reader features

- Previous / next chapter links, plus `←` `→` keyboard navigation (`Esc` returns to the contents)
- Reading progress bar across the top
- `A−` / `A+` text size control, remembered between visits
- Remembers the last chapter read, so the front page offers "Continue — Chapter N" and returns you to your place in the text
- Drop cap on each chapter's opening letter
- Reading time per chapter, calculated at ~220 words per minute

## Notes

The two chapters currently in `chapters.js` are **placeholder text**, there so the reader has something to render. Replace them with real writing.

You don't need to touch `sitemap.xml` when you add or remove chapters — every chapter is served by the same `chapter.html` page, and that single URL is already listed in the sitemap.

The site assumes it lives at `/maritsalart/`. If you rename the repo, update the `canonical` and `og:url` tags in `index.html`, the paths in `404.html`, and the URLs in `robots.txt` and `sitemap.xml`.

## Contact
varunsingh09@proton.me
