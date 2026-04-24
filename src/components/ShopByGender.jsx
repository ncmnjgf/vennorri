import { Link } from "react-router-dom";

export default function ShopByGender() {
  return (
    <section className="gender-section">
      <Link to="/women" className="gender-card">
        <img src="/images/female.jpg" alt="Women Collection" />
        <div className="gender-overlay">
          <h2>SHOP WOMEN</h2>
          <button className="explore-btn">EXPLORE</button>
        </div>
      </Link>

      <Link to="/men" className="gender-card">
        <img src="/images/male.jpg" alt="Men Collection" />
        <div className="gender-overlay">
          <h2>SHOP MEN</h2>
          <button className="explore-btn">EXPLORE</button>
        </div>
      </Link>
    </section>
  );
}
