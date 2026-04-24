import ProductGrid from "../components/ProductGrid";

export default function MenPremium() {
  return (
    <div style={{ paddingTop: "var(--navbar-height)" }}>
      <div className="filter-bar">
        <span className="result-count">MEN — PREMIUM COLLECTION</span>
      </div>
      <ProductGrid category="men" subcategory="premium" />
    </div>
  );
}