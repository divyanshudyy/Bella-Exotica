import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onQuickView }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
