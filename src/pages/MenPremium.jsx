import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";

export default function MenPremium() {
  return (
    <>
      <CategoryHeader 
        title="MEN — PREMIUM"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Men", path: "/men" },
          { label: "Premium", path: "/men/premium" }
        ]}
        image="/images/hero2.jpg"
        description="Luxury streetwear essentials with high-end fabrics."
        count={18}
      />
      <ProductGrid category="men" subcategory="premium" />
    </>
  );
}