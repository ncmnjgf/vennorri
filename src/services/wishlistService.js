import api from './authService';

export const getWishlist = async () => {
  const res = await api.get('/api/v1/wishlist');
  return res.data;
};

export const addToWishlist = async (productId) => {
  const res = await api.post('/api/v1/wishlist', { productId });
  return res.data;
};

export const removeFromWishlist = async (productId) => {
  const res = await api.delete(`/api/v1/wishlist/${productId}`);
  return res.data;
};
