import api from './axios';

// Product management
export const createProduct = (data) => api.post('/admin/products', data);

export const updateProduct = (id, data) => api.put(`/admin/products/${id}`, data);

export const deleteProduct = (id) => api.delete(`/admin/products/${id}`);

// Order management
export const getAllOrders = () => api.get('/admin/orders');

export const updateOrderStatus = (id, data) => api.put(`/admin/orders/${id}`, data);
