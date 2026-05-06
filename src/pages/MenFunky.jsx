import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";

export default function MenFunky() {
  return (
    <>
      <CategoryHeader 
        title="MEN — FUNKY"
        breadcrumbList={[
          { label: "Home", path: "/" },
          { label: "Men", path: "/men" },
          { label: "Funky", path: "/men/funky" }
        ]}
        image="/images/hero3.jpg"
        description="Bold colors, loud graphics, and oversized fits for out-of-the-box style."
        count={23}
      />
      <ProductGrid category="men" subcategory="funky" />
    </>
  );
}