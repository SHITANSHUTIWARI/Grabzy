# Quick Fix Checklist ✅

## Vercel (Frontend) - grabzy-five.vercel.app

### Environment Variables
- [ ] Remove: DATABASE_URL
- [ ] Remove: JWT_ACCESS_SECRET  
- [ ] Remove: JWT_REFRESH_SECRET
- [ ] Remove: PORT
- [ ] Change NODE_ENV from "development" to "production"
- [ ] Change FRONTEND_URL to "https://grabzy-five.vercel.app"
- [ ] Keep: REACT_APP_API_URL = "https://grabzy-jt4h.onrender.com/api"

### Deploy
- [ ] Push code to GitHub
- [ ] Wait for Vercel auto-deploy

---

## Render (Backend) - grabzy-jt4h.onrender.com

### Environment Variables (Fix These!)
- [ ] NODE_ENV = "production" (currently "development" ❌)
- [ ] FRONTEND_URL = "https://grabzy-five.vercel.app" (add https:// ❌)
- [ ] DATABASE_URL = (keep as is ✅)
- [ ] JWT_ACCESS_SECRET = (keep as is ✅)
- [ ] JWT_REFRESH_SECRET = (keep as is ✅)
- [ ] PORT = 5001 (keep as is ✅)

### Deploy
- [ ] Click "Manual Deploy" in Render dashboard
- [ ] Wait for deployment to complete

---

## MongoDB Atlas

- [ ] Network Access allows 0.0.0.0/0 (all IPs)

---

## Test After Deployment

1. [ ] Backend health: https://grabzy-jt4h.onrender.com/api
2. [ ] Frontend loads: https://grabzy-five.vercel.app
3. [ ] Frontend can fetch data from backend

---

## The Main Issues

1. **NODE_ENV = "development"** on Render → Should be "production"
2. **FRONTEND_URL missing https://** → Should be "https://grabzy-five.vercel.app"
3. **Vercel has backend env vars** → Remove them (backend is on Render, not Vercel)
