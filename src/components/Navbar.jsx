import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";
import LoginModal from "./LoginModal";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const { pathname } = useLocation();

  const isMen = pathname.startsWith("/men");
  const isWomen = pathname.startsWith("/women");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      <nav
        className={`navbar ${
          isMen || isWomen ? "navbar--transparent" : "navbar--solid"
        }`}
      >
        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </div>

        {/* LEFT NAV */}
        <div className={`nav-left ${mobileOpen ? "active" : ""}`}>
          
          {/* WOMEN */}
          <div
            className={`nav-item ${openMenu === "women" ? "open" : ""}`}
            onClick={() =>
              setOpenMenu(openMenu === "women" ? null : "women")
            }
          >
            <Link
              to="/women"
              className={`nav-link ${isWomen ? "active" : ""}`}
            >
              WOMEN
            </Link>

            <div className="dropdown">
              <Link to="/women/funky" onClick={closeMenu}>
                Funky
              </Link>
              <Link to="/women/premium" onClick={closeMenu}>
                Premium
              </Link>
            </div>
          </div>

          {/* MEN */}
          <div
            className={`nav-item ${openMenu === "men" ? "open" : ""}`}
            onClick={() =>
              setOpenMenu(openMenu === "men" ? null : "men")
            }
          >
            <Link
              to="/men"
              className={`nav-link ${isMen ? "active" : ""}`}
            >
              MEN
            </Link>

            <div className="dropdown">
              <Link to="/men/funky" onClick={closeMenu}>
                Funky
              </Link>
              <Link to="/men/premium" onClick={closeMenu}>
                Premium
              </Link>
            </div>
          </div>

        </div>

        {/* LOGO */}
        <Link to="/" className="text-logo" onClick={closeMenu}>
          Vennoirr
        </Link>

        {/* RIGHT NAV */}
        <div className="nav-right">
          <FiUser
            size={22}
            className="nav-icon"
            onClick={() => setShowLogin(true)}
          />

          <Link to="/wishlist" onClick={closeMenu}>
            <FiHeart size={22} className="nav-icon" />
          </Link>

          <Link to="/cart" onClick={closeMenu}>
            <FiShoppingCart size={22} className="nav-icon" />
          </Link>

          <FiSearch
            size={22}
            className="nav-icon"
            onClick={() => setShowSearch(true)}
          />
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}

      {/* MODALS */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showSearch && <SearchOverlay onClose={() => setShowSearch(false)} />}
    </>
  );
}