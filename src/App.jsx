import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";
import DeliveryPopup from "./components/DeliveryPopup";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

import Men from "./pages/Men";
import MenFunky from "./pages/MenFunky";
import MenPremium from "./pages/MenPremium";

import Women from "./pages/Women";
import WomenFunky from "./pages/WomenFunky";
import WomenPremium from "./pages/WomenPremium";

function App() {
  return (
    <>
      {/* Global Components */}
      <DeliveryPopup />
      <WhatsAppPopup />
      <Navbar />

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />

        {/* MEN ROUTES */}
        <Route path="/men">
          <Route index element={<Men />} />
          <Route path="funky" element={<MenFunky />} />
          <Route path="premium" element={<MenPremium />} />
        </Route>

        {/* WOMEN ROUTES */}
        <Route path="/women">
          <Route index element={<Women />} />
          <Route path="funky" element={<WomenFunky />} />
          <Route path="premium" element={<WomenPremium />} />
        </Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;