import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import useProducts from "../hooks/useProducts";

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const { products } = useProducts();

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
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-overlay">
      <button className="overlay-close" onClick={onClose} aria-label="Close">
        <IoClose />
      </button>

      <div className="search-top">
        <input
          type="text"
          placeholder="Search for anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      <div className="search-section">
        <h4>POPULAR SEARCHES</h4>
        <div className="search-chips">
          {["Oversized T-shirt", "Hoodie", "Track Pants", "Premium", "Funky", "Women", "Men"].map(
            (item) => (
              <span key={item} onClick={() => setQuery(item)}>
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="search-section">
        <h4>{query ? "SEARCH RESULTS" : "TRENDING NOW"}</h4>
        <div className="search-grid">
          {(query ? filteredProducts : products.filter(p => p.isBestSeller).slice(0, 4)).map((p) => {
            const pid = p._id || p.id;
            return (
            <Link
              to={`/product/${pid}`}
              key={pid}
              className="search-card"
              onClick={onClose}
            >
              <img src={p.image || p.images?.[0]} alt={p.title || p.name} />
              <p className="name">{p.title || p.name}</p>
              <p className="price">₹{p.price}</p>
            </Link>
          )})}
        </div>
        {query && filteredProducts.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--text-secondary)", padding: "40px" }}>
            No products found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}
