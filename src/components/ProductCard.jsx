export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} />
      <span className="discount">SAVE {product.discount}%</span>
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <span className="heart">♡</span>
    </div>
  );
}
