import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import CollectionBanner from "../components/CollectionBanner";
import VideoSection from "../components/VideoSection";
import ProductSidebar from "../components/ProductSidebar";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <HeroBanner />
      <NewArrivals />
      <CollectionBanner />
      <BestSellers />
      <VideoSection />

      <ProductSidebar
        product={selectedProduct}
        close={() => setSelectedProduct(null)}
      />
    </div>
  );
}
