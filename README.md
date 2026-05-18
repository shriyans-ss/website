# Personal Website

A React + Vite personal website designed for GitHub Pages.

## Features

- React single-page app with smooth transitions
- Sections for favorite books, blog posts, and interests
- YAML-driven content stored in `data/`
- GitHub Pages-friendly build output

## Project Structure

```
website/
├── data/                    # YAML data files
│   ├── books.yaml
│   ├── blog.yaml
│   └── interests.yaml
├── output/                  # Vite build output (git ignored)
├── src/                     # React source code
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Update data files in `data/` with your content

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Build for GitHub Pages:
   ```bash
   npm run build
   ```

## Deploying to GitHub Pages

1. Run `npm run build` to generate the `output/` folder
2. Publish the contents of `output/` with your GitHub Pages workflow or branch
3. Your site will be available at `https://<user>.github.io/<repo>`

## Customization

- Edit CSS in `src/styles.css` to change colors and styling
- Update components in `src/pages/` for layout changes
- Update data in `data/` YAML files with your content
