import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";
import slides from "../data/slides";

export default function Women() {
  return (
    <>
      <CategoryHeader 
        title="WOMEN'S COLLECTION"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/women" },
          { label: "Women", path: "/women" }
        ]}
        image={slides[1].image}
        description="Stay cool and confident with Bonkers Corner's womenswear collection - your go-to for easy layering and everyday streetwear comfort."
        count={54}
      />
      <ProductGrid category="women" />
    </>
  );
}
