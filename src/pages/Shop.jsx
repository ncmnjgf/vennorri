import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="shop">
      <div className="filter">
        <p>FILTER AND SORT</p>
        <p>2131 PRODUCTS</p>
      </div>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
