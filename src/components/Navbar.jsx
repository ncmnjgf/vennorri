import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
  FiUser, 
  FiHeart, 
  FiShoppingCart, 
  FiSearch 
} from "react-icons/fi";

import "./Navbar.css";
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
        {/* LEFT SECTION */}
        <div className="nav-left">
          {/* WOMEN */}
          <div className="nav-item">
            <Link
              to="/women"
              className={`nav-link nav-link-women ${
                isWomenPage ? "active" : ""
              }`}
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
              className={`nav-link nav-link-men ${
                isMenPage ? "active" : ""
              }`}
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
          Vennoirr 
        </Link>

        {/* RIGHT SECTION */}
        <div className="nav-right">
          {/* User Icon */}
          <FiUser
            size={22}
            className="nav-icon"
            onClick={() => setShowLogin(true)}
          />

          {/* Wishlist */}
          <Link to="/cart">
          <FiHeart size={22} className="nav-icon" />
          </Link>

          {/* Cart */}
          <Link to="/shop">
            <FiShoppingCart size={22} className="nav-icon" />
          </Link>

          {/* Search */}
          <FiSearch
            size={22}
            className="nav-icon"
            onClick={() => setShowSearch(true)}
          />
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* Search Overlay */}
      {showSearch && (
        <SearchOverlay onClose={() => setShowSearch(false)} />
      )}
    </>
  );
}
