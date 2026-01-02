# Personal Website Framework - Getting Started

Welcome! Your modular personal website framework is ready. Here's what you have:

## 🎯 Quick Start

### 1. Build the Site
```bash
python -m src.main
```

### 2. View Locally
```bash
python serve.py
```
Then open `http://localhost:8000` in your browser.

### 3. Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

GitHub Actions will automatically build and deploy to `https://shriyans-ss.github.io/website`

## 📁 What You Have

### Core Modules (`src/`)
- **config.py** - Site settings (title, author, URLs, etc.)
- **models.py** - Data classes for Book, BlogPost, Interest, Resource
- **generators.py** - Jinja2 template renderer and page generators
- **utils.py** - Helper functions (YAML loading, file I/O)
- **main.py** - Main build script that orchestrates everything

### Templates (`templates/`)
- **base.html** - Master template with header/footer includes
- **index.html** - Homepage with card grid layout
- **books.html** - Books listing with details
- **blog.html** - Blog posts with tags
- **interests.html** - Interests/hobbies with resources
- **styles.css** - Green theme (fully customizable)
- **components/** - Reusable header, footer, card templates

### Data (`data/`)
- **books.yaml** - Your favorite books
- **blog.yaml** - Blog posts
- **interests.yaml** - Your hobbies and interests

### Automation
- **.github/workflows/build-deploy.yml** - Automatic GitHub Pages deployment
- **serve.py** - Local development server

## 🎨 Green Theme Features

The site uses a professional green color scheme:
- Primary: `#2d5016` (deep forest green)
- Light: `#4a7c2e` (mid green)
- Lighter: `#7db857` (bright green)
- Background: `#e8f5e9` (pale green tint)

All colors are CSS variables, easily customizable in `templates/styles.css`

## 🔧 Customization

### Change Site Info
Edit `src/config.py`:
```python
SITE_AUTHOR = "Your Name"
SITE_TITLE = "Your Website"
GITHUB_USERNAME = "your-username"
EMAIL = "your-email@example.com"
```

### Add Your Content
Edit the YAML files in `data/`:
- Add books with title, author, rating, etc.
- Add blog posts with date, excerpt, tags
- Add interests with description, topics, resources

### Change Colors
Edit `templates/styles.css` CSS variables at the top:
```css
--primary-green: #your-color;
--light-green: #your-color;
```

### Add New Pages
1. Create a new template: `templates/yourpage.html`
2. Create data file: `data/yourpage.yaml`
3. Add generator method in `src/generators.py`
4. Call it from `src/main.py`
5. Add navigation link in `templates/components/header.html`

## 📊 Architecture Benefits

✅ **Modular** - Each Python file has a single responsibility
✅ **Reusable** - Templates use includes and inheritance
✅ **Data-Driven** - Content in YAML, not hardcoded
✅ **Maintainable** - Easy to update and extend
✅ **Static** - No database or server needed
✅ **Fast** - Plain HTML/CSS delivered by GitHub Pages
✅ **Automated** - GitHub Actions builds on every push

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)
- Automatic deployment via GitHub Actions
- Free hosting at `https://shriyans-ss.github.io/website`
- HTTPS included
- No configuration needed

### Option 2: Manual Deployment
- Run `python -m src.main` locally
- Upload `output/` directory contents to any web host

### Option 3: Other Static Hosts
- Netlify (auto-deploys from GitHub)
- Vercel (auto-deploys from GitHub)
- AWS S3 (manual upload of `output/` folder)

## 📝 File Organization Tips

```
website/
├── src/              # Don't edit - core logic
├── templates/        # Edit for layout changes
├── data/             # Edit for content changes
├── output/           # Generated (don't commit)
├── .github/          # GitHub Actions workflows
└── static/           # Add images, fonts, etc. here
```

## ⚡ Build Process

When you run `python -m src.main`:
1. Reads YAML data files
2. Initializes Jinja2 template engine
3. Renders each template with data
4. Writes HTML to `output/` directory
5. Copies CSS stylesheet to `output/`

Total time: < 1 second

## 🔐 GitHub Pages Setup

1. Go to your repository settings
2. Scroll to "Pages" section
3. Set source to: "GitHub Actions"
4. Done! Workflow triggers on every push

Your site will be live at:
`https://shriyans-ss.github.io/website`

## 📚 Learn More

- See `GUIDE.md` for detailed customization guide
- Jinja2 docs: https://jinja.palletsprojects.com/
- YAML format: https://yaml.org/
- GitHub Pages: https://pages.github.com/

## 🎉 You're All Set!

Your modular, green-themed personal website framework is ready to go. Edit the YAML files with your content, customize the colors, and push to GitHub to deploy!

Happy building! 🚀
