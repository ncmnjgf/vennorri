import { useState, useEffect } from "react";
import womenSlides from "../data/slides"; // create this like slides.js
import "../styles/women.css";

export default function Women() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // tell navbar we are on WOMEN page
  useEffect(() => {
    document.body.classList.add("page-women");
    return () => document.body.classList.remove("page-women");
  }, []);

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % womenSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="women-hero">
      {womenSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`women-hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="women-hero-content">
            <p className="women-tagline">{slide.tagline}</p>
            <h1 className="women-title">{slide.title}</h1>
            <button className="women-button">{slide.button}</button>
          </div>
        </div>
      ))}

      <div className="women-dots">
        {womenSlides.map((_, index) => (
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
