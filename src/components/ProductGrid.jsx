import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import "../styles/ProductGrid.css";

export default function ProductGrid({ category }) {
  const products = useProducts();

  const filtered = category
    ? products.filter(p =>
        p.category.toLowerCase().includes(category.toLowerCase())
      )
    : products;

  return (
    <div className="grid">
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
