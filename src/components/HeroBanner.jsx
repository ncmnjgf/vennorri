export default function HeroBanner() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>NEW ARRIVALS</h1>
        </div>
      </section>

      {/* BOTTOM IMAGES */}
      <section className="category-section">
        <div className="category-card">
          <img src="/images/female.jpg" alt="Women Collection" />
          <div className="category-overlay">
            <h2>WOMEN</h2>
          </div>
        </div>

        <div className="category-card">
          <img src="/images/male.jpg" alt="Men Collection" />
          <div className="category-overlay">
            <h2>MEN</h2>
          </div>
        </div>
      </section>
    </>
  );
}
