import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import "../styles/SearchOverlay.css";

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const escHandler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escHandler);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", escHandler);
    };
  }, [onClose]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-overlay">
      <div className="search-top">
        <input
          type="text"
          placeholder="Search for anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <span className="close-btn" onClick={onClose}>
          ✕
        </span>
      </div>

      <div className="search-section">
        <h4>POPULAR SEARCHES</h4>
        <div className="search-chips">
          {["Women", "Men", "New Arrivals", "Premium", "Bestsellers"].map(
            (item) => (
              <span key={item} onClick={() => setQuery(item)}>
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="search-section">
        <h4>TRENDING NOW</h4>
        <div className="search-grid">
          {(query ? filteredProducts : products.slice(0, 4)).map((p) => (
            <Link
              to="/shop"
              key={p.id}
              className="search-card"
              onClick={onClose}
            >
              <img src={p.image} alt={p.name} />
              <p className="name">{p.name}</p>
              <p className="price">₹{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
