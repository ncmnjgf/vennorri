import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import DeliveryPopup from "./components/DeliveryPopup";
import Women from "./components/Women";
function App() {
  return (
    <>
      <DeliveryPopup />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
