import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/products"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Manage Products</h2>
          <p className="text-gray-600">
            Add, edit, or remove products from your catalog
          </p>
        </Link>

        <Link
          to="/admin/orders"
          className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition"
        >
          <div className="flex items-center mb-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Manage Orders</h2>
          <p className="text-gray-600">
            View and update order statuses
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
