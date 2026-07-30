import ProductGrid from "../components/ProductGrid";
import CategoryHeader from "../components/CategoryHeader";
import womenBannerImage from "../assets/images/Untitled-2 (1)_page-0001.jpg";

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
        image={womenBannerImage}
        description="Stay cool and confident with Bonkers Corner's womenswear collection - your go-to for easy layering and everyday streetwear comfort."
        count={54}
      />
      <ProductGrid category="women" />
    </>
  );
}
