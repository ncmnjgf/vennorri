import { FiHeart } from "react-icons/fi";
import "../styles/videocards.css";

export default function VideoCards() {
  return (
    <section className="collection-wrapper">
      <h2 className="collection-title">Explore Our Collection</h2>

      <div className="collection-row">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div className="collection-card skeleton" key={i}>
            <button className="video-wishlist-btn">
              <FiHeart strokeWidth={1.2} fill="none" />
            </button>
            <div className="skeleton-text"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
