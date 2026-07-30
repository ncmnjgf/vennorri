import { Link } from "react-router-dom";
import imgWomen from "../assets/images/Product2 Back _page-0001.jpg";
import imgMen from "../assets/images/men_fornt_page-0001.jpg";

export default function ShopByGender() {
  return (
    <section className="gender-section">
      <Link to="/women" className="gender-card">
        <img src={imgWomen} alt="Women Collection" />
        <div className="gender-overlay">
          <h2>SHOP WOMEN</h2>
          <button className="explore-btn">EXPLORE</button>
        </div>
      </Link>

      <Link to="/men" className="gender-card">
        <img src={imgMen} alt="Men Collection" />
        <div className="gender-overlay">
          <h2>SHOP MEN</h2>
          <button className="explore-btn">EXPLORE</button>
        </div>
      </Link>
    </section>
  );
}
