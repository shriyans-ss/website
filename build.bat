@echo off
REM Build script for Windows PowerShell
REM Usage: build.bat

setlocal enabledelayedexpansion

REM Set UTF-8 encoding
set PYTHONIOENCODING=utf-8

REM Find Python in venv
for /f "delims=" %%I in ('where .venv\Scripts\python.exe') do set PYTHON=%%I

if "%PYTHON%"=="" (
    echo Error: Python not found in virtual environment
    echo Please install dependencies first:
    echo   pip install -r requirements.txt
    exit /b 1
)

echo Building website...
"%PYTHON%" -m src

if errorlevel 1 (
    echo Build failed!
    exit /b 1
) else (
    echo.
    echo Build complete! Open output/index.html in a browser or run: python serve.py
)
