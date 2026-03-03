# Setup & Deployment Guide

## Project Overview

This project has been converted from a static HTML page to a React SPA (Single Page Application) with:
- **636+ dynamically generated pages** (318 adversarial + 318 safe)
- **React Router** for client-side navigation
- **Vite** for fast builds
- **GitHub Actions** for automated deployment

## Project Structure

```
poc-playground/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── Index.jsx          # Homepage with disclaimer & page list
│   │   └── Page.jsx           # Individual page component
│   ├── data/
│   │   ├── allPages.js        # Combines adversarial + safe pages
│   │   └── generatePages.js   # Generates safe pages & embeds prompts
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # Entry point
├── public/                     # Static assets (if needed)
├── claw_adversarial_prompts_expanded.json  # Source data (318 prompts)
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── index.html                 # HTML template
```

## How It Works

1. **Data Loading**: `allPages.js` imports the adversarial prompts JSON and generates matching safe pages
2. **Page Generation**: Each adversarial prompt is embedded naturally within lorem ipsum text
3. **Routing**: React Router creates routes for the index (`/`) and individual pages (`/page/:id`)
4. **Build**: Vite bundles everything into static files in the `dist/` folder
5. **Deploy**: GitHub Actions automatically deploys to GitHub Pages on push to `main`

## Key Features

### Index Page (`/`)
- Clear disclaimer about the POC's purpose
- Warning about ethical use
- List of all 636+ pages in a grid layout
- Visual indicators for adversarial pages (severity badges)
- Link to GitHub repo

### Individual Pages (`/page/:id`)
- Lorem ipsum content with embedded adversarial prompts (visible)
- Metadata badges showing category, severity, subcategory
- Navigation to previous/next pages
- Warning banner on adversarial pages

### Safe vs Adversarial Pages
- **Safe Pages** (318): Random topics with pure lorem ipsum, no injections
- **Adversarial Pages** (318): Prompts embedded naturally in lorem ipsum text
- All pages shuffled randomly in the index to prevent pattern recognition

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Automatic (Recommended)
1. Commit and push changes to `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages
3. Site will be live at: https://jeremyculler.github.io/POC-Playground/

### Manual
```bash
npm run build
# Then upload contents of dist/ folder to your hosting
```

## GitHub Pages Configuration

Make sure your GitHub repo has Pages enabled:
1. Go to Settings → Pages
2. Source: "GitHub Actions"
3. The workflow will handle the rest

## Next Steps

After pushing to GitHub:
1. The GitHub Action will run automatically
2. Check the "Actions" tab to monitor deployment
3. Once complete, visit your GitHub Pages URL
4. Verify:
   - Index page loads correctly
   - Disclaimer is visible
   - Pages are accessible
   - Navigation works
   - Adversarial content is visible but embedded naturally

## Troubleshooting

**Build fails locally:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build`

**Pages don't load after deployment:**
- Check that `base` in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled in repo settings
- Check GitHub Actions logs for errors

**React Router 404s on refresh:**
- This is expected with GitHub Pages + SPA
- Users should navigate via the index page or internal links
- Alternatively, add a 404.html redirect (advanced)

## Files to Commit

Make sure to commit:
- All `src/` files
- `package.json` and `package-lock.json`
- `vite.config.js`
- `index.html`
- `.github/workflows/deploy.yml`
- `claw_adversarial_prompts_expanded.json`
- `README.md`

Do NOT commit:
- `node_modules/`
- `dist/`
- `.env` files (if any)

These are already in `.gitignore`.
