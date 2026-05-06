import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";

export default function WomenPremium() {
  return (
    <>
      <CategoryHeader 
        title="WOMEN — PREMIUM"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Women", path: "/women" },
          { label: "Premium", path: "/women/premium" }
        ]}
        image="/images/hero5.jpg"
        description="Sophisticated streetwear tailored from luxury fabrics."
        count={28}
      />
      <ProductGrid category="women" subcategory="premium" />
    </>
  );
}