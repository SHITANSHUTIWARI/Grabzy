const express = require('express');
const router = express.Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/adminController');
const { authenticate } = require('../middleware/auth');
const { isAdmin } = require('../middleware/isAdmin');

// Product management
router.post('/products', authenticate, isAdmin, createProduct);
router.put('/products/:id', authenticate, isAdmin, updateProduct);
router.delete('/products/:id', authenticate, isAdmin, deleteProduct);

// Order management
router.get('/orders', authenticate, isAdmin, getAllOrders);
router.put('/orders/:id', authenticate, isAdmin, updateOrderStatus);

module.exports = router;
