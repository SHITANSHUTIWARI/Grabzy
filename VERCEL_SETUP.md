# Vercel Frontend Setup Guide

## Configure Vercel Project Settings

Go to your Vercel project → Settings → General

### Root Directory
Set to: `frontend`

This tells Vercel to treat the frontend folder as the root of your project.

### Build & Development Settings

**Framework Preset:** Create React App

**Build Command:** `npm run build` (default)

**Output Directory:** `build` (default)

**Install Command:** `npm install` (default)

### Environment Variables

Go to Settings → Environment Variables

Add only this:
```
REACT_APP_API_URL=https://grabzy-jt4h.onrender.com/api
```

## After Configuration

1. Save all settings
2. Go to Deployments tab
3. Click "Redeploy" on the latest deployment
4. Select "Use existing Build Cache" (optional)
5. Click "Redeploy"

## Result

- Frontend will build from the `frontend` directory
- It will connect to your Render backend
- No more "frontend directory not found" errors

## Quick Fix Alternative

If you can't change settings, create a `vercel.json` in the root:

```json
{
  "buildCommand": "npm --prefix frontend install && npm --prefix frontend run build",
  "outputDirectory": "frontend/build"
}
```

But setting Root Directory to `frontend` is cleaner!
