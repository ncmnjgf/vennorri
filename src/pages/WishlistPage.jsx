import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleMoveToCart = (product) => {
    addToCart({ ...product, size: product.sizes?.[1] || "M", qty: 1 });
    removeFromWishlist(product.id);
  };

  return (
    <div className="cart-page">
      <h2>Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="empty-cart">
          <p>Your wishlist is empty</p>
          <Link to="/" className="shop-btn">DISCOVER PRODUCTS</Link>
        </div>
      ) : (
        <div className="product-grid" style={{ padding: 0 }}>
          {wishlist.map((product) => (
            <div key={product.id} className="product-card" style={{ pointerEvents: "auto" }}>
              <Link to={`/product/${product.id}`}>
                <div className="card-image">
                  <img src={product.image} alt={product.title} className="primary-img" />
                  {product.discount > 0 && (
                    <span className="discount-badge">SAVE {product.discount}%</span>
                  )}
                </div>
              </Link>

              <div className="card-info">
                <h4>{product.title}</h4>
                <div className="price-row">
                  <span className="sale-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">₹{product.originalPrice}</span>
                  )}
                </div>
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <button
                    onClick={() => handleMoveToCart(product)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "var(--black)",
                      color: "var(--white)",
                      fontFamily: "var(--font-heading)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <FiShoppingBag size={14} /> MOVE TO CART
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    style={{
                      padding: "10px 14px",
                      border: "1px solid var(--grey-300)",
                      background: "var(--white)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
