# Deployment Action Checklist

## What Was Fixed ✅

- [x] GitHub Actions workflow updated to build and deploy
- [x] Output files verified (index.html + all pages + CSS)
- [x] Relative paths confirmed (will work at /website/ subpath)
- [x] .nojekyll file added to workflow
- [x] Permissions updated for gh-pages branch creation

## Next Steps (For You)

### Step 1: Update Your GitHub Pages Settings (One-time)
1. Go to: `https://github.com/shriyans-ss/website/settings/pages`
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages`
   - **Folder**: Select `/ (root)`
3. Click "Save"

### Step 2: Trigger the New Workflow
```bash
git add .
git commit -m "Fix GitHub Pages deployment workflow"
git push origin main
```

### Step 3: Monitor the Build
1. Go to: `https://github.com/shriyans-ss/website/actions`
2. Wait for the workflow to complete (should see green checkmark)
3. Check the logs if there are any issues

### Step 4: Verify Deployment
- [ ] Visit: `https://shriyans-ss.github.io/website/`
- [ ] Verify homepage loads (no 404)
- [ ] Check that CSS loads (page should be styled in green)
- [ ] Click navigation links to test other pages

## Files Modified

1. **`.github/workflows/build-deploy.yml`**
   - Updated to build with Python 3.11
   - Added .nojekyll file creation
   - Changed to deploy to gh-pages branch
   - Uses peaceiris/actions-gh-pages@v3

## How It Works Now

```
You push to main
    ↓
GitHub Actions triggered
    ↓
Python builds site to output/
    ↓
Workflow deploys output/ to gh-pages
    ↓
GitHub Pages serves from gh-pages
    ↓
Your site is live!
```

## Deploy Your Content

After this is set up, deploying is easy:

```bash
# Edit your content
nano data/books.yaml
nano src/config.py

# Push to GitHub
git add .
git commit -m "Update content"
git push origin main

# GitHub Actions automatically builds and deploys!
```

## Troubleshooting

**Site still shows 404?**
- [ ] Check workflow ran: https://github.com/shriyans-ss/website/actions
- [ ] Verify Pages settings: https://github.com/shriyans-ss/website/settings/pages
- [ ] Try hard refresh: Ctrl+Shift+R

**CSS not loading?**
- [ ] Check browser DevTools (F12) → Network tab
- [ ] Verify styles.css loads with 200 status
- [ ] Clear browser cache

**Workflow failed?**
- [ ] Click the failed workflow in Actions
- [ ] Scroll down to see error logs
- [ ] Common issues: missing dependencies, Python version

## Done! 

Once you've completed the steps above, your site will be live and automatically update whenever you push to main. 🚀
