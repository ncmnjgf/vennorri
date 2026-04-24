export default function CollectionBanner() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
      <div className="collection-banner">
        <img src="/images/hero4.jpg" alt="Men Collection" />
        <div className="banner-overlay">
          <h3>FUNKY COLLECTION</h3>
          <p>Express yourself with bold, statement pieces</p>
        </div>
      </div>

      <div className="collection-banner">
        <img src="/images/hero5.jpg" alt="Women Collection" />
        <div className="banner-overlay">
          <h3>PREMIUM EDIT</h3>
          <p>Elevated essentials worth repeating</p>
        </div>
      </div>
    </section>
  );
}
