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
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-primary-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Blinket
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="hover:text-primary-200 transition">
              Products
            </Link>
            
            {isAuthenticated ? (
              <>
                {!isAdmin && (
                  <>
                    <Link to="/my-orders" className="hover:text-primary-200 transition">
                      My Orders
                    </Link>
                    
                    <Link to="/cart" className="relative hover:text-primary-200 transition">
                      Cart
                      {getCartCount() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {getCartCount()}
                        </span>
                      )}
                    </Link>
                  </>
                )}
                
                {isAdmin && (
                  <Link to="/admin" className="hover:text-primary-200 transition">
                    Admin Dashboard
                  </Link>
                )}
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm">{user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-primary-700 hover:bg-primary-800 px-4 py-2 rounded transition"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/cart" className="relative hover:text-primary-200 transition">
                  Cart
                  {getCartCount() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <Link
                  to="/login"
                  className="bg-primary-700 hover:bg-primary-800 px-4 py-2 rounded transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-4 py-2 rounded transition"
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
          <div className="md:hidden pb-4">
            <Link
              to="/products"
              className="block py-2 hover:text-primary-200"
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
                      className="block py-2 hover:text-primary-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    
                    <Link
                      to="/cart"
                      className="block py-2 hover:text-primary-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cart ({getCartCount()})
                    </Link>
                  </>
                )}
                
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block py-2 hover:text-primary-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                <div className="py-2 text-sm">{user?.name}</div>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 hover:text-primary-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/cart"
                  className="block py-2 hover:text-primary-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cart ({getCartCount()})
                </Link>
                <Link
                  to="/login"
                  className="block py-2 hover:text-primary-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 hover:text-primary-200"
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
