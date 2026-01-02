#!/usr/bin/env python
"""
Simple local web server for testing the generated website.
Run this script and open http://localhost:8000 in your browser.
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

def start_server():
    """Start a simple HTTP server."""
    output_dir = Path(__file__).parent / "output"
    
    if not output_dir.exists():
        print("❌ Error: output/ directory not found!")
        print("   Please run: python -m src.main")
        sys.exit(1)
    
    os.chdir(output_dir)
    
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print(f"✨ Starting local server at {url}")
            print(f"📁 Serving from: {output_dir}")
            print(f"🛑 Press Ctrl+C to stop\n")
            
            # Try to open in browser
            try:
                webbrowser.open(url)
            except:
                pass
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✋ Server stopped.")
    except OSError as e:
        print(f"❌ Error: {e}")
        print(f"   Port {PORT} may already be in use. Try a different port.")
        sys.exit(1)

if __name__ == "__main__":
    start_server()
