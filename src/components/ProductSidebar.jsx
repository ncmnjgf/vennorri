import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductSidebar({ product, close }) {
  if (!product) return null; // 🚑 HARD GUARD

  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState("M");

  return (
    <div className="sidebar">
      <button className="close" onClick={close}>×</button>

      <h3>{product.title}</h3>
      <p>₹ {Math.floor(product.price * 80)}</p>

      <div className="sizes">
        {["S","M","L","XL"].map(s => (
          <button
            key={s}
            className={size === s ? "active" : ""}
            onClick={() => setSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="add-btn"
        onClick={() => {
          addToCart({ ...product, size, qty: 1 });
          close();
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
