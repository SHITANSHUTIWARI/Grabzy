import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-block bg-brand-green text-white px-8 py-4 rounded-xl hover:bg-brand-green-dark transition font-bold shadow-md"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b last:border-b-0 p-4"
              >
                <img
                  src={item.imageUrls[0] || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 font-medium">₹{Math.round(item.price * 83).toLocaleString('en-IN')}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 font-semibold"
                  >
                    -
                  </button>
                  <span className="font-bold w-10 text-center text-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 font-semibold"
                  >
                    +
                  </button>
                </div>

                <div className="ml-6 text-xl font-bold text-gray-900">
                  ₹{Math.round(item.price * item.quantity * 83).toLocaleString('en-IN')}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="font-bold">₹{Math.round(getCartTotal() * 83).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Shipping</span>
                <span className="font-bold text-brand-green">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-brand-green">
                  ₹{Math.round(getCartTotal() * 83).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-brand-green text-white py-4 rounded-xl font-bold hover:bg-brand-green-dark transition shadow-md text-lg"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center mt-4 text-brand-green hover:text-brand-green-dark font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
