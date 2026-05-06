import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";
import slides from "../data/slides";

export default function Men() {
  return (
    <>
      <CategoryHeader 
        title="MEN'S COLLECTION"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/men" },
          { label: "Men", path: "/men" }
        ]}
        image={slides[0].image}
        description="Stay cool and confident with Bonkers Corner's menswear collection - your go-to for easy layering and everyday streetwear comfort. Elevate your wardrobe with premium fabrics and modern drops."
        count={89}
      />
      <ProductGrid category="men" />
    </>
  );
}
