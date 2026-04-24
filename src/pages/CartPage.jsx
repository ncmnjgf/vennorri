import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="shop-btn">CONTINUE SHOPPING</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p className="item-meta">Size: {item.size}</p>
                  <p className="item-price">₹{item.price * item.qty}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(i, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(i, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(i)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{cartTotal >= 999 ? "FREE" : "₹99"}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{cartTotal >= 999 ? cartTotal : cartTotal + 99}</span>
            </div>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}
