"""
Main script to generate the static website.
"""

import os
import sys
from .config import DATA_DIR, OUTPUT_DIR, TEMPLATE_DIR, STATIC_DIR
from .generators import PageGenerator
from .utils import load_yaml_file, ensure_directory_exists, copy_static_files


def main():
    """Main function to generate the website."""
    print("Building personal website...\n")
    
    # Ensure output directory exists
    ensure_directory_exists(OUTPUT_DIR)
    
    # Initialize page generator
    generator = PageGenerator()
    
    # Load data
    print("Loading data...")
    books_data = load_yaml_file(os.path.join(DATA_DIR, "books.yaml"))
    blog_data = load_yaml_file(os.path.join(DATA_DIR, "blog.yaml"))
    interests_data = load_yaml_file(os.path.join(DATA_DIR, "interests.yaml"))
    print(f"   Loaded {len(books_data)} books, {len(blog_data)} posts, {len(interests_data)} interests\n")
    
    # Copy CSS file to output
    print("Copying static files...")
    css_src = os.path.join(TEMPLATE_DIR, "styles.css")
    css_dst = os.path.join(OUTPUT_DIR, "styles.css")
    if os.path.exists(css_src):
        with open(css_src, 'r', encoding='utf-8') as f:
            css_content = f.read()
        with open(css_dst, 'w', encoding='utf-8') as f:
            f.write(css_content)
        print("   Copied styles.css\n")
    
    # Generate pages
    print("Generating pages...")
    generator.generate_index(OUTPUT_DIR)
    generator.generate_books_page(books_data, OUTPUT_DIR)
    generator.generate_blog_page(blog_data, OUTPUT_DIR)
    generator.generate_interests_page(interests_data, OUTPUT_DIR)
    
    print(f"\nWebsite built successfully!")
    print(f"Output directory: {OUTPUT_DIR}\n")


if __name__ == "__main__":
    main()
