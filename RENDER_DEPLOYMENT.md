# 🚀 Render Deployment Guide for Blinket

## 📋 Prerequisites

1. ✅ GitHub repository with your code
2. ✅ Render account (free tier works)
3. ✅ MongoDB Atlas database (already have)

## 🎯 Deployment Options

### Option 1: Using render.yaml (Recommended)

This deploys both backend and frontend automatically.

#### Steps:

1. **Push to GitHub**
```bash
git add .
git commit -m "Add Render deployment config"
git push origin main
```

2. **Connect to Render**
   - Go to https://render.com
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will detect `render.yaml` automatically

3. **Set Environment Variables**

For **blinket-backend** service:
```
DATABASE_URL=mongodb+srv://shitanshutiwari2024_db_user:ymSMgWwn3uHQvMjY@cluster0.eihypps.mongodb.net/blinket
JWT_ACCESS_SECRET=blinket_access_secret_key_2024_change_in_production
JWT_REFRESH_SECRET=blinket_refresh_secret_key_2024_change_in_production
NODE_ENV=production
PORT=5001
FRONTEND_URL=https://your-frontend-url.onrender.com
```

For **blinket-frontend** service:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

4. **Deploy**
   - Click "Apply"
   - Wait for deployment (5-10 minutes)

---

### Option 2: Manual Deployment (If render.yaml doesn't work)

#### A. Deploy Backend

1. **Create New Web Service**
   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your GitHub repo

2. **Configure Backend**
```
Name: blinket-backend
Region: Singapore (or closest to you)
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install && npx prisma generate
Start Command: npm start
Plan: Free
```

3. **Environment Variables**
```
DATABASE_URL=mongodb+srv://shitanshutiwari2024_db_user:ymSMgWwn3uHQvMjY@cluster0.eihypps.mongodb.net/blinket
JWT_ACCESS_SECRET=blinket_access_secret_key_2024_change_in_production
JWT_REFRESH_SECRET=blinket_refresh_secret_key_2024_change_in_production
NODE_ENV=production
PORT=5001
FRONTEND_URL=https://your-frontend-url.onrender.com
```

4. **Deploy Backend**
   - Click "Create Web Service"
   - Wait for deployment
   - Copy the backend URL (e.g., https://blinket-backend.onrender.com)

#### B. Deploy Frontend

1. **Create New Static Site**
   - Click "New" → "Static Site"
   - Connect your GitHub repo

2. **Configure Frontend**
```
Name: blinket-frontend
Region: Singapore
Branch: main
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: build
Plan: Free
```

3. **Environment Variables**
```
REACT_APP_API_URL=https://blinket-backend.onrender.com/api
```
(Replace with your actual backend URL)

4. **Deploy Frontend**
   - Click "Create Static Site"
   - Wait for deployment

---

## 🔧 Post-Deployment Steps

### 1. Update CORS in Backend

After getting your frontend URL, update `backend/src/server.js`:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-frontend-url.onrender.com',
  credentials: true,
}));
```

### 2. Seed the Database

After backend is deployed, run seed:

**Option A: Using Render Shell**
1. Go to backend service in Render
2. Click "Shell" tab
3. Run: `npm run seed`

**Option B: Using API endpoint**
Create a seed endpoint (temporary):
```javascript
// In backend/src/server.js
app.get('/api/seed', async (req, res) => {
  // Run seed logic
  res.json({ message: 'Seeded' });
});
```

Then visit: `https://your-backend-url.onrender.com/api/seed`

### 3. Test the Application

1. Visit your frontend URL
2. Try logging in with admin credentials:
   - Email: admin@blinket.com
   - Password: Admin@123

---

## 🐛 Common Issues & Fixes

### Issue 1: "Cannot read package.json"

**Cause**: Render is looking in wrong directory

**Fix**: Set correct Root Directory
- Backend: `backend`
- Frontend: `frontend`

### Issue 2: "Prisma Client not generated"

**Cause**: Prisma generate not run during build

