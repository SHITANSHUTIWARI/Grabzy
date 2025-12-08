const { verifyAccessToken, verifyRefreshToken, generateAccessToken } = require('../utils/generateTokens');

const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken && !refreshToken) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Try to verify access token
    let decoded = verifyAccessToken(accessToken);

    if (decoded) {
      req.user = decoded;
      return next();
    }

    // Access token expired, try refresh token
    if (!refreshToken) {
      return res.status(401).json({ message: 'Session expired, please login again' });
    }

    decoded = verifyRefreshToken(refreshToken);

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid session, please login again' });
    }

    // Generate new access token
    const newAccessToken = generateAccessToken(decoded.userId, decoded.role);

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
};

module.exports = { authenticate };
