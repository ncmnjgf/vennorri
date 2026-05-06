import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({ onClose }) {
  const { cart, removeFromCart, updateQty, cartTotal, cartCount } = useContext(CartContext);

  return (
    <>
      {/* Backdrop */}
      <div className="drawer-backdrop" onClick={onClose} />

      {/* Drawer Panel */}
      <aside className="cart-drawer">
        {/* Header */}
        <div className="cd-header">
          <div>
            <h2 className="cd-title">Your Cart</h2>
            {cartCount > 0 && <span className="cd-count">{cartCount} item{cartCount > 1 ? "s" : ""}</span>}
          </div>
          <button className="cd-close" onClick={onClose} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Free shipping progress */}
        {cartTotal < 999 && (
          <div className="cd-shipping-bar">
            <p>Add <strong>₹{(999 - cartTotal).toLocaleString("en-IN")}</strong> more for <strong>FREE shipping</strong></p>
            <div className="cd-progress-track">
              <div className="cd-progress-fill" style={{ width: `${Math.min(100, (cartTotal / 999) * 100)}%` }} />
            </div>
          </div>
        )}
        {cartTotal >= 999 && (
          <div className="cd-shipping-bar" style={{ background: "#1a3d1a" }}>
            <p style={{ color: "#4caf50" }}>🎉 You've unlocked <strong>FREE shipping!</strong></p>
          </div>
        )}

        {/* Cart Items */}
        <div className="cd-items">
          {cart.length === 0 ? (
            <div className="cd-empty">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <p>Your cart is empty</p>
              <button className="cd-shop-btn" onClick={onClose}>CONTINUE SHOPPING</button>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={`${item.id}-${item.size}-${i}`} className="cd-item">
                <Link to={`/product/${item.id}`} onClick={onClose}>
                  <img src={item.image || (item.images && item.images[0])} alt={item.name || item.title} className="cd-img" />
                </Link>
                <div className="cd-item-info">
                  <p className="cd-item-name">{item.name || item.title}</p>
                  {item.size && <p className="cd-item-meta">Size: {item.size}</p>}
                  <div className="cd-qty-row">
                    <div className="cd-qty">
                      <button onClick={() => updateQty(i, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(i, 1)}>+</button>
                    </div>
                    <span className="cd-item-price">₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
                  </div>
                  <button className="cd-remove" onClick={() => removeFromCart(i)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cd-footer">
            <div className="cd-subtotal">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>
            <p className="cd-tax-note">Taxes and shipping calculated at checkout</p>
            <Link to="/cart" className="cd-checkout-btn" onClick={onClose}>
              VIEW CART & CHECKOUT
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
