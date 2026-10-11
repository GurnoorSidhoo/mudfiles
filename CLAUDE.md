# Notes for Claude Code

This is **mudfiles**, a static website (plain HTML/CSS/JS, no framework, no build step) hosted on GitHub Pages. The owner, Gurnoor, is a beginner programmer: explain what you change in plain language, and prefer simple solutions over adding tools or dependencies.

## Structure
- `index.html` renders cards from the `POSTS` array in `posts.js`. Don't hard-code cards into `index.html`.
- Each post lives in `<category>/<slug>/index.html` with a `thumb.svg|png|jpg` beside it.
- Categories: `academic` now; `music` planned (embed YouTube/SoundCloud, never commit audio/video files).
- Use relative links only (the site may be served from a `/mudfiles/` subpath).

## Adding a post
1. Create `academic/<slug>/` (lowercase, dashes).
2. Copy the supplied HTML in as `index.html`. Keep the original content intact; only add:
   - a back link right after `<main>` (or the first element in `<body>`): `<a class="mf-back" href="../../">&larr; mudfiles</a>` plus its small CSS rule,
   - `· mudfiles` at the end of `<title>`, and a `<meta name="description">`.
3. Add a thumbnail. If no image is supplied, draw a simple 640×360 SVG that represents the topic.
4. Add an entry at the top of `POSTS` in `posts.js` with every field filled (title, path, thumb, category, subject, course, lecture, type, description, author, date in YYYY-MM-DD).
5. Check the page and homepage locally with `python3 -m http.server 8000`.
6. Commit with a clear message and push.

## Content
- Australian English spelling (haemoglobin, oesophagus, paediatric).
- Don't link to Monash Moodle pages or post university slides/recordings. Those need a login and aren't ours to share. Name the lecture instead.
- Flag anything in a submitted animation that looks physiologically wrong before publishing.
