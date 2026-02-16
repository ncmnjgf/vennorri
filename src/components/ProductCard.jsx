import { FiHeart } from "react-icons/fi";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductGrid.css";

export default function ProductCard({ product, openSidebar }) {
  const { addToCart } = useContext(CartContext);
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="img-wrap">
        <img src={product.image} alt={product.title} />

        <span className="badge">SAVE {product.discount}%</span>

        {/* HEART */}
        <button
          className={`heart-btn ${liked ? "liked" : ""}`}
          onClick={() => {
            setLiked(!liked);
            addToCart({ ...product, size: "M", qty: 1 });
          }}
        >
          <FiHeart />
        </button>

        <button className="hover-cart" onClick={() => openSidebar(product)}>
          ADD TO CART
        </button>
      </div>

      <h4>{product.title}</h4>
      <p>₹ {Math.floor(product.price * 80)}</p>
    </div>
  );
}
