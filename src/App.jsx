import { Routes, Route } from "react-router-dom";
import { useState } from "react";

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

import Men from "./pages/Men";
import MenFunky from "./pages/MenFunky";
import MenPremium from "./pages/MenPremium";

import Women from "./pages/Women";
import WomenFunky from "./pages/WomenFunky";
import WomenPremium from "./pages/WomenPremium";

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className={showAnnouncement ? "has-announcement" : ""}>
      <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
      <DeliveryPopup />
      <WhatsAppPopup />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />

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

      <Footer />
    </div>
  );
}

export default App;