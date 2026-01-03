#!/usr/bin/env python
# Windows build helper - run this to build the website
# Usage: python build.py

import subprocess
import sys
import os

def main():
    # Set UTF-8 encoding
    os.environ['PYTHONIOENCODING'] = 'utf-8'
    
    print("Building website...\n")
    
    try:
        result = subprocess.run(
            [sys.executable, '-m', 'src'],
            cwd=os.path.dirname(os.path.abspath(__file__))
        )
        
        if result.returncode == 0:
            print("\n✓ Build complete! You can now:")
            print("  - Open output/index.html in a browser")
            print("  - Run 'python serve.py' to start local server")
        else:
            print("\n✗ Build failed!")
            sys.exit(1)
            
    except Exception as e:
        print(f"\nError: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
