import { useState, useEffect, useRef } from "react";
import { formatPrice } from "../../utils/utils";

const ProductCard = ({ product, onQuickView, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) observer.observe(currentCardRef);

    return () => {
      if (currentCardRef) observer.unobserve(currentCardRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 group cursor-pointer transform hover:scale-103 focus:outline-none transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => onQuickView(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onQuickView(product)
      }
      aria-label={`View details for ${product.name}`}
      aria-haspopup="dialog"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {product.stock === 0 ? (
          <div className="absolute top-2 right-2 bg-gray-500 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
            Out of Stock
          </div>
        ) : product.originalPrice ? (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
            Sale
          </div>
        ) : null}
      </div>
      <div className="p-2.5 sm:p-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xs sm:text-lg font-semibold text-[#3D2b1F] mb-0.5">
            {product.name}
          </h3>
          <div className="flex-shrink-0 pl-1">
            {product.originalPrice ? (
              <div className="flex items-baseline justify-end gap-1">
                <p className="text-gray-900 font-bold text-xs sm:text-lg">
                  {formatPrice(product.price)}
                </p>
                <p className="text-gray-600 text-[15px] font-semibold line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              </div>
            ) : (
              <p className="text-gray-800 font-bold text-xs sm:text-lg text-right">
                {formatPrice(product.price)}
              </p>
            )}
          </div>
        </div>
        <p className="text-[9px] sm:text-sm font-medium text-gray-500 mb-1 capitalize">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
