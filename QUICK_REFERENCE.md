<!-- Quick Reference Card -->

# 🚀 Quick Reference

## Build Command
```bash
python -m src
```

## Test Locally
```bash
python serve.py
```

## Deploy to GitHub
```bash
git add .
git commit -m "Update website"
git push origin main
```

## File Locations

| What | Where |
|------|-------|
| Site settings | `src/config.py` |
| Books content | `data/books.yaml` |
| Blog posts | `data/blog.yaml` |
| Interests | `data/interests.yaml` |
| Colors/styling | `templates/styles.css` |
| Page layouts | `templates/*.html` |
| Generated site | `output/` (deploy this) |

## Adding Content

### Add a Book
Edit `data/books.yaml`:
```yaml
- title: "Book Title"
  author: "Author Name"
  description: "Description"
  genre: "Genre"
  rating: 5
  year: 2024
```

### Add a Blog Post
Edit `data/blog.yaml`:
```yaml
- title: "Post Title"
  date: "January 1, 2026"
  excerpt: "Post excerpt"
  tags:
    - tag1
    - tag2
```

### Add an Interest
Edit `data/interests.yaml`:
```yaml
- title: "Interest Name"
  emoji: "⚡"
  description: "Description"
  topics:
    - Topic 1
  resources:
    - name: "Resource"
      url: "https://example.com"
```

## Customize Site Info

Edit `src/config.py`:
```python
SITE_TITLE = "Your Site Title"
SITE_AUTHOR = "Your Name"
SITE_DESCRIPTION = "Your description"
GITHUB_USERNAME = "your-username"
EMAIL = "your-email@example.com"
```

## Change Theme Colors

Edit `templates/styles.css` (look for :root variables):
```css
--primary-green: #2d5016;
--light-green: #4a7c2e;
--lighter-green: #7db857;
--pale-green: #e8f5e9;
```

## Directory Structure
```
website/
├── src/            # Python modules
├── templates/      # HTML templates  
├── data/           # Your content (YAML)
├── output/         # Generated HTML
├── static/         # Images, fonts, etc
└── .github/        # GitHub automation
```

## Live Site URL
```
https://shriyans-ss.github.io/website
```

## Common Tasks

### Update site title and author
→ Edit `src/config.py`

### Add more books
→ Add to `data/books.yaml`

### Change green color scheme
→ Edit CSS variables in `templates/styles.css`

### Add new page section
→ Create template + data file + generator method

### Fix generated HTML
→ Run `python -m src.main` again

### View locally before deploying
→ Run `python serve.py` → Open http://localhost:8000

## Project Stats
- Python modules: 5
- HTML templates: 8
- Data files: 3
- Generated pages: 4
- CSS framework: Responsive Green Theme
- Deployment: GitHub Pages (automatic)

## Tech Stack
- Python 3.13+
- Jinja2 (templates)
- PyYAML (data format)
- GitHub Pages (hosting)
- GitHub Actions (automation)

## Need Help?
- `SETUP.md` - Getting started
- `GUIDE.md` - Detailed customization
- `README.md` - Project overview
- `BUILD_REPORT.md` - Full build details

---
**Your green-themed personal website is ready to deploy!** 🎉
