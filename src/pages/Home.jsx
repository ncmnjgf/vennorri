import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import VideoCards from "../components/VideoCards";
import ProductGrid from "../components/ProductGrid";
import ProductSidebar from "../components/ProductSidebar";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <HeroBanner />
      <ProductGrid openSidebar={setSelectedProduct} />

      <ProductSidebar
        product={selectedProduct}
        close={() => setSelectedProduct(null)}
      />
      <VideoCards />
    </div>
  );
}
