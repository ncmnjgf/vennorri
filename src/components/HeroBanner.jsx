import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import slides from "../data/slides";
import ShopByGender from "./ShopByGender";

export default function HeroBanner() {
  return (
    <>
      {/* HERO SLIDER */}
      <section className="hero-swiper">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={1200}
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay">
                <p className="slide-tagline">{slide.tagline}</p>
                <h1 className="slide-title">{slide.title}</h1>
                <button className="slide-btn">{slide.button}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SHOP MEN / WOMEN */}
      <ShopByGender />
    </>
  );
}
