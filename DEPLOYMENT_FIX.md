# Fix Your Deployment - Quick Guide

## Current Setup
- **Backend**: Render (https://grabzy-jt4h.onrender.com/api)
- **Frontend**: Vercel (https://grabzy-five.vercel.app)

## Fix Steps

### 1. Update Vercel Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

**DELETE the backend variables** (DATABASE_URL, JWT secrets, PORT) - you don't need them on Vercel since backend is on Render.

**KEEP ONLY THIS:**
```
REACT_APP_API_URL=https://grabzy-jt4h.onrender.com/api
```

### 2. Update Render Environment Variables

Go to Render Dashboard → Your Backend Service → Environment

**Fix these values:**

```
NODE_ENV=production  (change from "development")
FRONTEND_URL=https://grabzy-five.vercel.app  (add https://)
DATABASE_URL=mongodb+srv://shitanshutiwari2024_db_user:ymSMgWwn3uHQvMjY@cluster0.eihypps.mongodb.net/blinket
JWT_ACCESS_SECRET=blinket_access_secret_key_2024_change_in_production
JWT_REFRESH_SECRET=blinket_refresh_secret_key_2024_change_in_production
PORT=5001
```

### 3. Redeploy Both Services

**Render:**
- Go to your backend service
- Click "Manual Deploy" → "Deploy latest commit"

**Vercel:**
- Push your code changes:
```bash
git add .
git commit -m "Fix deployment configuration"
git push
```

### 4. Test

After both deployments complete:
1. Test backend: https://grabzy-jt4h.onrender.com/api
2. Test frontend: https://grabzy-five.vercel.app

## Why This Setup?

- **Render** hosts your backend (better for traditional Node.js servers)
- **Vercel** hosts your frontend (optimized for React apps)
- Frontend calls backend via REACT_APP_API_URL

## Common Issues

**If backend still fails:**
- Check Render logs for errors
- Verify MongoDB Atlas allows connections from 0.0.0.0/0
- Make sure Prisma is generated during build

**If frontend can't connect:**
- Verify REACT_APP_API_URL is correct in Vercel
- Check CORS settings in backend allow your frontend URL
