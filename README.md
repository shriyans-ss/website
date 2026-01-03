# Personal Website

A modular Python-based personal website framework built for GitHub Pages.

## Features

- Clean, modular architecture with separate Python modules
- Reusable Jinja2 HTML templates
- Green theme styling
- Sections for favorite books, blog posts, and interests
- Static site generation

## Project Structure

```
website/
├── src/                      # Python source code
│   ├── __init__.py
│   ├── main.py              # Main generator script
│   ├── config.py            # Configuration settings
│   ├── models.py            # Data models
│   ├── generators.py        # Page generators
│   └── utils.py             # Utility functions
├── templates/               # Jinja2 HTML templates
│   ├── base.html            # Base template
│   ├── index.html           # Homepage
│   ├── books.html           # Books page
│   ├── blog.html            # Blog page
│   ├── interests.html       # Interests page
│   ├── components/
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── card.html
│   └── styles.css           # Green theme styles
├── data/                    # YAML data files
│   ├── books.yaml
│   ├── blog.yaml
│   └── interests.yaml
├── static/                  # Static assets
├── output/                  # Generated HTML (git ignored)
├── requirements.txt         # Python dependencies
└── README.md
```

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Update data files in `data/` with your content

3. Generate the site:
   ```bash
   python -m src
   ```

4. Output will be in `output/` directory

## Deploying to GitHub Pages

1. Commit and push to your GitHub repository
2. In GitHub settings, enable GitHub Pages to publish from the `main` branch (or `gh-pages` if you want)
3. Your site will be available at `https://shriyans-ss.github.io/website`

## Customization

- Edit CSS in `templates/styles.css` to change colors and styling
- Modify templates in `templates/` to change layout
- Update data in `data/` YAML files with your content
- Adjust configuration in `src/config.py`
