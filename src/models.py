"""
Data models for the website content.
"""

from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any


@dataclass
class Book:
    """Represents a book entry."""
    title: str
    author: str
    description: Optional[str] = None
    genre: Optional[str] = None
    rating: Optional[int] = None
    year: Optional[int] = None
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            "title": self.title,
            "author": self.author,
            "description": self.description,
            "genre": self.genre,
            "rating": self.rating,
            "year": self.year,
        }


@dataclass
class BlogPost:
    """Represents a blog post."""
    title: str
    date: str
    excerpt: str
    link: Optional[str] = None
    tags: List[str] = field(default_factory=list)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            "title": self.title,
            "date": self.date,
            "excerpt": self.excerpt,
            "link": self.link,
            "tags": self.tags,
        }


@dataclass
class Resource:
    """Represents a resource link."""
    name: str
    url: str
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {"name": self.name, "url": self.url}


@dataclass
class Interest:
    """Represents an interest/hobby."""
    title: str
    emoji: Optional[str] = None
    description: Optional[str] = None
    topics: List[str] = field(default_factory=list)
    resources: List[Resource] = field(default_factory=list)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            "title": self.title,
            "emoji": self.emoji,
            "description": self.description,
            "topics": self.topics,
            "resources": [r.to_dict() for r in self.resources],
        }
