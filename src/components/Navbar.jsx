import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

import "./Navbar.css";
import LoginModal from "./LoginModal";
import SearchOverlay from "./SearchOverlay";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { pathname } = useLocation();
  const { cart } = useContext(CartContext);

  const isMen = pathname.startsWith("/men");
  const isWomen = pathname.startsWith("/women");
  const isHome = pathname === "/";
  const isOverlay = isHome || isMen || isWomen;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  let navClass = isOverlay
    ? scrolled
      ? "navbar navbar--scrolled"
      : "navbar navbar--transparent"
    : scrolled
    ? "navbar navbar--scrolled"
    : "navbar navbar--solid";

  if (mobileOpen) {
    navClass += " mobile-active";
  }

  return (
    <>
      <nav className={navClass}>
        {/* LEFT: NAV LINKS (desktop) + HAMBURGER (mobile) */}
        <div className="nav-left-area">
          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </div>

          <div className={`nav-links ${mobileOpen ? "active" : ""}`}>
            {/* WOMEN */}
            <div
              className={`nav-item ${openMenu === "women" ? "open" : ""}`}
              onMouseEnter={() => !isMobile && setOpenMenu("women")}
              onMouseLeave={() => !isMobile && setOpenMenu(null)}
            >
              {isMobile ? (
                <>
                  <div
                    className={`nav-link ${isWomen ? "active" : ""}`}
                    onClick={() => toggleDropdown("women")}
                  >
                    Women <FiChevronDown size={13} className={`chevron ${openMenu === "women" ? "rotated" : ""}`} />
                  </div>
                  <div className="dropdown">
                    <Link to="/women" onClick={closeMenu}>All Women</Link>
                    <Link to="/women/funky" onClick={closeMenu}>Funky</Link>
                    <Link to="/women/premium" onClick={closeMenu}>Premium</Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/women"
                    className={`nav-link ${isWomen ? "active" : ""}`}
                  >
                    Women <FiChevronDown size={13} className="chevron" />
                  </Link>
                  <div className={`dropdown ${openMenu === "women" ? "show" : ""}`}>
                    <Link to="/women/funky" onClick={closeMenu}>Funky</Link>
                    <Link to="/women/premium" onClick={closeMenu}>Premium</Link>
                  </div>
                </>
              )}
            </div>

            {/* MEN */}
            <div
              className={`nav-item ${openMenu === "men" ? "open" : ""}`}
              onMouseEnter={() => !isMobile && setOpenMenu("men")}
              onMouseLeave={() => !isMobile && setOpenMenu(null)}
            >
              {isMobile ? (
                <>
                  <div
                    className={`nav-link ${isMen ? "active" : ""}`}
                    onClick={() => toggleDropdown("men")}
                  >
                    Men <FiChevronDown size={13} className={`chevron ${openMenu === "men" ? "rotated" : ""}`} />
                  </div>
                  <div className="dropdown">
                    <Link to="/men" onClick={closeMenu}>All Men</Link>
                    <Link to="/men/funky" onClick={closeMenu}>Funky</Link>
                    <Link to="/men/premium" onClick={closeMenu}>Premium</Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/men"
                    className={`nav-link ${isMen ? "active" : ""}`}
                  >
                    Men <FiChevronDown size={13} className="chevron" />
                  </Link>
                  <div className={`dropdown ${openMenu === "men" ? "show" : ""}`}>
                    <Link to="/men/funky" onClick={closeMenu}>Funky</Link>
                    <Link to="/men/premium" onClick={closeMenu}>Premium</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CENTER: LOGO */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          VENNOIRR
        </Link>

        {/* RIGHT: SEARCH BAR + ICONS */}
        <div className="nav-right-area">
          {/* SEARCH BAR (desktop) */}
          <div className="nav-search-bar" onClick={() => setShowSearch(true)}>
            <span className="search-placeholder">Search...</span>
            <FiSearch size={16} />
          </div>

          {/* ICONS */}
          <div className="nav-icons">
            {/* Search icon (mobile) */}
            <FiSearch
              size={20}
              className="nav-icon search-mobile"
              onClick={() => setShowSearch(true)}
            />

            <FiUser
              size={20}
              className="nav-icon"
              onClick={() => setShowLogin(true)}
            />

            <Link to="/wishlist" onClick={closeMenu} className="wishlist-icon-wrap">
              <FiHeart size={20} className="nav-icon" />
            </Link>

            <Link to="/cart" onClick={closeMenu} className="cart-icon-wrap">
              <FiShoppingBag size={20} className="nav-icon" />
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </Link>
          </div>
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