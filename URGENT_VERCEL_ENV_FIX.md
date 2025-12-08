# URGENT: Update Vercel Environment Variable

## THE PROBLEM
Your frontend is trying to call `http://localhost:5001/api` which doesn't exist in production!

## FIX NOW:

### 1. Go to Vercel Dashboard
https://vercel.com/dashboard

### 2. Select Your Project
Click on: **grabzy** (or your project name)

### 3. Go to Settings → Environment Variables

### 4. Find REACT_APP_API_URL
- If it exists, click **Edit**
- If it doesn't exist, click **Add New**

### 5. Set the Value
```
REACT_APP_API_URL=https://grabzy.onrender.com/api
```

**IMPORTANT:** Replace `grabzy.onrender.com` with your actual Render backend URL!

To find your Render backend URL:
1. Go to https://dashboard.render.com
2. Click on your backend service
3. Copy the URL at the top (it looks like: `https://your-service-name.onrender.com`)
4. Add `/api` at the end

### 6. Redeploy
After saving the environment variable:
1. Go to **Deployments** tab
2. Click the **three dots (...)** on the latest deployment
3. Click **Redeploy**

---

## ALTERNATIVE: Quick Test

If you want to test immediately without redeploying:

1. Open browser console on your frontend
2. Run:
```javascript
localStorage.setItem('REACT_APP_API_URL', 'https://your-backend.onrender.com/api');
```
3. Refresh the page

But you MUST update the Vercel environment variable for a permanent fix!
