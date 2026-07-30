import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";
import menBannerImage from "../assets/images/Untitled-2 (1)_page-0001.jpg";

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
        images={["/images/new_slide_1.png", "/images/new_slide_2.png", "/images/new_slide_3.png", menBannerImage]}
        description="Stay cool and confident with Bonkers Corner's menswear collection - your go-to for easy layering and everyday streetwear comfort. Elevate your wardrobe with premium fabrics and modern drops."
        count={89}
      />
      <ProductGrid category="men" />
    </>
  );
}
