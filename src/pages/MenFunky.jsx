import ProductGrid from "../components/ProductGrid";

export default function MenFunky() {
  return (
    <div style={{ paddingTop: "var(--navbar-height)" }}>
      <div className="filter-bar">
        <span className="result-count">MEN — FUNKY COLLECTION</span>
      </div>
      <ProductGrid category="men" subcategory="funky" />
    </div>
  );
}