import { formatPrice } from "../../utils/utils";
import { Trash } from "lucide-react";

const CartItemCard = ({ item, onUpdateQuantity }) => {
  const stockLimit = item.product.stock;

  const handleDecrement = () => {
    onUpdateQuantity(item.product.id, item.quantity - 1);
  };

  const handleIncrement = () => {
    if (item.quantity < stockLimit) {
      onUpdateQuantity(item.product.id, item.quantity + 1);
    }
  };

  const handleRemove = () => {
    onUpdateQuantity(item.product.id, 0);
  };

  return (
    <div className="flex items-start gap-3 sm:gap-4 p-2 rounded-lg hover:bg-gray-50">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm sm:text-base text-gray-800">
          {item.product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {formatPrice(item.product.price)}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button
              onClick={handleDecrement}
              aria-label="Decrease quantity"
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md transition focus:outline-none"
            >
              -
            </button>
            <span
              className="px-3 py-1 font-medium text-sm text-black"
              aria-live="polite"
            >
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              aria-label="Increase quantity"
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={item.quantity >= stockLimit}
            >
              +
            </button>
          </div>
          <button
            onClick={handleRemove}
            aria-label="Remove item"
            className="text-gray-400 hover:text-red-500 transition-colors p-1 focus:outline-none"
          >
            <Trash />
          </button>
        </div>
        {item.quantity >= stockLimit && (
          <p className="text-red-500 text-xs mt-1">Max quantity reached</p>
        )}
      </div>
    </div>
  );
};

export default CartItemCard;
