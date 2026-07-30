import route66Front from "../assets/images/FProduct2_page-0001.jpg";
import route66Back from "../assets/images/FProduct2 Back_page-0001.jpg";
import menFront from "../assets/images/men_fornt_page-0001.jpg";
import menBack from "../assets/images/Product Back (1)_page-0001.jpg";

const products = [
  {
    id: 32,
    title: "Premium Graphic Print Tee",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: menFront,
    hoverImage: menBack,
    category: "men",
    subcategory: "premium",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: true,
    description: "Premium men's tee featuring a subtle front branding and a bold graphic print on the back."
  },
  {
    id: 31,
    title: "Route 66 Texas Rangers Tee",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: route66Front,
    hoverImage: route66Back,
    category: "women",
    subcategory: "premium",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: true,
    description: "Premium white tee featuring subtle Route 66 branding at the front and a bold Texas Rangers graphic on the back."
  }
];

export default products;
