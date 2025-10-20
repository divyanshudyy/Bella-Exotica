import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link to="/products">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain drop-shadow-2xl select-none pointer-events-none"
          />
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-4/5 max-w-xs p-4 text-center">
            <p className="text-xs tracking-wider text-gray-500 uppercase font-medium drop-shadow-sm">
              {product.category}
            </p>
            <h3 className="text-lg md:text-xl font-bold tracking-wider uppercase mt-1 drop-shadow-md">
              {product.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
