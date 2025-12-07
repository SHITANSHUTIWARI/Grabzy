const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  changePassword,
  getProfile,
} = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.put('/change-password', authenticate, changePassword);
router.get('/profile', authenticate, getProfile);

module.exports = router;
