const CategoryFilters = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300 ease-in-out transform rounded-full focus:outline-none
            ${
              activeCategory === category
                ? "bg-gray-800 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
