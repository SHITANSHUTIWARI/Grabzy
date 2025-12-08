const { verifyAccessToken, verifyRefreshToken, generateAccessToken } = require('../utils/generateTokens');

const authenticate = async (req, res, next) => {
  try {
    // Check Authorization header first
    const authHeader = req.headers.authorization;
    let accessToken = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
    
    // Fallback to cookies if no header
    if (!accessToken) {
      accessToken = req.cookies.accessToken;
    }

    if (!accessToken) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Try to verify access token
    let decoded = verifyAccessToken(accessToken);

    if (decoded) {
      req.user = decoded;
      return next();
    }

    // Access token expired
    return res.status(401).json({ message: 'Session expired, please login again' });
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
};

module.exports = { authenticate };
