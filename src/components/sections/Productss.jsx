import React, { useState, useMemo } from "react";
import ProductSlider from "../ui/ProductSlider";
import { CATEGORIES, PRODUCTS } from "../../data/content";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "ALL") {
      return PRODUCTS;
    }
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

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
    <section className="h-190 w-full flex flex-col items-center font-sans text-[#4a2c2a] px-4 py-2 overflow-hidden">
      <div className="w-full h-full flex flex-col items-center">
        <h1
          className="relative z-10 text-4xl sm:text-4xl md:text-5xl font-bold mb-5 text-center animate-fadeInUp"
          style={{ animationDelay: "100ms" }}
        >
          Healthy Food Future Ready
        </h1>
        <p
          className="relative z-10 text-center text-sm sm:text-base text-gray-500 mb-8 max-w-md animate-fadeInUp"
          style={{ animationDelay: "200ms" }}
        >
          Discover our premium selection of natural and wholesome products,
          crafted to nourish your body and delight your senses.
        </p>

        <nav
          className="relative z-10 flex items-center space-x-2 md:space-x-4 mb-2 animate-fadeInUp"
          style={{ animationDelay: "300ms" }}
        >
          {reorderedCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base font-medium tracking-wider uppercase transition-all duration-300 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-white text-[#4a2c2a] shadow-md"
                  : "text-gray-500 hover:bg-[#4a2c2a] hover:text-[#fdfbf7]"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        <div
          className="flex-grow w-full max-w-7xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "400ms" }}
        >
          <ProductSlider products={filteredProducts} />
        </div>

        <button
          className="relative z-10 mt-2 px-10 py-3 bg-white rounded-full text-[#4a2c2a] font-semibold tracking-wider hover:shadow-lg transition-all duration-300 shadow-md animate-fadeInUp hover:bg-[#4a2c2a] hover:text-[#fdfbf7]"
          style={{ animationDelay: "500ms" }}
        >
          EXPLORE ALL PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default Products;
