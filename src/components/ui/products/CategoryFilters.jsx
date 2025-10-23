const CategoryFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
  bgColor = "white",
  mt = "mt-6",
}) => {
  return (
    <div
      className={`${mt} sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 font-oakes-grostek`}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium  font-oakes-grostek transition-all duration-300 ease-in-out transform rounded-full focus:outline-none
            ${
              activeCategory === category
                ? "bg-[#3D2B1F] text-white shadow-lg scale-105"
                : "${bgColor} text-gray-600 border border-gray-300 hover:bg-[#3D2B1F] hover:text-white hover:border-[#3D2B1F]"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
