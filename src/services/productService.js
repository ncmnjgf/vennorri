import api from './authService';

export const getProducts = async (params = {}) => {
  const response = await api.get('/api/v1/products', { params });
  return response.data;
};

export const getProductBySlug = async (slug) => {
  const response = await api.get(`/api/v1/products/${slug}`);
  return response.data;
};
