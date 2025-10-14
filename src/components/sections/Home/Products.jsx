import React, { useState, useMemo } from "react";
import ProductSlider from "../../ui/ProductSlider";
import { CATEGORIES, PRODUCTS } from "../../../data/content";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    return activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  // Reorder categories to place "ALL" in the middle
  const reorderedCategories = useMemo(() => {
    const allIndex = CATEGORIES.indexOf("ALL");
    if (allIndex === -1) return CATEGORIES;
    const cats = [...CATEGORIES];
    const [all] = cats.splice(allIndex, 1);
    const middleIndex = Math.floor(cats.length / 2);
    cats.splice(middleIndex, 0, all);
    return cats;
  }, []);

  return (
    <section className="h-190 w-full flex flex-col items-center font-sans text-[#3D2B1F] px-4 py-2 overflow-hidden">
      <div className="w-full h-full flex flex-col items-center">
        {/* Heading */}
        <h1
          className="relative z-10 text-4xl md:text-5xl font-bold font-oakes-grostek text-[#3D2B1F] mb-5 text-center animate-fadeInUp "
          style={{ animationDelay: "100ms" }}
        >
          Healthy Food Future Ready
        </h1>
        <p
          className="relative z-10 text-center text-sm sm:text-base text-[#3D2B1F] mb-8 max-w-md animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          Discover our premium selection of natural and wholesome products,
          crafted to nourish your body and delight your senses.
        </p>

        {/* Category Filters */}
        <nav
          className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-2 animate-fadeInUp"
          style={{ animationDelay: "300ms" }}
        >
          {reorderedCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base font-medium tracking-wider  uppercase transition-all duration-300 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "text-white bg-[#3D2B1F] shadow-md"
                  : "text-gray-500 hover:text-white hover:bg-[#3D2B1F]"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Product Slider */}
        <div
          className="flex-grow w-full max-w-7xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "400ms" }}
        >
          <ProductSlider products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default Products;
