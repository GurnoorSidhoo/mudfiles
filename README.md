# mudfiles

Study tools, animations and other things we make. A plain static website: no build step, no database. Every page is just an HTML file.

**Live site:** https://gurnoorsidhoo.github.io/mudfiles/

## How the site is organised

```
mudfiles/
├── index.html          the homepage (builds its cards from posts.js)
├── style.css           homepage styling
├── posts.js            THE LIST OF POSTS. Edit this to add one.
├── .nojekyll           tells GitHub Pages to serve files as-is
└── academic/
    └── pulse-wave-windkessel/
        ├── index.html  the animation itself
        └── thumb.svg   the picture on its homepage card
```

Each post gets its own folder, and its main file is always called `index.html`. That way the link is a clean `.../academic/pulse-wave-windkessel/`.

## Preview it on your own computer

Open a terminal in the `mudfiles` folder and run:

```
python3 -m http.server 8000
```

Then go to http://localhost:8000 in your browser. Press Ctrl+C in the terminal to stop it.

(Double-clicking `index.html` mostly works too, but the local server behaves exactly like the real site.)

## Put it online with GitHub Pages (one-time setup)

1. Make a free account at github.com.
2. Create a new repository. If you name it `mudfiles`, the site will live at `https://YOUR-USERNAME.github.io/mudfiles/`.
   - If you'd rather have `https://mudfiles.github.io/`, make a GitHub account or organisation called `mudfiles` and name the repository `mudfiles.github.io`.
3. Upload this folder's contents to the repository. Easiest: open the folder in Claude Code and ask it to "create a git repo, push this to github.com/YOUR-USERNAME/mudfiles". Or use the "Add file → Upload files" button on GitHub and drag everything in.
4. On GitHub, go to the repository's **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
5. Wait a minute or two. The link appears at the top of that Pages settings screen.

Every time you push a change, the site updates within a couple of minutes.

## Adding a new post

1. Make a new folder inside `academic/`, named in lowercase with dashes, e.g. `academic/cardiac-cycle/`.
2. Put the HTML file in it and rename it to `index.html`.
3. Add a thumbnail (`thumb.svg`, `thumb.png` or `thumb.jpg`) to the same folder. A screenshot of the animation is fine.
4. Open `posts.js`, copy an existing block, paste it at the top, and change the details.
5. Preview locally, then push.

Or just ask Claude Code: "Add this HTML file as a new academic post" and it will follow the steps in `CLAUDE.md`.

## Friends contributing

Add them as collaborators on GitHub (**Settings → Collaborators**), or have them send you the file and add it yourself.

## Later: music covers

Upload covers to YouTube or SoundCloud and embed the player in a post page. Don't put audio/video files in this repository. GitHub isn't built for large media.
