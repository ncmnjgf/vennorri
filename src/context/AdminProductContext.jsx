/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { isAdminLoggedIn } from "../services/adminAuthService";

export const AdminProductContext = createContext();

export function AdminProductProvider({ children }) {
  const [adminProducts, setAdminProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  /**
   * Fetch all products from MongoDB.
   * Called on mount and after adding/deleting a product.
   */
  const refreshProducts = useCallback(async () => {
    // Only load if we have a session — otherwise lists remain served by useProducts)
    setLoadingProducts(true);
    try {
      const response = await getProducts({ limit: 100 });
      if (response.success) {
        // getProducts returns axios response.data = { success, data: [...], pagination }
        // so the products array is at response.data directly
        const data = Array.isArray(response.data) ? response.data : [];
        setAdminProducts(data);
      }
    } catch {
      // silently fail — main site still works via local fallback
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  // Fetch on mount (always — gives admin list and lets useProducts work)
  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  /**
   * Notify the context that a new product was just created+uploaded,
   * so we refresh the list from MongoDB.
   */
  const notifyProductAdded = useCallback(() => {
    refreshProducts();
  }, [refreshProducts]);

  /**
   * Delete a product by its MongoDB _id.
   */
  const deleteAdminProduct = useCallback(async (id) => {
    if (!isAdminLoggedIn()) return;
    try {
      await deleteProduct(id);
      setAdminProducts((prev) => prev.filter((p) => (p._id || p.id) !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
      throw err;
    }
  }, []);

  return (
    <AdminProductContext.Provider
      value={{ adminProducts, loadingProducts, notifyProductAdded, deleteAdminProduct, refreshProducts }}
    >
      {children}
    </AdminProductContext.Provider>
  );
}

export function useAdminProducts() {
  return useContext(AdminProductContext);
}
