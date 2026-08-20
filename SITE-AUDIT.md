# Site audit — missing info & recommendations

Snapshot taken 2026-08-18, against commit `457a57f`.

Two things to know up front:

1. **The site could not build.** Seven merge conflicts were committed to `main` across six
   files. `npm run build` failed outright, so the live site was serving the stale `output/`
   folder from an earlier commit. This is fixed — see [What I fixed](#what-i-fixed).
2. **Most of the content is still the starter template's sample data.** The bookshelf in
   particular is entirely fictional placeholder content.

---

## Part 1 — Missing info (things only you can fill in)

Ordered by how much damage they do if left as-is.

### M1 — The bookshelf is 100% sample data — **critical**

`data/books.yaml` still ships the scaffold's example list: *The Great Gatsby*, *To Kill a
Mockingbird*, *1984*, *The Catcher in the Rye*. The file's own first line says
`# Sample books - Add your favorite books here`.

The page above it reads *"A non-exhaustive list of books I've read."* Right now that
sentence is untrue, and these four titles are the single most recognizable "I didn't finish
setting this up" signal on the site.

**Needed:** real titles, authors, years, genres, your ratings, and a sentence per book in
your own voice. Even 5–6 real entries beats 4 placeholders.

### M2 — No contact information anywhere — **critical**

There is no email, GitHub, LinkedIn, ORCID, or Google Scholar link on any page. For a site
whose stated purpose is *"Please reach out to share something you're interested in"*, there
is currently no way to reach out.

**Needed:** at minimum an email address. I've left a ready-to-fill block in
`src/components/Footer.jsx`, commented out so nothing fake ships. Uncomment it and put your
real links in.

### M3 — No About page — **high**

Four routes exist: Home, Books, Blog, Interests. A visitor who lands on a research post has
no way to find out who wrote it, where you study, or what you're working toward.

**Needed:** a short bio (3–4 sentences), your affiliation/school, a photo if you're
comfortable with one, and optionally a CV/résumé link.

### M4 — Home page copy is template filler — **high**

In `src/pages/Home.jsx`:

- Eyebrow: *"Calm, focused, and readable"*
- Headline: *"Maps of curiosity, shared in small batches."*
- Body: *"A minimalist home for research threads, book notes, and the experiments that keep
  the questions open."*

None of this says who you are or what you do. The one genuinely personal paragraph on the
whole site is the "Neuroscience x robotics" panel card — that's the voice the rest should
match.

**Needed:** a headline naming you and your actual focus, and supporting copy in your own
words.

### M5 — The Alzheimer's post is missing all four figures — **high**

`data/blog.yaml` sets `imageDir: "vascular-figures"` for the vascular/Aβ–tau post, but no
such directory exists in `public/`. All four referenced images are absent:

- `flowdiagram.jpg`
- `workflow.jpg`
- `figure1.2.jpg`
- `figure2.2.jpg`

The figures fail silently (the markup hides broken images), so the post currently renders as
an unbroken wall of text with no visuals at all.

**Needed:** drop the four files into
`public/blog/vascular-dysfunction-ab-tau-alzheimers/images/` and change `imageDir` to match,
so it follows the same convention as the bibliometric post.

> Note the naming: `figure1.2.jpg` / `figure2.2.jpg` are unusual filenames. Worth renaming to
> `figure1.jpg` / `figure2.jpg` while you're in there.

### M6 — The Alzheimer's post has no references — **medium**

The bibliometric post carries four references. The vascular post cites PubMed and Web of
Science searches, PET/CSF/MRI studies, and bibliometric datasets, but lists no sources at
all. For a research write-up that's a credibility gap.

**Needed:** a `references:` list on that post matching the first post's format.

### M7 — Interests read as generic descriptions — **medium**

`data/interests.yaml` opens with `# Interests - Update these to customize your interests`.
The four entries (Neuroscience, Science Olympiad, Physics, Reading & Literature) are
plausibly yours, but the descriptions are encyclopedia-style definitions rather than your
perspective:

> *"Understanding the structure and function of the nervous system and the biological basis
> of behavior and cognition."*

The resource links are also generic portals — Goodreads, Project Gutenberg, Physics Stack
Exchange — rather than things you actually use.

**Needed:** rewrite each description as *why you care about this / what you're doing in it*.
Replace the resource links with papers, labs, tools, or communities you genuinely follow.

### M8 — Your name isn't in either author list — **needs your decision**

Neither blog post lists you among the authors. If you contributed, you should be credited.
If you're publishing collaborators' work, the site should say what your role was.

**Needed:** confirm the author lists, and add a line clarifying your contribution.

### M9 — Author name formatting is inconsistent — **low**

Post 1 uses compressed initials with no space — `M.Qara Ali`, `S.Chen`, `V.Bommisetty` —
while post 2 uses full names — `Ali Soliman`, `Vivaan Shah`. Pick one convention.

### M10 — Dates aren't machine-readable — **medium**

Dates are stored as `"March 2026"` and `"May 2026"`. Consequences:

- Posts render in **file order, not date order** — the May post currently appears *after* the
  March one on both the blog index and the home page.
- No `<time datetime="...">` element, so search engines can't read publication dates.
- You can't sort, filter, or generate a feed.

**Needed:** add an ISO date field (`date_iso: "2026-05-01"`) alongside the display string, and
sort by it. Happy to wire this up.

### M11 — Deployment target is unconfirmed — **medium**

There's no `.github/workflows/` directory, no `CNAME`, and no documented deploy step. The
built `output/` folder is committed to git even though `.gitignore` lists it, which suggests
manual publishing.

**Needed:** tell me where this deploys (GitHub Pages from `/output`? a branch? Netlify?) and
I'll set up a proper build-and-deploy action.

### M12 — No site-level metadata — **medium**

Missing: canonical URL, `og:url`, `sitemap.xml`, `robots.txt`. I've added Open Graph and
Twitter card tags to `index.html`, but the `og:image` and URL need your real domain before
they'll work when shared.

---

## Part 2 — What I fixed

### Build-breaking

| # | Issue | Where |
|---|---|---|
| F1 | 7 committed merge conflicts; build failed with a parse error | `index.html`, `src/styles.css`, `src/components/Layout.jsx`, `src/pages/{Blog,BlogPost,Books,Interests}.jsx` |
| F2 | Entire post-body renderer sat on the losing side of a conflict | `src/pages/BlogPost.jsx` |

Every conflict was resolved in favour of **your** content (the `HEAD` side) — your real
copy, your logo, your figure handling — discarding the original template's generic strings
("Quiet Futures Lab", "Notes on what keeps the mind sharp").

### Correctness

| # | Issue | Fix |
|---|---|---|
| F3 | `type: list` sections rendered as nothing — the Alzheimer's post's Objectives and all four Key Findings were silently dropped | Added list rendering (ordered + unordered) |
| F4 | Absolute asset paths (`/site-logo.png`, `/blog/…`) break under a GitHub Pages project subpath | Made paths relative to match Vite's `base: "./"` |
| F5 | Unknown URLs rendered a blank page | Added a proper 404 route |
| F6 | Home-page blog cards weren't clickable | Titles now link to the post |
| F7 | Ratings rendered as raw asterisks (`****`) | Real ★/☆ with a screen-reader label |
| F8 | Broken figures left orphaned captions | Figure hides as a unit |
| F9 | Hash anchors bypassed the router | Switched to router `Link`s |
| F10 | Unused import in `Home.jsx` | Removed |

### Design & accessibility

- Rebuilt the palette (see Part 3).
- Added a skip-to-content link and visible keyboard focus rings.
- Ticker marquee now respects `prefers-reduced-motion` (it previously kept animating).
- Nav is horizontally scrollable on mobile instead of wrapping into a tall stack.
- The decorative ticker now reads from your real tags and interests instead of the
  template's invented lab jargon ("Signal mapping", "Quiet experiments").

---

## Part 3 — Theme changes

**The problem:** the old theme painted a flat mid-sage green (`#9aa38f`) across the entire
page with transparent cards and no elevation. Everything sat on one plane, contrast was low,
and the card hover state used `rgba(255,255,255,0.2)` — a white border that was essentially
invisible against a light green ground.

**What changed:**

| | Before | After |
|---|---|---|
| Ground | Flat sage `#9aa38f` | Warm paper `#f4f2ed`, white card surfaces |
| Accent | Muted green-grey | Deep green `#1d5b4a`, used sparingly |
| Type | Playfair Display + Space Grotesk | Fraunces + Inter |
| Depth | None | Three-tier shadow scale |
| Dark mode | None | Full token-level dark palette |
| Layout | Full-bleed | Max-width 1140px, ~68ch reading measure |

The green identity is kept, but as a deliberate accent rather than a wash.

**Transitions added** — all on a shared easing curve, all disabled under
`prefers-reduced-motion`:

- Page-level fade-and-rise on every route change
- Staggered card entrance (cascading 40ms delays)
- Sticky header whose hairline border fades in only once you scroll
- Nav links with a scaling underline
- Card and button hover lifts with shadow transitions
- Animated underline on text links, arrow nudge on "back" links
- Marquee pauses on hover and fades at both edges instead of hard-cutting

---

## Part 4 — What I'd add next

### Content

1. **An About page.** The single highest-value addition. See M3.
2. **Split research from blogging.** Both current posts are formal research write-ups, but
   they sit under "Blog", which implies something more casual. Consider a **Research** or
   **Publications** section, and keep "Blog" for informal writing.
3. **Link to published versions.** If either study was presented or published, link the DOI,
   poster, or conference page — that's strong credibility signal.
4. **A now/updates line.** One sentence on what you're currently working on, dated. Cheap to
   maintain, and it shows the site is alive.
5. **Reading notes over ratings.** Two or three sentences on what a book changed for you is
   far more interesting than a star count.

### Features

6. **Tag filtering** on the blog index — the tag chips are rendered but aren't clickable.
7. **Reading time** per post, computed from word count.
8. **An RSS feed** — cheap to generate at build time, and researchers do subscribe.
9. **A dark-mode toggle.** The palette already supports it; right now it only follows the OS.
10. **Search** — worth it once you pass roughly ten posts, not before.

### Technical

11. **A GitHub Actions deploy workflow.** Removes the committed-build-output problem
    entirely. Blocked on M11.
12. **Convert figures to WebP** and add explicit `width`/`height`. The four JPEGs are the
    heaviest thing on the site and currently cause layout shift as they load.
13. **Prerender for SEO.** The site is a hash-routed SPA, so crawlers see an empty shell and
    every URL carries a `#`. `vite-plugin-ssg` or similar would give each post a real,
    indexable URL — this matters a lot if you want the research findable.
14. **Repo cleanup.** There's a substantial amount of dead weight:
    - **11 markdown files** at the root (`SUCCESS.md`, `VERIFIED.md`, `BUILD_REPORT.md`,
      `DEPLOYMENT_FIX.md`, `QUICK_REFERENCE.md`, …) — all scaffold artifacts, none describing
      the current site.
    - **An entire unused Python static-site generator**: `build.py`, `build.bat`, `serve.py`,
      `requirements.txt`, `src/*.py`, and the whole `templates/` directory. Nothing in the
      Vite build touches any of it.
    - **`output_backup_20260528T040956Z/`** — a committed build backup.
    - **`.DS_Store` files tracked in git** (both root and `src/`).

    Deleting all of this would remove roughly two-thirds of the repo's tracked files and make
    it obvious what's actually live.
15. **Commit hygiene.** Recent history is `fix`, `fix2`, `fix2`, `fix 2`, `fix1`, `ds strore
    fix`. Not urgent, but if you ever share this repo, descriptive messages help.

---

## Suggested order

**This week** — M1 (books), M2 (contact), M5 (missing figures). These three are the visible
"unfinished" signals.

**Next** — M3 (About), M4 (home copy), M7 (interests). This is the pass that makes the site
sound like you.

**Then** — M10/M11 (dates + deploy), then item 14 (repo cleanup), then item 13 (prerender)
if you want the research to be discoverable.
