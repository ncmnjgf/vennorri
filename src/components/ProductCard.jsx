import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductCard({ product, openSidebar }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (openSidebar) {
      openSidebar(product);
    } else {
      addToCart({ ...product, size: product.sizes?.[1] || "M", qty: 1 });
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="card-image">
        <img
          src={product.image}
          alt={product.title}
          className="primary-img"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.title}
            className="hover-img"
          />
        )}

        {product.discount > 0 && (
          <span className="discount-badge">SAVE {product.discount}%</span>
        )}

        <button
          className={`wishlist-btn ${isWishlisted ? "liked" : ""}`}
          onClick={handleWishlist}
        >
          <FiHeart fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <button className="quick-add" onClick={handleQuickAdd}>
          ADD TO CART
        </button>
      </div>

      <div className="card-info">
        <h4>{product.title}</h4>
        <div className="price-row">
          <span className="sale-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
          {product.discount > 0 && (
            <span className="discount-text">({product.discount}% OFF)</span>
          )}
        </div>
      </div>
    </Link>
  );
}
