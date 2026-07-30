import api from './authService';

export const getAddresses = async () => {
  const res = await api.get('/api/v1/addresses');
  return res.data;
};

export const createAddress = async (data) => {
  const res = await api.post('/api/v1/addresses', data);
  return res.data;
};
