# Blinket E-commerce Platform - Complete Setup Guide

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (already configured)
- SendGrid account (for email functionality)

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# The .env file is already created with your MongoDB connection
# You just need to add your SendGrid API key

# Generate Prisma Client
npx prisma generate

# Push schema to MongoDB
npx prisma db push

# Seed the database with admin user and sample products
npm run seed

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

## 🔑 Default Admin Credentials

After running the seed script:
- **Email**: admin@blinket.com
- **Password**: Admin@123

## ⚙️ Environment Configuration

### Backend (.env)

The backend `.env` file is already configured with your MongoDB Atlas connection. You only need to add:

```env
SENDGRID_API_KEY="your_sendgrid_api_key_here"
SENDGRID_FROM_EMAIL="your_verified_email@domain.com"
```

To get SendGrid API key:
1. Sign up at https://sendgrid.com
2. Go to Settings > API Keys
3. Create a new API key with "Mail Send" permissions
4. Verify a sender email address in SendGrid

### Frontend (.env)

Already configured to connect to `http://localhost:5000/api`

## 📦 Project Structure

```
blinket-ecommerce/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma          # Database schema
│   ├── src/
│   │   ├── config/                # Database & email config
│   │   ├── controllers/           # Request handlers
│   │   ├── middleware/            # Auth & error handling
│   │   ├── routes/                # API routes
│   │   ├── utils/                 # Helper functions & seed
│   │   └── server.js              # Main entry point
│   ├── .env                       # Environment variables
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/                   # API calls
    │   ├── components/            # Reusable components
    │   ├── context/               # State management
    │   ├── pages/                 # Route pages
    │   ├── App.js                 # Main app component
    │   └── index.js               # Entry point
    ├── .env                       # Environment variables
    └── package.json
```

## 🧪 Testing the Application

### 1. Test User Registration & Email Verification

1. Go to http://localhost:3000/register
2. Create a new account
3. Check your email for the verification code (if SendGrid is configured)
4. Verify your email at http://localhost:3000/verify-email

**Note**: Without SendGrid configured, you can check the OTP in the backend console logs or directly in the MongoDB database.

### 2. Test Admin Features

1. Login with admin credentials
2. Navigate to Admin Dashboard
3. Try adding/editing/deleting products
4. View and update order statuses

### 3. Test Shopping Flow

1. Browse products at http://localhost:3000/products
2. Use filters and search
3. Add products to cart
4. Proceed to checkout
5. Place an order (COD)
6. View your orders at http://localhost:3000/my-orders

## 🔧 Common Issues & Solutions

### Issue: Prisma Client not generated
```bash
cd backend
npx prisma generate
```

### Issue: Database connection failed
- Check your MongoDB Atlas connection string in backend/.env
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify the database user credentials

### Issue: Port already in use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### Issue: Email not sending
- Verify SendGrid API key is correct
- Check that sender email is verified in SendGrid
- Look for error logs in backend console

## 📝 API Endpoints Reference

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login
- `GET /api/users/logout` - Logout
- `POST /api/users/verify-email` - Verify email with OTP
- `POST /api/users/forgot-password` - Request password reset
- `PUT /api/users/reset-password` - Reset password
- `GET /api/users/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product

### Orders
- `POST /api/orders` - Create order (protected, verified users only)
- `GET /api/orders/my-orders` - Get user's orders (protected)

### Admin
- `POST /api/admin/products` - Create product (admin only)
- `PUT /api/admin/products/:id` - Update product (admin only)
- `DELETE /api/admin/products/:id` - Delete product (admin only)
- `GET /api/admin/orders` - Get all orders (admin only)
- `PUT /api/admin/orders/:id` - Update order status (admin only)

## 🎨 Features Implemented

✅ User authentication with JWT (access & refresh tokens)
✅ Email verification with OTP
✅ Password reset functionality
✅ Product catalog with search, filters, and pagination
✅ Shopping cart (localStorage persistence)
✅ Order placement (COD only)
✅ Order tracking
✅ Admin dashboard
✅ Product management (CRUD)
✅ Order management
✅ Responsive design with TailwindCSS
✅ Protected routes
✅ Unverified users can login but cannot place orders

## 🚢 Deployment Notes

### Backend (Vercel/Railway/Render)
1. Set environment variables
2. Run `npx prisma generate` in build command
3. Ensure MongoDB Atlas is accessible

### Frontend (Vercel/Netlify)
1. Set `REACT_APP_API_URL` to your backend URL
2. Build command: `npm run build`
3. Publish directory: `build`

## 📞 Support

For issues or questions:
- Check the console logs (both frontend and backend)
- Verify all environment variables are set correctly
- Ensure MongoDB connection is working
- Check that all dependencies are installed

## 🎉 Next Steps

1. Configure SendGrid for email functionality
2. Test all features thoroughly
3. Customize the design and branding
4. Add more product categories
5. Consider adding payment gateway integration (Stripe/PayPal)
6. Implement product reviews and ratings
7. Add wishlist functionality
8. Implement order tracking with notifications

Happy coding! 🚀
