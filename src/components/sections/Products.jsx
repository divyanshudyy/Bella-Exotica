import React, { useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

const CATEGORIES = ["All", "Oats", "Nuts", "Museli"];

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-6 md:space-x-10 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`group relative text-xs md:text-sm tracking-widest font-semibold uppercase transition-colors duration-300 pb-1
            ${
              activeCategory === category
                ? "text-black border-black scale-[1.2] transition-transform ease-in-out duration-500"
                : "text-gray-400 hover:text-gray-700 border-transparent"
            }`}
        >
          {category}

          {/* Animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-500 ease-in-out
              ${
                activeCategory === category
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

const SwiperCustomStyles = () => (
  <style>{`
    /* Container padding */
    .product-swiper-container {
      width: 100%;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    /* Base slide styling */
    .mySwiper .swiper-slide {
      background: transparent;
      opacity: 0.6;
      transform: scale(0.9);
      transition: transform 0.8s ease, opacity 0.8s ease;
    }

    /* Active center slide */
    .mySwiper .swiper-slide-active {
      transform: scale(1.2) !important; /* pop out */
      opacity: 1 !important;
      z-index: 10;
    }

    /* Side slides */
    .mySwiper .swiper-slide-next,
    .mySwiper .swiper-slide-prev {
      opacity: 1;
      transform: scale(0.90);
    }

    /* Images */
    .mySwiper .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease, opacity 0.5s ease;
    }

    /* Active image scaling */
    .mySwiper .swiper-slide-active img {
      transform: scale(1.25);
      opacity: 1;
    }

    /* Side images scaling */
    .mySwiper .swiper-slide-next img,
    .mySwiper .swiper-slide-prev img {
      transform: scale(1.05);
      opacity: 0.8;
    }

    /* Navigation buttons */
    .swiper-button-next, .swiper-button-prev {
      color: #292524 !important;
      top: 50%;
      transform: translateY(-50%);
    }

    .swiper-button-next:after, .swiper-button-prev:after {
      font-size: 2rem !important;
      font-weight: bold;
    }

    /* Smooth snap effect */
    .mySwiper {
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    }
  `}</style>
);

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const swiperCssId = "swiper-css";
    if (!document.getElementById(swiperCssId)) {
      const link = document.createElement("link");
      link.id = swiperCssId;
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(link);
    }
    return () => {
      const link = document.getElementById(swiperCssId);
      if (link) {
        link.remove();
      }
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-full w-full  overflow-hidden">
      <SwiperCustomStyles />
      <div className="max-w-8xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-800 text-center capitalize">
          Healthy Food Future Ready
        </h1>
        {/* <p className="mt-4 text-gray-600 text-lg text-center">
          Premium Organic Oats, Museli & Nuts
        </p> */}
        <div className="mt-10 text-center">
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <div className="product-swiper-container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 25, // side tilt
              stretch: -120,
              depth: 200, // less depth so sides are bigger
              modifier: 1.2, // intensity of effect
              slideShadows: false,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper h-130 overflow-visible"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide
                key={product.id}
                className="flex flex-col items-center justify-center pb-7 transition-transform duration-500 overflow-visible"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[180px]  sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] object-cover md:object-cover transition-transform duration-500 overflow-visible"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-0 sm:mt-0 md:mt-8">
          <button className="px-8 py-3 sm:px-10 sm:py-4 border rounded-xl border-stone-800 text-stone-800 tracking-widest text-sm font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300">
            EXPLORE ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans ">
      <ProductSection />
    </div>
  );
}

const PRODUCTS = [
  {
    id: 1,
    name: "Golden Museli",
    category: "Oats",
    imageUrl: "/images/products/muesli2.png",
  },
  {
    id: 2,
    name: "Ancient Grain Granola",
    category: "Museli",
    imageUrl: "/images/products/granola2.png",
  },
  {
    id: 3,
    name: "Roasted Almond Mix",
    category: "Nuts",
    imageUrl: "/images/products/alm1.png",
  },
  {
    id: 4,
    name: "Crispy Corn Flakes",
    category: "Nuts",
    imageUrl: "/images/products/alm1.png",
  },
  {
    id: 5,
    name: "Honey & Nut Granola",
    category: "Museli",
    imageUrl: "/images/products/granola2.png",
  },
  {
    id: 6,
    name: "Walnut & Pecan Blend",
    category: "Nuts",
    imageUrl: "/images/products/alm1.png",
  },
];
