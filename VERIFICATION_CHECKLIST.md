# ✅ Blinket Platform - Verification Checklist

Use this checklist to verify that everything is working correctly.

## 📦 Installation Verification

### Backend Setup
- [ ] `cd backend && npm install` completed without errors
- [ ] `npx prisma generate` completed successfully
- [ ] `npx prisma db push` connected to MongoDB Atlas
- [ ] `npm run seed` created admin user and sample products
- [ ] `npm run dev` starts server on port 5000
- [ ] Console shows "✅ Database connected successfully"

### Frontend Setup
- [ ] `cd frontend && npm install` completed without errors
- [ ] `npm start` opens browser at http://localhost:3000
- [ ] No compilation errors in terminal
- [ ] Page loads without console errors

## 🔐 Authentication Tests

### User Registration
- [ ] Navigate to /register
- [ ] Fill form with valid data
- [ ] Submit redirects to /verify-email
- [ ] Check backend console for OTP (if SendGrid not configured)
- [ ] User created in MongoDB database

### Email Verification
- [ ] Enter correct OTP
- [ ] Success message appears
- [ ] Redirects to login page
- [ ] User's `isVerified` set to true in database

### Login
- [ ] Navigate to /login
- [ ] Login with admin credentials (admin@blinket.com / Admin@123)
- [ ] Redirects to /products
- [ ] Header shows user name
- [ ] "Admin" link visible in header

### Logout
- [ ] Click "Logout" button
- [ ] Redirects to login page
- [ ] Header shows "Login" and "Register" buttons
- [ ] Cannot access protected routes

### Password Reset
- [ ] Navigate to /forgot-password
- [ ] Enter registered email
- [ ] OTP sent (check console if no SendGrid)
- [ ] Enter OTP and new password
- [ ] Can login with new password

## 🛍️ Product Features

### Product Listing
- [ ] Navigate to /products
- [ ] All 5 sample products displayed
- [ ] Product images load correctly
- [ ] Prices and stock shown correctly
- [ ] "Add to Cart" buttons work

### Search & Filters
- [ ] Search for "headphones" - finds Wireless Headphones
- [ ] Filter by category "Electronics" - shows 3 products
- [ ] Set price range $0-$100 - filters correctly
- [ ] Clear filters - shows all products again
- [ ] Pagination works (if more than 12 products)

### Product Detail
- [ ] Click on a product card
- [ ] Redirects to /products/:id
- [ ] Product details displayed correctly
- [ ] Quantity selector works
- [ ] "Add to Cart" adds correct quantity
- [ ] "Back" button returns to product list

## 🛒 Shopping Cart

### Cart Operations
- [ ] Add product to cart - cart count updates in header
- [ ] Navigate to /cart
- [ ] Product displayed with correct details
- [ ] Increase quantity - total updates
- [ ] Decrease quantity - total updates
- [ ] Remove item - item disappears
- [ ] Cart persists after page refresh
- [ ] "Continue Shopping" returns to products

### Cart Persistence
- [ ] Add items to cart
- [ ] Close browser completely
- [ ] Reopen and navigate to /cart
- [ ] Items still in cart

## 📦 Order Flow

### Checkout (Verified User)
- [ ] Login with verified account
- [ ] Add products to cart
- [ ] Click "Proceed to Checkout"
- [ ] Redirects to /checkout
- [ ] Fill shipping address form
- [ ] Payment method shows "COD"
- [ ] Order summary shows correct items and total
- [ ] Click "Place Order"
- [ ] Success - redirects to /my-orders
- [ ] Cart is cleared

### Checkout (Unverified User)
- [ ] Register new user but don't verify
- [ ] Login with unverified account
- [ ] Add products to cart
- [ ] Try to checkout
- [ ] Error message: "Please verify your email"
- [ ] Redirects to verification page

### My Orders
- [ ] Navigate to /my-orders
- [ ] Previous orders displayed
- [ ] Order details correct (items, total, status)
- [ ] Order status badge shows correct color
- [ ] Order date displayed correctly

## 👨‍💼 Admin Features

### Admin Access
- [ ] Login as admin (admin@blinket.com / Admin@123)
- [ ] "Admin" link visible in header
- [ ] Navigate to /admin
- [ ] Dashboard shows two cards
- [ ] Non-admin users cannot access /admin

### Product Management
- [ ] Navigate to /admin/products
- [ ] All products listed in table
- [ ] Click "Add Product"
- [ ] Modal opens with form
- [ ] Fill all fields (use image URL from Unsplash)
- [ ] Submit creates new product
- [ ] Product appears in table
- [ ] Click "Edit" on a product
- [ ] Modal opens with existing data
- [ ] Update and save - changes reflected
- [ ] Click "Delete" on a product
- [ ] Confirmation dialog appears
- [ ] Confirm - product removed

