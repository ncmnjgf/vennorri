import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <section className="product-carousel">
      <div className="section-header">
        <h2>New In</h2>
        <p>Upgrade your closet with everything trendy and new</p>
        <Link to="/men" className="shop-link">
          Shop New Arrivals
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
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
