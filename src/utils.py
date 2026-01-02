"""
Utility functions for the website generator.
"""

import os
import yaml
from typing import List, Dict, Any


def load_yaml_file(filepath: str) -> List[Dict[str, Any]]:
    """
    Load data from a YAML file.
    
    Args:
        filepath: Path to the YAML file
        
    Returns:
        List of dictionaries from the YAML file
        
    Raises:
        FileNotFoundError: If the file doesn't exist
        yaml.YAMLError: If the YAML is invalid
    """
    if not os.path.exists(filepath):
        print(f"Warning: File not found: {filepath}. Returning empty list.")
        return []
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
            return data if data is not None else []
    except yaml.YAMLError as e:
        print(f"Error parsing YAML file {filepath}: {e}")
        return []


def ensure_directory_exists(dirpath: str) -> None:
    """
    Create a directory if it doesn't exist.
    
    Args:
        dirpath: Path to the directory to create
    """
    os.makedirs(dirpath, exist_ok=True)


def copy_static_files(src_dir: str, dst_dir: str) -> None:
    """
    Copy static files from source to destination directory.
    
    Args:
        src_dir: Source directory path
        dst_dir: Destination directory path
    """
    if not os.path.exists(src_dir):
        return
    
    ensure_directory_exists(dst_dir)
    
    for filename in os.listdir(src_dir):
        src_path = os.path.join(src_dir, filename)
        dst_path = os.path.join(dst_dir, filename)
        
        if os.path.isfile(src_path):
            with open(src_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(content)


def write_html_file(filepath: str, content: str) -> None:
    """
    Write HTML content to a file.
    
    Args:
        filepath: Path to the HTML file to create
        content: HTML content to write
    """
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
