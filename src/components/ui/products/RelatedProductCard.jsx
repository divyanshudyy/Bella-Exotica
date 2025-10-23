import { formatPrice } from "../../utils/utils";

const RelatedProductCard = ({ product, onSelectProduct }) => {
  return (
    <div
      className="flex-shrink-0 w-40 sm:w-48 group cursor-pointer"
      onClick={() => onSelectProduct(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onSelectProduct(product)
      }
      aria-label={`View details for ${product.name}`}
    >
      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
        {product.name}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 font-bold">
        {formatPrice(product.price)}
      </p>
    </div>
  );
};

export default RelatedProductCard;
