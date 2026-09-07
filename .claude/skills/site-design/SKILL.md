---
name: site-design
description: Design and restyle Shriyans's personal research website (Vite + React + YAML content). Use when asked to change the site's look, layout, typography, colour, spacing, or component styling, or to redesign a page. Covers the architecture and the rules any visual change must respect.
user-invocable: true
---

# site-design — restyling the personal research site

## What this site is

A Vite + React SPA at `/Users/shriyanss/Documents/GitHub/website`, deployed to
GitHub Pages from `main` via `.github/workflows/deploy.yml`. Content is YAML,
not JSX — never hard-code content into components.

| Path | Holds |
|---|---|
| `data/blog.yaml` | Posts: research proposals, bibliometric analyses, literature reviews |
| `data/books.yaml` | Bookshelf |
| `data/interests.yaml` | Focus areas |
| `data/site.yaml` | Name, contact links, hero copy, public URL |
| `data/about.yaml` | Bio; the About page and its nav link stay hidden while `bio` is empty |
| `src/styles.css` | The entire stylesheet — token-driven, ~1100 lines |
| `src/pages/`, `src/components/` | Presentation only |

## Rules any visual change must respect

1. **Tokens first.** `:root` in `src/styles.css` defines surfaces, ink, accent,
   strokes and shadows. Restyle by changing tokens, not by sprinkling literal
   colours into rules. Every token needs a dark-mode value under
   `@media (prefers-color-scheme: dark)` — the site is used in dark mode.
2. **Never ship placeholder content.** Empty fields render as nothing rather
   than as fake data. Preserve that: a missing email shows no footer link, an
   empty bio hides the whole About page.
3. **Drafts must stay withheld.** `status: draft` posts are stripped from the
   production bundle by the `stripDraftPosts` plugin in `vite.config.js`, not
   merely hidden at runtime — their text must never reach the shipped JS.
   After any build, confirm `stripped N draft post(s)`.
4. **Assets stay relative.** `base: "./"` plus a Pages subpath means a leading
   `/` breaks images. Strip leading slashes when building image paths.
5. **Respect `prefers-reduced-motion`** — every animation is already gated.
6. **Long-form legibility wins.** Posts run to thousands of words with
   references; keep the `--measure` reading column and generous line-height.
7. **Verify, don't assume.** Run `npm run build` and grep the built bundle in
   `output/assets/` to confirm what did and didn't ship.

## Content genres

Posts carry an optional `kind` label (e.g. "Literature review") rendered beside
the date. The site mixes research proposals, bibliometric analyses and literature
reviews — design should let a reader tell them apart.

## Aesthetic direction

<!-- FILL THIS IN. Without it, restyling is guesswork.
     - Sites whose look you admire, and what specifically about them
     - Mood: austere / warm / editorial / technical?
     - Keep the deep green accent and Fraunces + Inter pairing, or start over?
     - What currently bothers you most?
-->
