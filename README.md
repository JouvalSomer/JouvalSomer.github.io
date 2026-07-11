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

## Publish it (first time)

1. Create a GitHub repo named **`JouvalSomer.github.io`** (exact match to your username makes it a user site served at `https://jouvalsomer.github.io`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/JouvalSomer/JouvalSomer.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow builds and deploys on every push to `main`. Your site goes live at `https://jouvalsomer.github.io`.

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
