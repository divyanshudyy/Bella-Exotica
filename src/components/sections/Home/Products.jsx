import { useState, useMemo } from "react";
import ProductSlider from "../../ui/home/ProductSlider";
import CategoryFilters from "../../ui/products/CategoryFilters";
import { EX_PRODUCTS, EX_PRODUCTS_SECTION } from "../../../data/homeData";
import { CATEGORIES } from "../../../data/globalConstants";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? EX_PRODUCTS
      : EX_PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="h-190 w-full flex flex-col items-center text-[#3D2B1F] px-4 py-2 overflow-hidden">
      <div className="w-full h-full flex flex-col items-center">
        {/* Heading */}
        <h1 className="relative z-10 text-3xl md:text-[3.3rem] font-bold font-hanken-grotesk text-[#3D2B1F] mb-5 text-center">
          {EX_PRODUCTS_SECTION.heading}
        </h1>
        <p className="relative z-10 text-center text-sm sm:text-base text-gray-600 mb-8 max-w-md px-9 md:px-0">
          {EX_PRODUCTS_SECTION.paragraph}
        </p>

        {/* Category Filters */}
        <CategoryFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          bgColor="bg-transparent"
          mt="mt-0 md:my-0"
        />

        {/* Product Slider */}
        <div className="flex-grow w-full max-w-7xl mx-auto">
          <ProductSlider
            products={filteredProducts.map((product) => ({
              ...product,
              image: product.imageUrl,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
