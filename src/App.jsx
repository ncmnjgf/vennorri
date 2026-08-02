import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";
import DeliveryPopup from "./components/DeliveryPopup";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Account from "./pages/Account";
import CheckoutPage from "./pages/CheckoutPage";
import AdminPage from "./pages/AdminPage";

import Men from "./pages/Men";
import MenFunky from "./pages/MenFunky";
import MenPremium from "./pages/MenPremium";

import Women from "./pages/Women";
import WomenFunky from "./pages/WomenFunky";
import WomenPremium from "./pages/WomenPremium";

import { AdminProductProvider } from "./context/AdminProductContext";

function AppLayout() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={!isAdmin && showAnnouncement ? "has-announcement" : ""}>
      <Toaster position="bottom-center" toastOptions={{ className: 'custom-toast', style: { borderRadius: '4px', background: '#333', color: '#fff' } }} />

      {!isAdmin && (
        <>
          <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
          <DeliveryPopup />
          <WhatsAppPopup />
          <ScrollToTop />
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/men">
          <Route index element={<Men />} />
          <Route path="funky" element={<MenFunky />} />
          <Route path="premium" element={<MenPremium />} />
        </Route>

        <Route path="/women">
          <Route index element={<Women />} />
          <Route path="funky" element={<WomenFunky />} />
          <Route path="premium" element={<WomenPremium />} />
        </Route>
      </Routes>

      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AdminProductProvider>
      <AppLayout />
    </AdminProductProvider>
  );
}

export default App;