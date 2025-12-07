# Vercel Deployment Fix - Do This Now!

## The Problem
Vercel is looking for an Express entrypoint because it's trying to deploy the entire repo (including backend).

## SOLUTION: Set Root Directory in Vercel

### Step 1: Go to Vercel Dashboard
1. Open: https://vercel.com/dashboard
2. Click on your project: **grabzy-five** (or whatever it's named)

### Step 2: Go to Settings
1. Click **Settings** tab at the top
2. Click **General** in the left sidebar

### Step 3: Set Root Directory
1. Scroll down to **"Root Directory"**
2. Click **Edit**
3. Type: `frontend`
4. Click **Save**

### Step 4: Redeploy
1. Go to **Deployments** tab
2. Click the **three dots (...)** on the latest deployment
3. Click **Redeploy**
4. Click **Redeploy** again to confirm

---

## Alternative: If Root Directory Doesn't Work

### Option A: Use Vercel CLI
```bash
cd frontend
vercel --prod
```

### Option B: Create Separate Vercel Project
1. In Vercel dashboard, create a **new project**
2. Import from GitHub
3. Select your repo
4. Set **Root Directory** to `frontend` during setup
5. Add environment variable: `REACT_APP_API_URL=https://grabzy-jt4h.onrender.com/api`
6. Deploy

---

## What Should Happen

After setting Root Directory to `frontend`:
- ✅ Vercel will only build the React app
- ✅ It will ignore the backend folder
- ✅ No more "express entrypoint" errors

---

## Verify Settings

In Vercel Settings → General, you should see:
- **Framework Preset**: Create React App (or auto-detected)
- **Root Directory**: `frontend`
- **Build Command**: `npm run build` (default)
- **Output Directory**: `build` (default)

---

## Environment Variables

Make sure you have this in Vercel:
```
REACT_APP_API_URL=https://grabzy-jt4h.onrender.com/api
```

---

## After Deployment

Your frontend will be at: https://grabzy-five.vercel.app
It will call your backend at: https://grabzy-jt4h.onrender.com/api

Both should work together! 🎉
