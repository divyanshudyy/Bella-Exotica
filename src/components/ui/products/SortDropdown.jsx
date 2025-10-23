import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const SORT_OPTIONS = {
  default: "Relevance",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "alpha-asc": "Alphabetical (A-Z)",
};

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (order) => {
    setSortOrder(order);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full md:w-auto lg:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-full px-4 py-2 text-[#3D2B1F] hover:border-gray-400 focus:outline-none transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-sm text-[#3D2B1F]">
          <span className="text-gray-500 mr-1.5">Sort by:</span>
          <span className="font-medium text-[#3D2B1F]">
            {SORT_OPTIONS[sortOrder]}
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute z-10 top-full mt-2 w-full md:w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden origin-top transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="listbox"
      >
        {Object.entries(SORT_OPTIONS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between text-[#3D2B1F] hover:bg-gray-100 focus:outline-none`}
            role="option"
            aria-selected={sortOrder === key}
          >
            <span
              className={
                sortOrder === key ? "font-semibold text-[#3D2B1F]" : ""
              }
            >
              {value}
            </span>
            {sortOrder === key && <Check />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
