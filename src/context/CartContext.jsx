import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
    setSidebarOpen(true);
  };

  const removeFromCart = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      sidebarOpen,
      setSidebarOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}
