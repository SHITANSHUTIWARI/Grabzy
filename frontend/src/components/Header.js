import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { logout } from '../api/authApi';

const Header = () => {
  const { user, setUser, isAuthenticated, isAdmin } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Clear tokens even if API call fails
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      navigate('/login');
    }
  };

  return (
    <header className="bg-white shadow-md border-b-2 border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-brand-green hover:opacity-80 transition">
            Blinket
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-brand-green transition font-medium">
              Products
            </Link>
            
            {isAuthenticated ? (
              <>
                {!isAdmin && (
                  <>
                    <Link to="/my-orders" className="text-gray-700 hover:text-brand-green transition font-medium">
                      My Orders
                    </Link>
                    
                    <Link to="/cart" className="relative text-gray-700 hover:text-brand-green transition font-medium">
                      Cart
                      {getCartCount() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-brand-yellow text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                          {getCartCount()}
                        </span>
                      )}
                    </Link>
                  </>
                )}
                
                {isAdmin && (
                  <Link to="/admin" className="text-gray-700 hover:text-brand-green transition font-medium">
                    Admin Dashboard
                  </Link>
                )}
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-5 py-2 rounded-lg font-semibold transition"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/cart" className="relative text-gray-700 hover:text-brand-green transition font-medium">
                  Cart
                  {getCartCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-yellow text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <Link
                  to="/login"
                  className="bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-brand-green text-white hover:bg-brand-green-dark px-5 py-2 rounded-lg font-semibold transition shadow-md"
                >
                  Register
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-2">
            <Link
              to="/products"
              className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            
            {isAuthenticated ? (
              <>
                {!isAdmin && (
                  <>
                    <Link
                      to="/my-orders"
                      className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    
                    <Link
                      to="/cart"
                      className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cart ({getCartCount()})
                    </Link>
                  </>
                )}
                
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                <div className="py-3 px-2 text-sm font-medium text-gray-700 border-t border-gray-100 mt-2">{user?.name}</div>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/cart"
                  className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cart ({getCartCount()})
                </Link>
                <Link
                  to="/login"
                  className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-3 text-gray-700 hover:text-brand-green hover:bg-gray-50 px-2 rounded font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
