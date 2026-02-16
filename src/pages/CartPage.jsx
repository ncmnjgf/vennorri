import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items yet.</p>}

      <div className="cart-grid">
        {cart.map((item, i) => (
          <div key={i} className="cart-card">
            <img src={item.image} alt="" />

            <h4>{item.title}</h4>
            <p>Size: {item.size}</p>
            <p>₹ {Math.floor(item.price * 80)}</p>

            <button onClick={() => removeFromCart(i)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
