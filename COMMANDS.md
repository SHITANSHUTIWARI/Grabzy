# 🎯 Blinket Platform - All Commands Reference

## 📦 Installation Commands

### Backend Setup
```bash
# Navigate to backend
cd backend

# Install all dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Push schema to MongoDB (creates collections)
npx prisma db push

# Seed database with admin user and sample products
npm run seed

# Start development server
npm run dev

# Start production server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend (in new terminal)
cd frontend

# Install all dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally (after build)
npx serve -s build
```

## 🗄️ Database Commands

### Prisma Commands
```bash
cd backend

# Generate Prisma Client (after schema changes)
npx prisma generate

# Push schema to database (development)
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# Format schema file
npx prisma format

# Validate schema
npx prisma validate

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset
```

### Seed Commands
```bash
cd backend

# Run seed script
npm run seed

# Or directly with node
node src/utils/seed.js
```

## 🔧 Development Commands

### Start Both Servers
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

### Check for Errors
```bash
# Backend - Check for syntax errors
cd backend
node --check src/server.js

# Frontend - Check for build errors
cd frontend
npm run build
```

## 🧹 Cleanup Commands

### Clear Node Modules
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Clear Build Files
```bash
# Frontend
cd frontend
rm -rf build

# Rebuild
npm run build
```

### Clear Prisma Generated Files
```bash
cd backend
rm -rf node_modules/.prisma
npx prisma generate
```

## 🐛 Troubleshooting Commands

### Kill Processes on Ports
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Check what's running on a port
lsof -i :5000
lsof -i :3000
```

### Check Node/npm Versions
```bash
node --version
npm --version

# Should be Node v16+ and npm v8+
```

### Clear npm Cache
```bash
npm cache clean --force
```

## 📊 Database Inspection

### MongoDB Atlas CLI (if installed)
```bash
# Connect to your cluster
mongosh "mongodb+srv://cluster0.eihypps.mongodb.net/blinket" --username shitanshutiwari2024_db_user

# Show databases
show dbs

# Use blinket database
use blinket

# Show collections
show collections

# Count documents
db.User.countDocuments()
db.Product.countDocuments()
db.Order.countDocuments()

# Find all users
db.User.find().pretty()

# Find admin user
db.User.findOne({ role: "ADMIN" })

# Find all products
db.Product.find().pretty()
```

### Prisma Studio (GUI)
```bash
cd backend
npx prisma studio

# Opens at http://localhost:5555
```

## 🧪 Testing Commands

### Manual API Testing with curl

#### Test Backend is Running
```bash
curl http://localhost:5000/
```

#### Get All Products
```bash
curl http://localhost:5000/api/products
```

#### Register User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "Test@123"
  }'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{
    "email": "admin@blinket.com",
    "password": "Admin@123"
  }'
```

#### Get Profile (with cookies)
```bash
curl http://localhost:5000/api/users/profile \
  -b cookies.txt
```

## 📝 Git Commands

### Initialize Repository
```bash
# In project root
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Complete Blinket e-commerce platform"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/blinket-ecommerce.git

# Push to GitHub
git push -u origin main
```

### .gitignore Already Configured
```
backend/node_modules
backend/.env
frontend/node_modules
frontend/build
```

## 🚀 Deployment Commands

### Backend (Vercel)
```bash
cd backend

# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add JWT_ACCESS_SECRET
vercel env add JWT_REFRESH_SECRET
vercel env add SENDGRID_API_KEY
vercel env add SENDGRID_FROM_EMAIL
vercel env add FRONTEND_URL
```

### Frontend (Vercel)
```bash
cd frontend

# Build first
npm run build

# Deploy
vercel

# Set environment variable
vercel env add REACT_APP_API_URL
```

### Backend (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up

# Add environment variables in Railway dashboard
```

## 🔍 Monitoring Commands

### View Backend Logs
```bash
cd backend
npm run dev

# Logs will show in terminal
```

### View Frontend Logs
```bash
cd frontend
npm start

# Logs will show in terminal
# Also check browser console (F12)
```

### Check for Updates
```bash
# Backend
cd backend
npm outdated

# Frontend
cd frontend
npm outdated
```

## 📦 Package Management

### Update Dependencies
```bash
# Backend
cd backend
npm update

# Frontend
cd frontend
npm update
```

### Install Specific Package
```bash
# Backend
cd backend
npm install package-name

# Frontend
cd frontend
npm install package-name
```

### Remove Package
```bash
npm uninstall package-name
```

## 🎨 Frontend Specific

### TailwindCSS Commands
```bash
cd frontend

# Rebuild Tailwind (if needed)
npx tailwindcss -i ./src/index.css -o ./dist/output.css

# Watch mode
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### React Scripts
```bash
cd frontend

# Start dev server
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test

# Eject (not recommended)
npm run eject
```

## 🔐 Security Commands

### Generate New JWT Secrets
```bash
# Generate random secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Use output in .env file
```

### Check for Vulnerabilities
```bash
# Backend
cd backend
npm audit

# Fix vulnerabilities
npm audit fix

# Frontend
cd frontend
npm audit
npm audit fix
```

## 📊 Performance Commands

### Analyze Bundle Size (Frontend)
```bash
cd frontend

# Install analyzer
npm install --save-dev webpack-bundle-analyzer

# Build and analyze
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

### Check Backend Performance
```bash
cd backend

# Install clinic
npm install -g clinic

# Profile
clinic doctor -- node src/server.js
```

## 🎯 Quick Reference

### Most Used Commands
```bash
# Start everything
cd backend && npm run dev &
cd frontend && npm start

# Reset database
cd backend && npx prisma db push --force-reset && npm run seed

# Fresh install
rm -rf node_modules package-lock.json && npm install

# Kill all Node processes
killall node

# Check if servers are running
curl http://localhost:5000/
curl http://localhost:3000/
```

## 📝 Environment Variables

### Backend (.env)
```bash
# View current env
cd backend
cat .env

# Edit env
nano .env
# or
code .env
```

### Frontend (.env)
```bash
# View current env
cd frontend
cat .env

# Edit env
nano .env
# or
code .env
```

## 🆘 Emergency Commands

### Complete Reset
```bash
# Stop all servers (Ctrl+C in terminals)

# Backend reset
cd backend
rm -rf node_modules package-lock.json
npm install
npx prisma generate
npx prisma db push --force-reset
npm run seed

# Frontend reset
cd frontend
rm -rf node_modules package-lock.json build
npm install

# Restart servers
cd backend && npm run dev &
cd frontend && npm start
```

### Fix Common Issues
```bash
# Prisma client not found
cd backend
npx prisma generate

# Port already in use
lsof -ti:5000 | xargs kill -9
lsof -ti:3000 | xargs kill -9

# Database connection failed
# Check MongoDB Atlas dashboard
# Verify IP whitelist
# Check .env DATABASE_URL

# Module not found
npm install

# Build failed
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 Pro Tips

1. **Always run commands from the correct directory** (backend/ or frontend/)
2. **Use two terminal windows** - one for backend, one for frontend
3. **Check logs** when something doesn't work
4. **Restart servers** after changing .env files
5. **Run `npx prisma generate`** after changing schema.prisma
6. **Clear browser cache** if frontend changes don't appear

---

**Keep this file handy for quick reference!** 📚