**Fix**: Update build command
```
npm install && npx prisma generate
```

### Issue 3: "CORS Error"

**Cause**: Frontend URL not in CORS whitelist

**Fix**: Add frontend URL to environment variables
```
FRONTEND_URL=https://your-frontend-url.onrender.com
```

### Issue 4: "Database connection failed"

**Cause**: MongoDB Atlas IP whitelist

**Fix**: 
1. Go to MongoDB Atlas
2. Network Access
3. Add IP: `0.0.0.0/0` (allow all)

### Issue 5: "Build fails on free tier"

**Cause**: Not enough memory

**Fix**: 
- Reduce dependencies
- Or upgrade to paid tier

---

## 📊 Environment Variables Checklist

### Backend ✅
- [ ] DATABASE_URL
- [ ] JWT_ACCESS_SECRET
- [ ] JWT_REFRESH_SECRET
- [ ] NODE_ENV
- [ ] PORT
- [ ] FRONTEND_URL

### Frontend ✅
- [ ] REACT_APP_API_URL

---

## 🎯 Quick Deploy Commands

### If using render.yaml:

```bash
# 1. Commit changes
git add .
git commit -m "Deploy to Render"
git push origin main

# 2. Go to Render → New → Blueprint
# 3. Connect repo
# 4. Set environment variables
# 5. Deploy
```

### If deploying manually:

```bash
# Backend
Root Directory: backend
Build: npm install && npx prisma generate
Start: npm start

# Frontend
Root Directory: frontend
Build: npm install && npm run build
Publish: build
```

---

## 🔐 Security Notes

### Production Secrets

Change these in production:

```env
JWT_ACCESS_SECRET=your_super_secret_key_here_min_32_chars
JWT_REFRESH_SECRET=your_another_secret_key_here_min_32_chars
```

Generate secure secrets:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 📱 Testing Deployment

### Backend Health Check
```
GET https://your-backend-url.onrender.com/
Response: { "message": "Blinket API is running" }
```

### Frontend Check
```
Visit: https://your-frontend-url.onrender.com
Should see: Blinket home page
```

### API Test
```
GET https://your-backend-url.onrender.com/api/products
Should return: List of products
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas accessible (IP: 0.0.0.0/0)
- [ ] Environment variables ready
- [ ] Root package.json exists
- [ ] render.yaml configured (if using)

During deployment:
- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Environment variables set
- [ ] Database seeded

After deployment:
- [ ] Test login
- [ ] Test product listing
- [ ] Test cart
- [ ] Test checkout
- [ ] Test admin panel

---

## 💡 Pro Tips

1. **Free Tier Limitations**
   - Services sleep after 15 min inactivity
   - First request after sleep takes ~30 seconds
   - 750 hours/month free

2. **Keep Services Awake**
   - Use a service like UptimeRobot
   - Ping your backend every 10 minutes

3. **Logs**
   - Check Render logs for errors
   - Backend logs show API requests
   - Frontend logs show build issues

4. **Updates**
   - Push to GitHub triggers auto-deploy
   - Or manually deploy from Render dashboard

---

## 🆘 Still Having Issues?

### Check These:

1. **Render Logs**
   - Go to service → Logs tab
   - Look for error messages

2. **MongoDB Connection**
   - Test connection string locally
   - Check IP whitelist

3. **Environment Variables**
   - Verify all are set
   - No typos in variable names

4. **Build Command**
   - Must include `npx prisma generate`
   - Must be in correct directory

5. **Start Command**
   - Backend: `npm start` or `node src/server.js`
   - Frontend: Automatic (static site)

---

## ✅ Success Indicators

You'll know it's working when:

✅ Backend shows "Blinket API is running"
✅ Frontend loads without errors
✅ Can login as admin
✅ Products display correctly
✅ Cart works
✅ Can place orders

---

**Your Blinket platform is now live!** 🎉

Backend: https://your-backend.onrender.com
Frontend: https://your-frontend.onrender.com
