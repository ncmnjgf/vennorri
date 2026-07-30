import api from './authService';

export const getCart = async () => {
  const res = await api.get('/api/v1/cart');
  return res.data;
};

export const getCartSummary = async () => {
  const res = await api.get('/api/v1/cart/summary');
  return res.data;
};

export const addToCartAPI = async (data) => {
  const res = await api.post('/api/v1/cart', data);
  return res.data;
};

export const updateCartItemAPI = async (itemId, quantity) => {
  const res = await api.put(`/api/v1/cart/${itemId}`, { quantity });
  return res.data;
};

export const removeCartItemAPI = async (itemId) => {
  const res = await api.delete(`/api/v1/cart/${itemId}`);
  return res.data;
};
