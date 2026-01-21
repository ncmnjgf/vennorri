import "../styles/videocards.css";

export default function VideoCards() {
  return (
    <section className="collection-wrapper">
      <h2 className="collection-title">Explore Our Collection</h2>

      <div className="collection-row">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div className="collection-card skeleton" key={i}>
            <div className="skeleton-text"></div>
            <div className="skeleton-bag"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
