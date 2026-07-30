import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";

export default function WomenFunky() {
  return (
    <>
      <CategoryHeader 
        title="WOMEN — FUNKY"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Women", path: "/women" },
          { label: "Funky", path: "/women/funky" }
        ]}
        image="/images/hero5.jpg"
        description="Sophisticated streetwear tailored from luxury fabrics."
        count={28}
      />
      <ProductGrid category="women" subcategory="premium" />
    </>
  );
}