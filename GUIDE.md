# Quick Reference Guide

## Running the Website Generator

### Local Development

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Generate the site:**
   ```bash
   python -m src.main
   ```

3. **View output:**
   - Generated HTML files will be in the `output/` directory
   - Open `output/index.html` in your browser

### Project Structure Explained

```
src/
├── __init__.py          # Package initialization
├── config.py            # Site configuration (title, author, paths)
├── models.py            # Data classes (Book, BlogPost, Interest)
├── generators.py        # Page generator using Jinja2
├── utils.py             # Helper functions (YAML loading, file I/O)
└── main.py              # Entry point - orchestrates the build

templates/
├── base.html            # Base template with header/footer
├── index.html           # Homepage with card grid
├── books.html           # Books listing page
├── blog.html            # Blog posts page
├── interests.html       # Interests/hobbies page
├── styles.css           # Green theme styles
└── components/
    ├── header.html      # Navigation header
    ├── footer.html      # Footer with links
    └── card.html        # Reusable card component

data/
├── books.yaml           # Book entries (YAML format)
├── blog.yaml            # Blog post entries (YAML format)
└── interests.yaml       # Interest entries (YAML format)
```

## Customization Guide

### 1. Change Site Information
Edit `src/config.py`:
```python
SITE_TITLE = "Your Site Title"
SITE_AUTHOR = "Your Name"
SITE_DESCRIPTION = "Your description"
GITHUB_USERNAME = "your-github-username"
EMAIL = "your-email@example.com"
```

### 2. Add Books
Edit `data/books.yaml`:
```yaml
- title: "Book Title"
  author: "Author Name"
  description: "Book description"
  genre: "Fiction"
  rating: 5
  year: 2024
```

### 3. Add Blog Posts
Edit `data/blog.yaml`:
```yaml
- title: "Post Title"
  date: "January 1, 2026"
  excerpt: "Post excerpt"
  tags:
    - tag1
    - tag2
```

### 4. Add Interests
Edit `data/interests.yaml`:
```yaml
- title: "Interest Name"
  emoji: "⚡"
  description: "Description"
  topics:
    - Topic 1
    - Topic 2
  resources:
    - name: "Resource Name"
      url: "https://example.com"
```

### 5. Customize Colors
Edit `templates/styles.css` - modify the CSS variables:
```css
:root {
    --primary-green: #2d5016;
    --light-green: #4a7c2e;
    --lighter-green: #7db857;
    /* ... more colors ... */
}
```

## Deploying to GitHub Pages

1. **Ensure GitHub Pages is enabled:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages` if you prefer)

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

3. **GitHub Actions will automatically:**
   - Build the site (run `python -m src.main`)
   - Deploy to GitHub Pages
   - Make it available at: `https://shriyans-ss.github.io/website`

## File Generation Details

When you run `python -m src.main`, it:
1. Loads YAML data from `data/` directory
2. Initializes Jinja2 template environment
3. Renders each template with the loaded data
4. Writes HTML files to `output/` directory
5. Copies CSS stylesheet to output

## Modularity Features

- **Separate Python modules**: Each module has a single responsibility
- **Reusable templates**: Base template with component includes
- **Data-driven**: Content in YAML files, not hardcoded in code
- **Easy to extend**: Add new pages by creating templates and updating main.py
- **Configuration management**: Centralized config.py file

## Adding New Pages

To add a new page (e.g., Projects):

1. **Create template:** `templates/projects.html`
   ```html
   {% extends "base.html" %}
   {% block title %}Projects - {{ site_author }}{% endblock %}
   {% block content %}
   <!-- Your content here -->
   {% endblock %}
   ```

2. **Create data file:** `data/projects.yaml`

3. **Create method in PageGenerator:** `src/generators.py`
   ```python
   def generate_projects_page(self, projects, output_path):
       # Load and render projects
   ```

4. **Update main.py:** Call the new method

5. **Update header.html:** Add navigation link

That's it! The modular structure makes it easy to expand.
