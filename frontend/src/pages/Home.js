import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-green text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to Blinket</h1>
          <p className="text-2xl mb-10 text-gray-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            to="/products"
            className="bg-brand-yellow text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition inline-block shadow-xl text-lg"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-brand-green-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer only the best quality products from trusted brands
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-brand-green-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with regular discounts and offers
              </p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-brand-green-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-10 text-gray-100">
            Join thousands of satisfied customers today
          </p>
          <Link
            to="/register"
            className="bg-brand-yellow text-gray-900 px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition inline-block shadow-xl text-lg"
          >
            Create Account →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
