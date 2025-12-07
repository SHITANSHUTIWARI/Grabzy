# Blinket E-commerce Platform - Project Structure

## Complete File Tree

```
blinket-ecommerce/
│
├── README.md                          # Main project documentation
├── SETUP_GUIDE.md                     # Detailed setup instructions
├── PROJECT_STRUCTURE.md               # This file
│
├── backend/                           # Node.js/Express API
│   ├── prisma/
│   │   └── schema.prisma             # Prisma schema (MongoDB models)
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js           # Prisma client & connection
│   │   │   └── email.js              # SendGrid email configuration
│   │   │
│   │   ├── controllers/
│   │   │   ├── userController.js     # Auth & user logic
│   │   │   ├── productController.js  # Product listing & details
│   │   │   ├── orderController.js    # Order creation & retrieval
│   │   │   └── adminController.js    # Admin CRUD operations
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js               # JWT authentication
│   │   │   ├── isAdmin.js            # Admin authorization
│   │   │   └── errorHandler.js       # Global error handler
│   │   │
│   │   ├── routes/
│   │   │   ├── userRoutes.js         # /api/users routes
│   │   │   ├── productRoutes.js      # /api/products routes
│   │   │   ├── orderRoutes.js        # /api/orders routes
│   │   │   └── adminRoutes.js        # /api/admin routes
│   │   │
│   │   ├── utils/
│   │   │   ├── generateTokens.js     # JWT token generation
│   │   │   ├── generateOTP.js        # OTP generation
│   │   │   └── seed.js               # Database seeding script
│   │   │
│   │   └── server.js                 # Express app entry point
│   │
│   ├── .env                          # Environment variables (configured)
│   ├── .env.example                  # Environment template
│   ├── .gitignore                    # Git ignore rules
│   └── package.json                  # Dependencies & scripts
│
└── frontend/                         # React.js SPA
    ├── public/
    │   └── index.html                # HTML template
    │
    ├── src/
    │   ├── api/
    │   │   ├── axios.js              # Axios instance
    │   │   ├── authApi.js            # Auth API calls
    │   │   ├── productApi.js         # Product API calls
    │   │   ├── orderApi.js           # Order API calls
    │   │   └── adminApi.js           # Admin API calls
    │   │
    │   ├── components/
    │   │   ├── Header.js             # Navigation header
    │   │   ├── Footer.js             # Footer component
    │   │   ├── ProductCard.js        # Product display card
    │   │   ├── PrivateRoute.js       # Protected route wrapper
    │   │   └── AdminRoute.js         # Admin route wrapper
    │   │
    │   ├── context/
    │   │   ├── AuthContext.js        # Authentication state
    │   │   └── CartContext.js        # Shopping cart state
    │   │
    │   ├── pages/
    │   │   ├── Home.js               # Landing page
    │   │   ├── Login.js              # Login page
    │   │   ├── Register.js           # Registration page
    │   │   ├── VerifyEmail.js        # Email verification
    │   │   ├── ForgotPassword.js     # Password reset
    │   │   ├── ProductList.js        # Product catalog with filters
    │   │   ├── ProductDetail.js      # Single product view
    │   │   ├── Cart.js               # Shopping cart
    │   │   ├── Checkout.js           # Checkout process
    │   │   ├── MyOrders.js           # User's order history
    │   │   ├── AdminDashboard.js     # Admin home
    │   │   ├── AdminProducts.js      # Product management
    │   │   └── AdminOrders.js        # Order management
    │   │
    │   ├── App.js                    # Main app with routing
    │   ├── index.js                  # React entry point
    │   └── index.css                 # Global styles (Tailwind)
    │
    ├── .env                          # Environment variables
    ├── .gitignore                    # Git ignore rules
    ├── package.json                  # Dependencies & scripts
    ├── tailwind.config.js            # Tailwind configuration
    └── postcss.config.js             # PostCSS configuration
```

## Key Technologies

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Prisma ORM)
- **Authentication**: JWT (jsonwebtoken)
- **Email**: SendGrid
- **Password Hashing**: bcryptjs
- **Cookies**: cookie-parser

### Frontend
- **Library**: React.js 18
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: TailwindCSS
- **State Management**: Context API

