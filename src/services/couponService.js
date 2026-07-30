import api from './authService';

export const validateCoupon = async (code) => {
  const res = await api.post('/api/v1/coupons/validate', { code });
  return res.data;
};
