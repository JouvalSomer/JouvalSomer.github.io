# JouvalSomer.github.io

Personal website and blog for Jouval Max Erik Somer: CV, publications, projects,
news, and writing. Built with [Jekyll](https://jekyllrb.com) and deployed to
GitHub Pages via GitHub Actions.

## Structure

```
_config.yml              Site configuration
_layouts/                default, page, post templates
_includes/               head, header, footer, annotations partials
_posts/                  Blog posts  (YYYY-MM-DD-title.md)
_news/                   News items  (short updates)
_projects/               Project entries
_data/talks.yml          Talks and teaching (feeds /talks/ and the CV)
assets/css/style.scss    Styles (light + dark theme)
assets/js/main.js        Theme toggle + mobile nav
assets/img/avatar.jpg    Profile photo (present but currently unused)
assets/cv/               CV PDF goes here (currently none — see below)
index.html               Home page
cv.md, publications.md, projects.md, talks.html, news.md, blog.html
.github/workflows/       CI build + deploy to Pages
```

## Design

The site is deliberately plain: no cards, no drop shadows, no rounded corners, no
pill buttons. Structure comes from hairline rules and whitespace instead. If you
add something new, match that.

| Decision | Value |
| --- | --- |
| Type | OS system sans (`Segoe UI` / SF / Roboto). `Source Sans 3` sits last in the stack as a fallback for platforms without a good built-in sans, mainly Linux. Browsers only download it if it is actually used, so most visitors fetch no font files. |
| Accent | Oxford Blue `#002147`, lightened to `#9cc0e8` in dark mode so links stay legible |
| Serif | None anywhere, including post bodies |
| Measure | 720px (`--maxw`) |
| Corners | `0` everywhere. No `border-radius`, no `box-shadow` |
| Header | Static, single hairline underneath. Not sticky, no backdrop blur |
| Dark mode | Manual toggle, rendered as a plain `Dark` / `Light` text link in the footer |
| Dates | `%-d %B %Y` |
| Photo | None on the front page |

Prose leans short and concrete. Avoid em-dashes, decorative arrow suffixes on
links (`All news →`), and three-item lists as a default sentence shape.

## Status & how to publish

The site is live at `https://jouvalsomer.github.io` (git remote `origin` →
`JouvalSomer/JouvalSomer.github.io`). Every push to `main` rebuilds and deploys
it; a deploy can also be started by hand from the Actions tab.

### Privacy note
GitHub Pages **cannot be password-protected** on a personal account. On **Free**,
Pages only publishes from a **public** repo. On **Pro/Team**, it can publish from
a private repo, but the resulting site is still publicly viewable. Truly private
(access-controlled) Pages is **Enterprise Cloud only**. So: tune locally while the
repo stays private, and only publish when you are ready for the site to be public.

### When you're ready to go live
1. Make the repo public (Free plan): `gh repo edit JouvalSomer/JouvalSomer.github.io --visibility public --accept-visibility-change-consequences`. Keep it private if you have Pro.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`, or trigger a deploy by hand: **Actions tab → "Build and deploy…" → Run workflow**.
4. Site goes live at `https://jouvalsomer.github.io`.

### Automatic rebuilds
The `push:` trigger at the top of `.github/workflows/jekyll.yml` deploys on
every push to `main`. Comment it out to go back to manual deploys only.

> If you instead use a differently-named repo (a "project site"), set
> `baseurl: "/repo-name"` in `_config.yml`.

## Run locally

Requires Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://127.0.0.1:4000
```

## Add content

- **Blog post:** create `_posts/YYYY-MM-DD-my-title.md` with front matter (`title`, `date`, `description`, `tags`).
- **News item:** create `_news/YYYY-MM-DD-slug.md` with a `date:` in front matter; the body is the update.
- **Project:** create `_projects/slug.md` with `title`, `order`, `description`, optional `stack:` list and `link:`.
- **Publication:** edit `publications.md` and copy a `pub-item` block.
- **Talk or teaching:** add an entry at the top of the `talks:` or `teaching:` list in `_data/talks.yml`. It appears on `/talks/` and, for talks, in the CV.

### Restoring the CV PDF

The PDF was removed before the site went public because it carried a phone
number, and it was purged from git history so it could not be recovered from
earlier commits. To put it back, re-export from your LaTeX source without the
phone number, drop it in `assets/cv/`, and re-add the download link near the top
of `cv.md`:

```html
<p class="cv-download">
  <a href="{{ '/assets/cv/Jouval_Somer_CV.pdf' | relative_url }}" target="_blank" rel="noopener">Download as PDF</a>
</p>
```

### Re-enabling annotations

`annotations` is `false` in `_config.yml`. With an empty `annotations_group` the
Hypothesis layer defaults to the public group, so on a public site any account
could annotate your posts visibly. Create a private group at
<https://hypothes.is/groups/new>, paste its ID into `annotations_group`, then set
`annotations: true`.

## Customise

- Colours, fonts, spacing → `assets/css/style.scss` (`:root` and `[data-theme="dark"]`).
- Nav links → `_includes/header.html`.
- Bio / hero text → `index.html`.
- To put the photo back on the front page, add an `<img>` to the `.hero` block in
  `index.html` and give it a width, height and `object-fit: cover` in the
  `/* Home / hero */` section of the stylesheet.
