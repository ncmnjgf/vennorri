import { useState, useEffect } from "react";
import slides from "../data/slides";
import ProductGrid from "../components/ProductGrid";

export default function Women() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="category-hero">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`category-hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="category-hero-content">
              <p className="tagline">{slide.tagline}</p>
              <h1>{slide.title}</h1>
              <button className="hero-cta">{slide.button}</button>
            </div>
          </div>
        ))}
        <div className="category-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <div className="filter-bar">
        <span className="result-count">WOMEN'S COLLECTION</span>
      </div>

      <ProductGrid category="women" />
    </>
  );
}
