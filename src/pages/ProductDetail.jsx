import { useParams, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FiHeart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const [descOpen, setDescOpen] = useState(true);

  if (!product) {
    return (
      <div className="cart-page">
        <h2>Product Not Found</h2>
        <div className="empty-cart">
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="shop-btn">BACK TO HOME</Link>
        </div>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const sizes = product.sizes || ["S", "M", "L", "XL"];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const size = selectedSize || sizes[1] || sizes[0];
    addToCart({ ...product, size, qty });
  };

  return (
    <div style={{ paddingTop: "calc(var(--navbar-height) + 20px)" }}>
      {/* BREADCRUMB */}
      <div style={{
        padding: "12px var(--container-padding)",
        fontSize: "12px",
        color: "var(--text-secondary)",
        letterSpacing: "0.5px",
      }}>
        <Link to="/" style={{ color: "var(--text-secondary)" }}>Home</Link>
        {" / "}
        <Link to={`/${product.category}`} style={{ color: "var(--text-secondary)", textTransform: "capitalize" }}>
          {product.category}
        </Link>
        {" / "}
        <span style={{ color: "var(--text-primary)" }}>{product.title}</span>
      </div>

      {/* PRODUCT LAYOUT */}
      <div className="pdp-layout">
        {/* LEFT: IMAGES */}
        <div className="pdp-images">
          <img
            src={product.image}
            alt={product.title}
            className="pdp-main-img"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={product.title}
              className="pdp-secondary-img"
            />
          )}
          <img
            src={product.image}
            alt={product.title}
            className="pdp-secondary-img"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="pdp-details">
          {product.discount > 0 && (
            <span className="pdp-badge">SAVE {product.discount}%</span>
          )}

          <h1 className="pdp-title">{product.title}</h1>

          <div className="pdp-price-row">
            <span className="pdp-price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="pdp-original">₹{product.originalPrice}</span>
            )}
            {product.discount > 0 && (
              <span className="pdp-discount">({product.discount}% OFF)</span>
            )}
          </div>

          {/* SIZE SELECTOR */}
          <div className="pdp-sizes">
            <p className="pdp-label">Select Size</p>
            <div className="pdp-size-options">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={selectedSize === s ? "active" : ""}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="pdp-qty-row">
            <p className="pdp-label">Qty</p>
            <div className="pdp-qty-controls">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pdp-actions">
            <button className="pdp-add-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button
              className={`pdp-wish-btn ${isWishlisted ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              <FiHeart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          {/* DESCRIPTION ACCORDION */}
          <div className="pdp-accordion">
            <button className="pdp-accordion-header" onClick={() => setDescOpen(!descOpen)}>
              Product Description
              {descOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {descOpen && (
              <p className="pdp-accordion-body">
                {product.description || "Premium quality streetwear crafted with the finest materials. Designed for comfort and style."}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div style={{ padding: "0 var(--container-padding) 60px" }}>
          <div className="section-header">
            <h2>You May Also Like</h2>
          </div>
          <div className="product-grid" style={{ padding: 0 }}>
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
