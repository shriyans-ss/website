"""
Configuration settings for the personal website generator.
"""

import os
from datetime import datetime

# Site configuration
SITE_TITLE = "Personal Website"
SITE_AUTHOR = "Shriyans"
SITE_DESCRIPTION = "Welcome to my personal website. Explore my favorite books, blog posts, and interests."
SITE_YEAR = datetime.now().year

# Author information
GITHUB_USERNAME = "shriyans-ss"
EMAIL = "your-email@example.com"

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")
DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Template configuration
JINJA_GLOBALS = {
    "site_title": SITE_TITLE,
    "site_author": SITE_AUTHOR,
    "site_description": SITE_DESCRIPTION,
    "site_year": SITE_YEAR,
    "github_username": GITHUB_USERNAME,
    "email": EMAIL,
}
