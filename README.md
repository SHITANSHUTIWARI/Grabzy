# Blinket E-commerce Platform

A full-stack e-commerce platform built with React.js and Node.js/Express.

## Tech Stack

### Frontend
- React.js with React Router
- TailwindCSS for styling
- Axios for API calls
- Context API for state management

### Backend
- Node.js with Express.js
- Prisma ORM with MongoDB
- JWT Authentication (Access & Refresh Tokens)
- SendGrid for email services
- bcryptjs for password hashing

## Project Structure

```
/blinket-ecommerce/
├── backend/          # Node.js/Express API
└── frontend/         # React.js SPA
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following variables:
```
DATABASE_URL="your_mongodb_atlas_url"
JWT_ACCESS_SECRET="your_access_secret"
JWT_REFRESH_SECRET="your_refresh_secret"
SENDGRID_API_KEY="your_sendgrid_key"
SENDGRID_FROM_EMAIL="your_verified_email"
NODE_ENV="development"
PORT=5000
FRONTEND_URL="http://localhost:3000"
```

4. Generate Prisma Client and run migrations:
```bash
npx prisma generate
npx prisma db push
```

5. Seed the database with admin user:
```bash
npm run seed
```

6. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

## Default Admin Credentials

After running the seed script:
- Email: admin@blinket.com
- Password: Admin@123

## API Endpoints

### Authentication
- POST `/api/users/register` - Register new user
- POST `/api/users/login` - Login user
- GET `/api/users/logout` - Logout user
- POST `/api/users/forgot-password` - Request password reset OTP
- PUT `/api/users/reset-password` - Reset password with OTP
- GET `/api/users/profile` - Get user profile (protected)
- POST `/api/users/verify-email` - Verify email with OTP

### Products
- GET `/api/products` - Get all products (with filters, search, pagination)
- GET `/api/products/:id` - Get single product

### Orders
- POST `/api/orders` - Create new order (protected)
- GET `/api/orders/my-orders` - Get user's orders (protected)

### Admin - Products
- POST `/api/admin/products` - Create product (admin only)
- PUT `/api/admin/products/:id` - Update product (admin only)
- DELETE `/api/admin/products/:id` - Delete product (admin only)

### Admin - Orders
- GET `/api/admin/orders` - Get all orders (admin only)
- PUT `/api/admin/orders/:id` - Update order status (admin only)

## Features

- User authentication with JWT (access & refresh tokens)
- Email verification with OTP
- Password reset functionality
- Product catalog with search, filters, and pagination
- Shopping cart management
- Order placement (COD)
- Admin dashboard for product and order management
- Responsive design with TailwindCSS

## Development Notes

- Access tokens expire in 15 minutes
- Refresh tokens expire in 7 days
- OTP expires in 10 minutes
- Unverified users can login but cannot place orders
