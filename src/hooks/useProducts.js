import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import localProducts from '../data/products';

export default function useProducts(params = {}) {
  const [products, setProducts] = useState(localProducts); // default to local data as fallback
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts(params);
        if (isMounted) {
          if (response.success && response.data?.products?.length > 0) {
            setProducts(response.data.products);
          } else if (response.success && response.data?.length > 0) {
            setProducts(response.data);
          } else {
            console.warn("Backend didn't return products (db may be empty). Falling back to mock data.");
            // Optional: apply simple local filtering based on params to mock data here if needed
            let filtered = [...localProducts];
            if (params.isBestSeller) filtered = filtered.filter(p => p.isBestSeller);
            if (params.isNew) filtered = filtered.filter(p => p.isNew);
            setProducts(filtered);
          }
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => { isMounted = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return { products, loading, error };
}
