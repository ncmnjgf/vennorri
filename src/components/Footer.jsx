import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* BRAND */}
        <div className="footer-brand">
          <h1>VENNOIRR</h1>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>

          <div className="footer-newsletter">
            <input type="email" placeholder="Enter your email for updates" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h4>SHOP</h4>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/men/funky">Funky Collection</Link>
          <Link to="/men/premium">Premium Edit</Link>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
        </div>

        {/* TRENDING */}
        <div className="footer-column">
          <h4>TRENDING</h4>
          <p>Oversized T-shirts</p>
          <p>Track Pants</p>
          <p>Hoodies</p>
          <p>Cargo Joggers</p>
          <p>Jackets</p>
        </div>

        {/* HELP */}
        <div className="footer-column">
          <h4>HELP</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Returns & Exchange</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Vennoirr. All rights reserved.</span>
        <span>Premium Streetwear Fashion</span>
      </div>
    </footer>
  );
}
