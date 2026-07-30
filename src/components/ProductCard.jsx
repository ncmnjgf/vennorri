import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductCard({ product, openSidebar }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const productId = product._id || product.id;
  const isWishlisted = wishlist.some((item) => (item._id || item.id) === productId);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (openSidebar) {
      openSidebar(product);
    } else {
      addToCart({
        ...product,
        size: product.sizes?.[1] || "M",
        qty: 1,
      });
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Link to={`/product/${productId}`} className="product-card">
      <div className="card-image">
        <img
          src={product.image || product.images?.[0] || ""}
          alt={product.title || product.name}
          className="primary-img"
        />

        {(product.hoverImage || product.images?.[1]) && (
          <img
            src={product.hoverImage || product.images?.[1]}
            alt={product.title || product.name}
            className="hover-img"
          />
        )}

        {product.discount > 0 && (
          <span className="discount-badge">
            SAVE {product.discount}%
          </span>
        )}

        {/* Wishlist Button */}
<button
  className={`wishlist-btn ${isWishlisted ? "liked" : ""}`}
  onClick={handleWishlist}
  aria-label="Wishlist"
>
  <FiHeart />
</button>

        {/* Quick Add */}
        <button
          className="quick-add"
          onClick={handleQuickAdd}
        >
          ADD TO CART
        </button>
      </div>

      <div className="card-info">
        <h4>{product.title || product.name}</h4>

        <div className="price-row">
          <span className="sale-price">₹{product.price}</span>

          {(product.originalPrice || product.mrp) && (
            <span className="original-price">
              ₹{product.originalPrice || product.mrp}
            </span>
          )}

          {product.discount > 0 && (
            <span className="discount-text">
              ({product.discount}% OFF)
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}