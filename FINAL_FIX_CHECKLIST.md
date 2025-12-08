# Final Fix Checklist - Authentication Issue

## The Problem
Cross-domain authentication cookies aren't working between Vercel (frontend) and Render (backend).

## Complete Fix Steps:

### 1. Verify Render Backend URL
First, find your actual Render backend URL:
1. Go to: https://dashboard.render.com
2. Click on your backend service
3. Copy the full URL (e.g., `https://grabzy-c436.onrender.com`)

### 2. Update Vercel Environment Variable
1. Go to: https://vercel.com/dashboard
2. Click your project → Settings → Environment Variables
3. Update `REACT_APP_API_URL` to: `https://YOUR-BACKEND-URL.onrender.com/api`
4. Make sure it ends with `/api`

### 3. Update Render Environment Variable
1. Go to: https://dashboard.render.com
2. Click your backend service
3. Go to Environment section
4. Update `FRONTEND_URL` to: `https://grabzy-seven.vercel.app`
5. Make sure it starts with `https://` (not http)

### 4. Redeploy Both Services
**Render:**
- Click "Manual Deploy" → "Clear build cache & deploy"

**Vercel:**
- Go to Deployments → Click "..." → "Redeploy"

### 5. Test After Deployment
1. Clear browser cookies (important!)
2. Go to your frontend
3. Register a new account OR login
4. Try to place an order

---

## If Still Not Working:

The issue might be that cookies don't work cross-domain at all. In that case, we need to switch from cookies to Authorization headers.

Let me know if you want me to implement the Authorization header approach instead.

---

## Quick Check:
- [ ] Render backend URL is correct in Vercel
- [ ] Vercel frontend URL is correct in Render
- [ ] Both URLs use HTTPS
- [ ] Both services have been redeployed
- [ ] Browser cookies have been cleared
