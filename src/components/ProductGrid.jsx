import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ category, subcategory }) {
  let filtered = products;

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (subcategory) {
    filtered = filtered.filter(
      (p) => p.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
  }

  return (
    <div className="product-grid" style={{ padding: "40px var(--container-padding)" }}>
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
