# JouvalSomer.github.io

Personal website & blog for Jouval Max Erik Somer — CV, publications, projects,
academic news, and a blog. Built with [Jekyll](https://jekyllrb.com) and deployed
to GitHub Pages via GitHub Actions.

## Structure

```
_config.yml              Site configuration
_layouts/                default, page, post templates
_includes/               head, header, footer partials
_posts/                  Blog posts  (YYYY-MM-DD-title.md)
_news/                   News items  (short updates)
_projects/               Project cards
assets/css/style.scss    Styles (light + dark theme)
assets/js/main.js        Theme toggle + mobile nav
assets/img/avatar.jpg    Profile photo (you add this)
assets/cv/*.pdf          CV PDF (you add this)
index.html               Home page
cv.md, publications.md, projects.md, news.md, blog.html
.github/workflows/       CI build + deploy to Pages
```

## Status & how to publish

The repo is already created, pushed, and **private** (git remote `origin` →
`JouvalSomer/JouvalSomer.github.io`). Nothing is published yet — the deploy
workflow is set to **manual only** (`workflow_dispatch`).

### Privacy note
GitHub Pages **cannot be password-protected** on a personal account. On **Free**,
Pages only publishes from a **public** repo. On **Pro/Team**, it can publish from
a private repo, but the resulting site is still publicly viewable. Truly private
(access-controlled) Pages is **Enterprise Cloud only**. So: tune locally while the
repo stays private, and only publish when you're ready for the site to be public.

### When you're ready to go live
1. Make the repo public (Free plan) — `gh repo edit JouvalSomer/JouvalSomer.github.io --visibility public --accept-visibility-change-consequences` — or keep private if you have Pro.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Trigger a deploy: **Actions tab → "Build and deploy…" → Run workflow**, or push after re-enabling the `push:` trigger in `.github/workflows/jekyll.yml`.
4. Site goes live at `https://jouvalsomer.github.io`.

### Enable automatic rebuilds on every push
Uncomment the `push:` trigger block at the top of
`.github/workflows/jekyll.yml`.

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
- **Photo / CV:** drop `avatar.jpg` in `assets/img/` and `Jouval_Somer_CV.pdf` in `assets/cv/`.

## Customise

- Colors, fonts, spacing → `assets/css/style.scss` (`:root` and `[data-theme="dark"]`).
- Nav links → `_includes/header.html`.
- Bio / hero text → `index.html`.
