import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`navbar ${
          isTransparent ? "navbar--transparent" : "navbar--solid"
        }`}
      >
        {/* HAMBURGER (Mobile Only) */}
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>

        {/* LEFT SECTION */}
        <div className={`nav-left ${mobileOpen ? "active" : ""}`}>
          {/* WOMEN */}
          <div className="nav-item">
            <Link
              to="/women"
              onClick={closeMobileMenu}
              className={`nav-link nav-link-women ${
                isWomenPage ? "active" : ""
              }`}
            >
              WOMEN
            </Link>

            <div className="dropdown">
              <Link to="/women/funky" onClick={closeMobileMenu}>
                Funky
              </Link>
              <Link to="/women/premium" onClick={closeMobileMenu}>
                Premium
              </Link>
            </div>
          </div>

          {/* MEN */}
          <div className="nav-item">
            <Link
              to="/men"
              onClick={closeMobileMenu}
              className={`nav-link nav-link-men ${
                isMenPage ? "active" : ""
              }`}
            >
              MEN
            </Link>

            <div className="dropdown">
              <Link to="/men/funky" onClick={closeMobileMenu}>
                Funky
              </Link>
              <Link to="/men/premium" onClick={closeMobileMenu}>
                Premium
              </Link>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <Link to="/" className="text-logo" onClick={closeMobileMenu}>
          Vennoirr
        </Link>

        {/* RIGHT SECTION */}
        <div className="nav-right">
          <FiUser
            size={22}
            className="nav-icon"
            onClick={() => setShowLogin(true)}
          />

          <Link to="/wishlist" onClick={closeMobileMenu}>
            <FiHeart size={22} className="nav-icon" />
          </Link>

          <Link to="/cart" onClick={closeMobileMenu}>
            <FiShoppingCart size={22} className="nav-icon" />
          </Link>

          <FiSearch
            size={22}
            className="nav-icon"
            onClick={() => setShowSearch(true)}
          />
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* Search Overlay */}
      {showSearch && (
        <SearchOverlay onClose={() => setShowSearch(false)} />
      )}
    </>
  );
}
