import api from './authService';

/**
 * Admin Auth Service
 * Handles admin login/logout with a separate token (admin_token)
 * stored in localStorage, independent of the user JWT.
 */

const ADMIN_TOKEN_KEY = 'admin_token';

export const adminLogin = async (email, password) => {
  const response = await api.post('/api/v1/admin/login', { email, password });
  const data = response.data;

  // Backend returns { success, data: { accessToken, refreshToken, admin } }
  const token = data?.data?.accessToken || data?.accessToken;
  if (token) {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  }
  return data;
};

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY);

export const isAdminLoggedIn = () => Boolean(getAdminToken());

export const adminLogout = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};