### Order Management
- [ ] Navigate to /admin/orders
- [ ] All orders displayed with customer info
- [ ] Order items shown correctly
- [ ] Change order status dropdown
- [ ] Select new status (e.g., "Shipped")
- [ ] Status updates immediately
- [ ] Status badge color changes

## 🎨 UI/UX Tests

### Responsive Design
- [ ] Resize browser to mobile width
- [ ] Header collapses to hamburger menu
- [ ] Hamburger menu opens/closes correctly
- [ ] Product grid adjusts to single column
- [ ] Forms are usable on mobile
- [ ] Buttons are touch-friendly

### Navigation
- [ ] All header links work
- [ ] Footer links work
- [ ] Breadcrumbs/back buttons work
- [ ] Protected routes redirect to login
- [ ] Admin routes redirect non-admins to home

### Loading States
- [ ] Loading indicators show during API calls
- [ ] Error messages display correctly
- [ ] Success messages display correctly
- [ ] Forms disable during submission

## 🔧 Technical Verification

### Backend API
- [ ] GET http://localhost:5000/ returns "Blinket API is running"
- [ ] GET http://localhost:5000/api/products returns products
- [ ] POST requests require authentication (401 without cookies)
- [ ] Admin routes require admin role (403 for non-admins)

### Database
- [ ] MongoDB Atlas connection successful
- [ ] Collections created: User, Product, Order, OrderItem
- [ ] Admin user exists with role "ADMIN"
- [ ] Sample products exist
- [ ] Orders created after checkout

### Cookies
- [ ] Login sets `accessToken` cookie (check browser DevTools)
- [ ] Login sets `refreshToken` cookie
- [ ] Cookies are HttpOnly
- [ ] Logout clears cookies

### Token Refresh
- [ ] Wait 15+ minutes after login
- [ ] Make an API call (e.g., view profile)
- [ ] Access token auto-refreshes
- [ ] Request succeeds without re-login

## 📧 Email Verification (If SendGrid Configured)

- [ ] Register new user
- [ ] Email received with OTP
- [ ] OTP is 6 digits
- [ ] Email has proper formatting
- [ ] Forgot password sends email
- [ ] Password reset email received

## 🐛 Error Handling

### Expected Errors
- [ ] Login with wrong password - shows error
- [ ] Register with existing email - shows error
- [ ] Invalid OTP - shows error
- [ ] Expired OTP - shows error
- [ ] Out of stock product - cannot add to cart
- [ ] Empty cart checkout - prevented
- [ ] Invalid form data - validation errors

### Edge Cases
- [ ] Refresh page during checkout - state preserved
- [ ] Multiple tabs - cart syncs
- [ ] Network error - error message shown
- [ ] Invalid product ID - 404 or error page

## 🚀 Performance

- [ ] Product list loads quickly
- [ ] Images load without blocking
- [ ] Cart operations are instant
- [ ] No console errors or warnings
- [ ] No memory leaks (check DevTools)

## 📊 Data Integrity

### After Order Placement
- [ ] Order created in database
- [ ] OrderItems created with correct data
- [ ] Product stock decremented
- [ ] Order total matches cart total
- [ ] Shipping address saved correctly

### After Product Update
- [ ] Changes reflected immediately
- [ ] Existing orders not affected
- [ ] Product images update correctly

## ✅ Final Checks

- [ ] All features from requirements implemented
- [ ] No critical bugs found
- [ ] Code is clean and organized
- [ ] Environment variables configured
- [ ] README and documentation complete
- [ ] Ready for deployment

## 🎯 Success Criteria

Your platform is ready when:
- ✅ All authentication flows work
- ✅ Products can be browsed and filtered
- ✅ Cart operations work correctly
- ✅ Orders can be placed and tracked
- ✅ Admin can manage products and orders
- ✅ UI is responsive and user-friendly
- ✅ No critical errors in console

## 📝 Notes

- Some features require SendGrid configuration (email sending)
- Without SendGrid, OTPs appear in backend console
- MongoDB Atlas connection must be active
- Both frontend and backend must be running

---

**Once all items are checked, your Blinket platform is fully functional!** 🎉

## 🆘 If Something Doesn't Work

1. Check console logs (browser and terminal)
2. Verify environment variables
3. Ensure MongoDB connection is active
4. Restart both servers
5. Clear browser cache and cookies
6. Check SETUP_GUIDE.md for troubleshooting
