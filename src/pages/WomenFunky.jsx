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
        image="/images/hero4.jpg"
        description="Vibrant colors, eye-catching graphics, and expressive streetwear for women."
        count={34}
      />
      <ProductGrid category="women" subcategory="funky" />
    </>
  );
}