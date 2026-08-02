import api from './authService';

// ── Public ─────────────────────────────────────────────────────────
export const getProducts = async (params = {}) => {
  const response = await api.get('/api/v1/products', { params });
  return response.data;
};

export const getProductBySlug = async (slug) => {
  const response = await api.get(`/api/v1/products/${slug}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get('/api/v1/categories');
  return response.data;
};

// ── Admin — requires admin JWT (sent via Authorization header) ──────
const adminRequest = (method, url, data, headers = {}) => {
  const token = localStorage.getItem('admin_token');
  return api[method](url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
};

/**
 * Step 1: Create a product (JSON body — no images yet).
 * Returns the saved product with its MongoDB _id.
 */
export const createProduct = async (productData) => {
  const response = await api.post('/api/v1/products', productData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
    },
  });
  return response.data;
};

/**
 * Step 2: Upload images for a product (multipart/form-data).
 * @param {string} productId  — MongoDB _id of the product
 * @param {File[]} files      — array of File objects from the file input
 */
export const uploadProductImages = async (productId, files) => {
  const formData = new FormData();
  files.forEach((file) => formData.append('images', file));

  const response = await api.post(
    `/api/v1/products/${productId}/images`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};

/**
 * Delete a product by ID (admin only — soft delete).
 */
export const deleteProduct = async (productId) => {
  const response = await api.delete(`/api/v1/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
    },
  });
  return response.data;
};

// keep adminRequest available for future calls
export { adminRequest };