## Database Schema (Prisma)

### User Model
- id, email (unique), password, name
- role (USER/ADMIN)
- avatarUrl, isVerified
- otp, otpExpiry
- timestamps

### Product Model
- id, name, description
- price, stock, category
- imageUrls (array)
- timestamps

### Order Model
- id, userId, status (PROCESSING/SHIPPED/DELIVERED/CANCELLED)
- totalAmount, paymentMethod
- shippingAddress (JSON)
- timestamps

### OrderItem Model
- id, orderId, productId
- quantity, priceAtOrder

## API Routes Summary

### Public Routes
- POST /api/users/register
- POST /api/users/login
- POST /api/users/verify-email
- POST /api/users/forgot-password
- PUT /api/users/reset-password
- GET /api/products
- GET /api/products/:id

### Protected Routes (Authenticated Users)
- GET /api/users/logout
- GET /api/users/profile
- POST /api/orders (requires verified email)
- GET /api/orders/my-orders

### Admin Routes (Admin Only)
- POST /api/admin/products
- PUT /api/admin/products/:id
- DELETE /api/admin/products/:id
- GET /api/admin/orders
- PUT /api/admin/orders/:id

## Frontend Routes

### Public Pages
- / - Home
- /login - Login
- /register - Register
- /verify-email - Email verification
- /forgot-password - Password reset
- /products - Product listing
- /products/:id - Product details
- /cart - Shopping cart

### Protected Pages (Authenticated)
- /checkout - Checkout process
- /my-orders - Order history

### Admin Pages (Admin Only)
- /admin - Admin dashboard
- /admin/products - Product management
- /admin/orders - Order management

## State Management

### AuthContext
- user: Current user object
- loading: Auth loading state
- isAuthenticated: Boolean
- isAdmin: Boolean
- setUser: Update user
- checkAuth: Refresh auth state

### CartContext
- cartItems: Array of cart items
- addToCart: Add product to cart
- removeFromCart: Remove product
- updateQuantity: Update item quantity
- clearCart: Empty cart
- getCartTotal: Calculate total price
- getCartCount: Get total items

## Environment Variables

### Backend
```
DATABASE_URL - MongoDB Atlas connection string
JWT_ACCESS_SECRET - Access token secret
JWT_REFRESH_SECRET - Refresh token secret
SENDGRID_API_KEY - SendGrid API key
SENDGRID_FROM_EMAIL - Verified sender email
NODE_ENV - development/production
PORT - Server port (default: 5000)
FRONTEND_URL - Frontend URL for CORS
```

### Frontend
```
REACT_APP_API_URL - Backend API URL
```

## Authentication Flow

1. User registers → OTP sent via email
2. User verifies email with OTP
3. User logs in → Access & Refresh tokens in HttpOnly cookies
4. Access token expires (15 min) → Auto-refresh using refresh token
5. Refresh token expires (7 days) → User must login again

## Order Flow

1. User adds products to cart (localStorage)
2. User proceeds to checkout (must be authenticated)
3. System checks if email is verified
4. User fills shipping address
5. Order created with COD payment
6. Stock decremented
7. Order appears in "My Orders"
8. Admin can update order status

## Features Checklist

✅ User Registration & Login
✅ Email Verification (OTP)
✅ Password Reset (OTP)
✅ JWT Authentication (Access & Refresh)
✅ Product Catalog
✅ Search & Filters
✅ Pagination
✅ Shopping Cart
✅ Order Placement
✅ Order Tracking
✅ Admin Dashboard
✅ Product Management (CRUD)
✅ Order Management
✅ Responsive Design
✅ Protected Routes
✅ Email Verification Requirement for Orders

## Development Commands

### Backend
```bash
npm run dev      # Start development server
npm start        # Start production server
npm run seed     # Seed database
```

### Frontend
```bash
npm start        # Start development server
npm run build    # Build for production
```

## Notes

- Product images are stored as URL strings (no file upload)
- Cart persists in localStorage
- Refresh tokens stored in HttpOnly cookies (no DB tracking)
- Unverified users can login but cannot place orders
- Admin user created via seed script
- COD is the only payment method (no Stripe integration)
