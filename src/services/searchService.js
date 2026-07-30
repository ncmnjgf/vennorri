import api from './authService';

export const searchProducts = async (q) => {
  const res = await api.get('/api/v1/search', { params: { q } });
  return res.data;
};

export const getSuggestions = async (q) => {
  const res = await api.get('/api/v1/search/suggestions', { params: { q } });
  return res.data;
};
