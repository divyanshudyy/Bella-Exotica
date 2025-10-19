import { useState, useMemo } from "react";
import ProductSlider from "../../ui/home/ProductSlider";
import { CATEGORIES, PRODUCTS } from "../../../data/content";
import CategoryFilters from "../../ui/products/CategoryFilters";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="h-190 w-full flex flex-col items-center  text-[#3D2B1F] px-4 py-2 overflow-hidden">
      <div className="w-full h-full flex flex-col items-center">
        {/* Heading */}
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold font-oakes-grostek text-[#3D2B1F] mb-5 text-center ">
          Healthy Food Future Ready
        </h1>
        <p className="relative z-10 text-center text-sm sm:text-base text-gray-600 mb-8 max-w-md px-9 md:px-0">
          Discover our premium selection of natural and wholesome products,
          crafted to nourish your body and delight your senses.
        </p>

        {/* Category Filters */}
        <CategoryFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          bgColor="bg-transparent" // no white background
          mt="mt-0 md:my-0" // optional spacing
        />

        {/* Product Slider */}
        <div className="flex-grow w-full max-w-7xl mx-auto ">
          <ProductSlider products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default Products;
