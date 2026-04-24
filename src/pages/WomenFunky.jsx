import ProductGrid from "../components/ProductGrid";

export default function WomenFunky() {
  return (
    <div style={{ paddingTop: "var(--navbar-height)" }}>
      <div className="filter-bar">
        <span className="result-count">WOMEN — FUNKY COLLECTION</span>
      </div>
      <ProductGrid category="women" subcategory="funky" />
    </div>
  );
}