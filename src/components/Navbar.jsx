import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const location = useLocation();

  const isMenPage = location.pathname.startsWith("/men");
  const isWomenPage = location.pathname.startsWith("/women");

  const isTransparent = isMenPage || isWomenPage;

  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
    <nav
      className={`navbar ${
        isTransparent ? "navbar--transparent" : "navbar--solid"
      }`}
    >
      <div className="nav-left">
        {/* WOMEN */}
        <div className="nav-item">
          <Link
            to="/women"
            className={`nav-link nav-link-women ${isWomenPage ? "active" : ""}`}
          >
            WOMEN
          </Link>

          <div className="dropdown">
            <Link to="/women/funky">Funky</Link>
            <Link to="/women/premium">Premium</Link>
          </div>
        </div>

        {/* MEN */}
        <div className="nav-item">
          <Link
            to="/men"
            className={`nav-link nav-link-men ${isMenPage ? "active" : ""}`}
          >
            MEN
          </Link>

          <div className="dropdown">
            <Link to="/men/funky">Funky</Link>
            <Link to="/men/premium">Premium</Link>
          </div>
        </div>
      </div>

      {/* LOGO */}
      <Link to="/" className="text-logo">
        Vennori
      </Link>

      {/* RIGHT */}
      <div className="nav-right">
        <span onClick={() => setShowLogin(true)} style={{ cursor: "pointer" }}>
          👤
        </span>

        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

        <span>♡</span>

        <Link to="/shop" className="nav-link">
          <span>🛒</span>
        </Link>

        <span onClick={() => setShowSearch(true)} style={{ cursor: "pointer" }}>
          🔍
        </span>
      </div>
    </nav>
        {showSearch && (
      <SearchOverlay onClose={() => setShowSearch(false)} />
    )}
    </>
  );
}
