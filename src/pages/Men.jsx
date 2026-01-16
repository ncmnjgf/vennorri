import { useState, useEffect } from "react";
import slides from "../data/slides";
import "../styles/men.css";

export default function Men() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 👇 Tell navbar we are on MEN page
  useEffect(() => {
    document.body.classList.add("page-men");
    return () => document.body.classList.remove("page-men");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="men-hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`men-hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="men-hero-content">
            <p className="men-tagline">{slide.tagline}</p>
            <h1 className="men-title">{slide.title}</h1>
            <button className="men-button">{slide.button}</button>
          </div>
        </div>
      ))}

      <div className="men-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
