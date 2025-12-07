# 🚀 Blinket - Quick Start Guide

## ⚡ Get Started in 5 Minutes

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Setup Database
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to MongoDB
npx prisma db push

# Seed database with admin user and sample products
npm run seed
```

You should see:
```
✅ Admin user created: admin@blinket.com
✅ Sample products created
🎉 Seed completed successfully!

Default Admin Credentials:
Email: admin@blinket.com
Password: Admin@123
```

### Step 3: Start Backend Server
```bash
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📍 Environment: development
✅ Database connected successfully
```

### Step 4: Install Frontend Dependencies (New Terminal)
```bash
cd frontend
npm install
```

### Step 5: Start Frontend Server
```bash
npm start
```

Browser will automatically open at `http://localhost:3000`

## 🎯 What to Test First

### 1. Browse Products (No Login Required)
- Go to http://localhost:3000/products
- Try search and filters
- Click on a product to see details
- Add products to cart

### 2. Test Admin Features
- Login with: `admin@blinket.com` / `Admin@123`
- Go to Admin Dashboard
- Add a new product
- View all orders

### 3. Test User Registration
- Click "Register" in header
- Create a new account
- You'll be redirected to verify email
- **Note**: Without SendGrid configured, check backend console for OTP

### 4. Complete a Purchase
- Add products to cart
- Click "Proceed to Checkout"
- Login if not already logged in
- Fill shipping address
- Place order
- View order in "My Orders"

## 📧 Email Configuration (Optional)

To enable email functionality:

1. Sign up at https://sendgrid.com (free tier available)
2. Create an API key
3. Verify a sender email
4. Update `backend/.env`:
```env
SENDGRID_API_KEY="your_actual_api_key"
SENDGRID_FROM_EMAIL="your_verified_email@domain.com"
```
5. Restart backend server

## 🔍 Troubleshooting

### Backend won't start?
```bash
# Check if port 5000 is in use
lsof -ti:5000 | xargs kill -9

# Verify MongoDB connection
# Check backend/.env has correct DATABASE_URL
```

### Frontend won't start?
```bash
# Check if port 3000 is in use
lsof -ti:3000 | xargs kill -9

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database connection failed?
- Verify MongoDB Atlas connection string in `backend/.env`
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure database user has correct permissions

### Prisma errors?
```bash
cd backend
npx prisma generate
npx prisma db push
```

## 📱 Test Accounts

### Admin Account (Created by seed)
- Email: `admin@blinket.com`
- Password: `Admin@123`
- Can access: Admin Dashboard, Product Management, Order Management

### Create Your Own User
- Register at http://localhost:3000/register
- Verify email (OTP in console if SendGrid not configured)
- Can: Browse, Add to cart, Place orders, View order history

## 🎨 Sample Products (Created by seed)

1. Wireless Headphones - $99.99
2. Smart Watch - $199.99
3. Laptop Backpack - $49.99
4. USB-C Cable - $12.99
5. Bluetooth Speaker - $79.99

## 🔐 Security Features

- ✅ Passwords hashed with bcryptjs
- ✅ JWT tokens in HttpOnly cookies
- ✅ Access tokens expire in 15 minutes
- ✅ Refresh tokens expire in 7 days
- ✅ OTP expires in 10 minutes
- ✅ Protected routes for authenticated users
- ✅ Admin-only routes for management

## 📊 What's Working

✅ User registration and login
✅ Email verification (with SendGrid)
✅ Password reset
✅ Product browsing with filters
✅ Shopping cart (persists in localStorage)
✅ Order placement (COD)
✅ Order tracking
✅ Admin product management
✅ Admin order management
✅ Responsive design (mobile-friendly)

## 🚫 Known Limitations

- No Stripe payment integration (COD only)
- No file upload for product images (URL strings only)
- No product reviews/ratings
- No wishlist feature
- Email requires SendGrid configuration

## 📚 Next Steps

1. ✅ Get the app running
2. ✅ Test all features
3. 📧 Configure SendGrid for emails
4. 🎨 Customize design/branding
5. 🚀 Deploy to production
6. 💳 Add payment gateway (optional)
7. ⭐ Add reviews/ratings (optional)

## 💡 Pro Tips

- Cart persists even after closing browser (localStorage)
- Unverified users can login but can't place orders
- Admin can manage all products and orders
- Use filters to find products quickly
- Check "My Orders" to track your purchases

## 🆘 Need Help?

1. Check console logs (browser & terminal)
2. Verify all environment variables
3. Ensure MongoDB connection is working
4. Review SETUP_GUIDE.md for detailed instructions
5. Check PROJECT_STRUCTURE.md for architecture details

---

**Ready to start?** Run the commands above and you'll be up and running! 🎉
