import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";
import menBannerImage from "../assets/images/Hero Image.png";

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
        image={menBannerImage}
        description="Luxury streetwear essentials with high-end fabrics."
        count={18}
      />
      <ProductGrid category="men" subcategory="premium" />
    </>
  );
}