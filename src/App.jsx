import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import DeliveryPopup from "./components/DeliveryPopup";
import Women from "./pages/Women";
import MenFunky from "./pages/MenFunky";
import MenPremium from "./pages/MenPremium";
import WomenFunky from "./pages/WomenFunky";
import WomenPremium from "./pages/WomenPremium";
function App() {
  return (
    <>
      <DeliveryPopup />
      <Navbar />

<Routes>
  <Route path="/" element={<Home />} />

  {/* MEN */}
  <Route path="/men">
    <Route index element={<Men />} />
    <Route path="funky" element={<MenFunky />} />
    <Route path="premium" element={<MenPremium />} />
  </Route>

  {/* WOMEN */}
  <Route path="/women">
    <Route index element={<Women />} />
    <Route path="funky" element={<WomenFunky />} />
    <Route path="premium" element={<WomenPremium />} />
  </Route>

  <Route path="/shop" element={<Shop />} />
</Routes>
      <Footer />
    </>
  );
}

export default App;
