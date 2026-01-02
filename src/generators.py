"""
Page generators using Jinja2 templates.
"""

from jinja2 import Environment, FileSystemLoader, select_autoescape
from typing import List, Dict, Any
from .config import TEMPLATE_DIR, JINJA_GLOBALS
from .models import Book, BlogPost, Interest
from .utils import write_html_file, load_yaml_file
import os


class PageGenerator:
    """Generator for static HTML pages."""
    
    def __init__(self):
        """Initialize the Jinja2 environment."""
        self.env = Environment(
            loader=FileSystemLoader(TEMPLATE_DIR),
            autoescape=select_autoescape(['html', 'xml']),
            trim_blocks=True,
            lstrip_blocks=True,
        )
        # Add global variables to Jinja environment
        for key, value in JINJA_GLOBALS.items():
            self.env.globals[key] = value
    
    def render_template(self, template_name: str, context: Dict[str, Any] = None) -> str:
        """
        Render a Jinja2 template with the given context.
        
        Args:
            template_name: Name of the template file
            context: Context dictionary for the template
            
        Returns:
            Rendered HTML string
        """
        if context is None:
            context = {}
        
        template = self.env.get_template(template_name)
        return template.render(**context)
    
    def generate_index(self, output_path: str) -> None:
        """
        Generate the index/home page.
        
        Args:
            output_path: Path to output directory
        """
        html = self.render_template("index.html")
        write_html_file(os.path.join(output_path, "index.html"), html)
        print("✓ Generated index.html")
    
    def generate_books_page(self, books: List[Dict[str, Any]], output_path: str) -> None:
        """
        Generate the books page.
        
        Args:
            books: List of book dictionaries
            output_path: Path to output directory
        """
        context = {"books": books}
        html = self.render_template("books.html", context)
        write_html_file(os.path.join(output_path, "books.html"), html)
        print(f"✓ Generated books.html ({len(books)} books)")
    
    def generate_blog_page(self, posts: List[Dict[str, Any]], output_path: str) -> None:
        """
        Generate the blog page.
        
        Args:
            posts: List of blog post dictionaries
            output_path: Path to output directory
        """
        context = {"blog_posts": posts}
        html = self.render_template("blog.html", context)
        write_html_file(os.path.join(output_path, "blog.html"), html)
        print(f"✓ Generated blog.html ({len(posts)} posts)")
    
    def generate_interests_page(self, interests: List[Dict[str, Any]], output_path: str) -> None:
        """
        Generate the interests page.
        
        Args:
            interests: List of interest dictionaries
            output_path: Path to output directory
        """
        context = {"interests": interests}
        html = self.render_template("interests.html", context)
        write_html_file(os.path.join(output_path, "interests.html"), html)
        print(f"✓ Generated interests.html ({len(interests)} interests)")
