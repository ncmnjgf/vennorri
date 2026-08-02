import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const { products: newProducts, loading } = useProducts({ isNewArrival: true });

  if (loading) return <div className="product-carousel">Loading new arrivals...</div>;

  return (
    <section className="product-carousel">
      <div className="section-header">
        <div className="section-title-group">
          <h2>New In</h2>
          <p>Upgrade your closet with everything trendy and new</p>
        </div>
        <div className="header-actions">
          <Link to="/men" className="shop-link">
            Shop New Arrivals
          </Link>
          <div className="carousel-nav">
            <button className="carousel-prev-new" aria-label="Previous slide">
              <FiChevronLeft size={20} />
            </button>
            <button className="carousel-next-new" aria-label="Next slide">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".carousel-prev-new",
          nextEl: ".carousel-next-new",
        }}
        spaceBetween={16}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1400: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {newProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
