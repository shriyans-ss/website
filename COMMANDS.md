# Essential Commands

## Setup (One-time)
```bash
pip install -r requirements.txt
```

## Build Your Site
```bash
# Any of these work:
python -m src
python build.py
build.bat  # Windows only
```

## Test Locally
```bash
python serve.py
# Then open: http://localhost:8000
```

## Deploy to GitHub
```bash
git add .
git commit -m "Your message"
git push origin main
```

## Edit Your Content
```bash
# Site info
nano src/config.py

# Your books
nano data/books.yaml

# Your blog posts
nano data/blog.yaml

# Your interests
nano data/interests.yaml

# Colors/styling
nano templates/styles.css
```

## View Generated Files
```bash
# All generated HTML
ls -la output/

# Or on Windows:
dir output
```

## That's It!
Your site lives at: `https://shriyans-ss.github.io/website`
