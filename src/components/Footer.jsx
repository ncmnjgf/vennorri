export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT BRAND SECTION */}
        <div className="footer-brand">
          <h1>Vennoirr <br /></h1>

          <div className="footer-socials">
            <span>ⓕ</span>
            <span>ⓧ</span>
            <span>◎</span>
            <span>ⓟ</span>
          </div>

          <div className="footer-explore">
            <h4>Explore</h4>
            <p>Search</p>
            <p>Return</p>
            <p>About Us</p>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-column">
          <h4>SHOP</h4>
          <p>Best Sellers</p>
          <p>Special Prices</p>
          <p>Disney</p>
          <p>Marvel</p>
          <p>New Arrivals</p>
        </div>

        {/* TRENDING */}
        <div className="footer-column">
          <h4>TRENDING</h4>
          <p>Anime Collection</p>
          <p>Oversized T-shirt</p>
          <p>Bottoms for Women</p>
          <p>Bottoms for Men</p>
          <p>Jackets</p>
        </div>

        {/* INFO */}
        <div className="footer-column">
          <h4>INFO</h4>
          <p>Terms & Conditions</p>
          <p>Stores Near Me</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Returns & Exchange</p>
        </div>

      </div>
    </footer>
  );
}
