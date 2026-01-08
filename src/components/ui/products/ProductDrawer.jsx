import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowLeft, Share, ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "../../utils/utils";
import AccordionItem from "./AccordionItem";
import RelatedProductCard from "./RelatedProductCard";
import ReviewCard from "./ReviewCard";
import { PRODUCTS, PRODUCT_DRAWER } from "../../../data/productsData";

const ProductDrawer = ({
  product,
  isOpen,
  onClose,
  onSelectRelatedProduct,
  onAddToCart,
  cartItems,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Review Form State
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewHoverRating, setReviewHoverRating] = useState(0);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewComment, setReviewComment] = useState("");

  useEffect(() => {
    if (isOpen && product) {
      setActiveProduct(product);
      setQuantity(1);
      setReviewRating(0);
      setReviewHoverRating(0);
      setReviewAuthor("");
      setReviewComment("");
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, product]);

  const handleTransitionEnd = () => {
    if (!isVisible) setActiveProduct(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isVisible) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, onClose]);

  useEffect(() => {
    if (isVisible && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      const currentDrawer = drawerRef.current;
      currentDrawer.addEventListener("keydown", handleTabKeyPress);
      closeButtonRef.current?.focus();
      return () =>
        currentDrawer?.removeEventListener("keydown", handleTabKeyPress);
    }
  }, [isVisible]);

  const relatedProducts = useMemo(() => {
    if (!activeProduct) return [];
    return PRODUCTS.filter(
      (p) => p.category === activeProduct.category && p.id !== activeProduct.id
    ).slice(0, 4);
  }, [activeProduct]);

  const { averageRating, totalReviews } = useMemo(() => {
    if (
      !activeProduct ||
      !activeProduct.reviews ||
      activeProduct.reviews.length === 0
    ) {
      return { averageRating: 0, totalReviews: 0 };
    }
    const totalRating = activeProduct.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return {
      averageRating: totalRating / activeProduct.reviews.length,
      totalReviews: activeProduct.reviews.length,
    };
  }, [activeProduct]);

  const { stockLimit, maxPurchasable, isAddToCartDisabled } = useMemo(() => {
    if (!activeProduct)
      return { stockLimit: 0, maxPurchasable: 0, isAddToCartDisabled: true };
    const stock = activeProduct.stock;
    const existingCartItem = cartItems.find(
      (item) => item.product.id === activeProduct.id
    );
    const quantityInCart = existingCartItem ? existingCartItem.quantity : 0;
    return {
      stockLimit: stock,
      maxPurchasable: stock - quantityInCart,
      isAddToCartDisabled: stock - quantityInCart <= 0,
    };
  }, [activeProduct, cartItems]);

  const handleIncrement = () =>
    setQuantity((prev) => (prev < maxPurchasable ? prev + 1 : prev));
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewRating > 0 && reviewAuthor && reviewComment) {
      const newReview = {
        rating: reviewRating,
        author: reviewAuthor,
        comment: reviewComment,
        date: new Date().toISOString().split("T")[0],
      };
      console.log("New review submitted:", newReview);
      setReviewRating(0);
      setReviewAuthor("");
      setReviewComment("");
    }
  };

  if (!activeProduct) return null;

  const isSoldOut = activeProduct.stock === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-drawer-title"
      className="fixed inset-0 z-50"
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
        onTransitionEnd={handleTransitionEnd}
      ></div>
      <div
        ref={drawerRef}
        className={`fixed bottom-0 inset-x-2 sm:inset-x-2 md:inset-x-40 
    h-[75vh] sm:h-[85vh] 
    bg-white rounded-t-xl shadow-2xl transition-all duration-300 ease-out transform flex flex-col origin-bottom ${
      isVisible ? "translate-y-0 scale-100" : "translate-y-full scale-97"
    }`}
      >
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 md:p-6 no-scrollbar">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-3.5 sm:mb-6">
              <button
                ref={closeButtonRef}
                aria-label="Close"
                onClick={onClose}
                className="text-gray-500 hover:text-[#3D2B1F] transition-colors p-1.5 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Share product"
                onClick={() =>
                  console.log("Sharing product:", activeProduct?.name)
                }
                className="text-gray-500 hover:text-[#3D2B1F] transition-colors p-1.5 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <Share className="w-5 h-5" />
              </button>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start">
              <div className="max-w-xs mx-auto md:max-w-full aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                <img
                  src={activeProduct.imageUrl}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover"
                />
                {isSoldOut && (
                  <div className="absolute top-2 right-2 bg-gray-500 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                    {PRODUCT_DRAWER.labels.outOfStock}
                  </div>
                )}
                {!isSoldOut && activeProduct.originalPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
                    {PRODUCT_DRAWER.labels.sale}
                  </div>
                )}
              </div>

              <div>
                <h2
                  id="product-drawer-title"
                  className="text-xl sm:text-2xl font-bold text-[#3D2B1F] "
                >
                  {activeProduct.name}
                </h2>
                <span className="block mt-1.5 text-xs sm:text-sm font-medium text-[#3D2B1F]/60 uppercase tracking-wider">
                  {activeProduct.category}
                </span>

                {totalReviews > 0 && (
                  <div className="flex items-center mt-2.5 gap-1">
                    <span className="font-bold text-black/70 text-sm">
                      {averageRating.toFixed(1)} / 5.0
                    </span>
                    <Star className="w-5 h-5 text-yellow-400" fill="#FBCC1E" />
                    <a
                      href="#reviews-section"
                      className="text-gray-500 text-sm ml-1 hover:underline"
                    >
                      ({totalReviews} Reviews)
                    </a>
                  </div>
                )}

                <div className="mt-3 sm:mt-5">
                  {activeProduct.originalPrice ? (
                    <div className="flex items-baseline gap-2.5">
                      <p className="text-lg sm:text-xl text-gray-800 font-bold">
                        {formatPrice(activeProduct.price)}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400 line-through">
                        {formatPrice(activeProduct.originalPrice)}
                      </p>
                      <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-md">
                        {PRODUCT_DRAWER.labels.sale}
                      </span>
                    </div>
                  ) : (
                    <p className="text-lg sm:text-xl text-gray-800 font-bold">
                      {formatPrice(activeProduct.price)}
                    </p>
                  )}
                </div>

                <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-800 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Accordions */}
                <div className="mt-5 sm:mt-3 pt-5 sm:pt-7 border-t border-gray-200 space-y-5">
                  {activeProduct.ingredients && (
                    <AccordionItem title="Ingredients">
                      <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 pl-2">
                        {activeProduct.ingredients.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </AccordionItem>
                  )}
                  {activeProduct.nutritionalInfo && (
                    <AccordionItem title="Nutritional Information">
                      <p className="text-gray-600 text-sm">
                        {activeProduct.nutritionalInfo}
                      </p>
                    </AccordionItem>
                  )}
                  {activeProduct.usageInstructions && (
                    <AccordionItem title="Usage Instructions">
                      <p className="text-gray-600 text-sm">
                        {activeProduct.usageInstructions}
                      </p>
                    </AccordionItem>
                  )}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div
              id="reviews-section"
              className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-gray-200"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#3D2B1F] mb-3.5">
                {PRODUCT_DRAWER.labels.reviewsSection}
              </h3>
              {totalReviews > 0 ? (
                <div>
                  <div className="flex items-center gap-3.5 mb-5 p-3">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-gray-800">
                        {averageRating.toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-500">out of 5</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            fill="#FBCC1E"
                            className={`w-5.5 h-5.5 ${
                              i < Math.round(averageRating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {PRODUCT_DRAWER.labels.basedOnReviews}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {activeProduct.reviews?.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  {PRODUCT_DRAWER.labels.noReviews}
                </p>
              )}
            </div>

            {/* Write Review Section */}
            {/* <div className="mt-6 pt-5 sm:mt-8 sm:pt-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3.5">
                {PRODUCT_DRAWER.labels.writeReview}
              </h3>
              <div className="bg-gray-50 p-5 rounded-md border border-gray-300">
                <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                     {PRODUCT_DRAWER.labels.yourRating}}
                    </label>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                          <button
                            type="button"
                            key={ratingValue}
                            onClick={() => setReviewRating(ratingValue)}
                            onMouseEnter={() =>
                              setReviewHoverRating(ratingValue)
                            }
                            onMouseLeave={() => setReviewHoverRating(0)}
                            className="focus:outline-none"
                            aria-label={`Rate ${ratingValue} stars`}
                          >
                            <Star
                              className={`w-7 h-7 cursor-pointer transition-colors ${
                                ratingValue <=
                                (reviewHoverRating || reviewRating)
                                  ? "text-yellow-400"
                                  : "text-gray-300 hover:text-yellow-300"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="reviewAuthor"
                      className="block text-sm font-medium text-gray-700"
                    >
                    {PRODUCT_DRAWER.labels.yourName}}
                    </label>
                    <input
                      type="text"
                      id="reviewAuthor"
                      value={reviewAuthor}
                      onChange={(e) => setReviewAuthor(e.target.value)}
                      required
                      placeholder={PRODUCT_DRAWER.placeholders.name}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reviewComment"
                      className="block text-sm font-medium text-gray-700"
                    >
                    {PRODUCT_DRAWER.labels.yourReview}
                    </label>
                    <textarea
                      id="reviewComment"
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      required
                      rows={3}
                      placeholder={PRODUCT_DRAWER.placeholders.review}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-2.5 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 text-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-3.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#3D2B1F]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                  {PRODUCT_DRAWER.buttons.submitReview}}
                  </button>
                </form>
              </div>
            </div> */}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-0-pt-0 sm:mt-5 sm:pt-0">
                <h3 className="text-sm sm:text-lg font-semibold text-[#3D2B1F] mb-3.5">
                  {PRODUCT_DRAWER.labels.relatedProducts}
                </h3>
                <div className="flex overflow-x-auto space-x-3.5 pb-3 no-scrollbar">
                  {relatedProducts.map((relatedProduct) => (
                    <RelatedProductCard
                      key={relatedProduct.id}
                      product={relatedProduct}
                      onSelectProduct={onSelectRelatedProduct}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="p-3 m-2 border border-gray-300 rounded-xl bg-gray-100 z-10">
          <div className="max-w-5xl mx-auto flex items-center justify-between ">
            {/* <div className="flex-shrink-0">
              <div className="flex items-center border border-gray-300 rounded-md justify-center">
                <button
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  className="px-2.5 py-1.5 text-base text-gray-600 hover:bg-gray-100 rounded-l-md transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSoldOut}
                >
                  -
                </button>
                <span
                  className="px-2.5 py-1.5 font-semibold w-10 text-center text-black"
                  aria-live="polite"
                >
                  {isSoldOut ? 0 : quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                  className="px-2.5 py-1.5 text-base text-gray-600 hover:bg-gray-100 rounded-r-md transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity >= maxPurchasable || isSoldOut}
                >
                  +
                </button>
              </div>
              {!isAddToCartDisabled && quantity >= maxPurchasable && (
                <p className="text-red-500 text-xs mt-1 text-center">
                  Only {stockLimit} available.
                </p>
              )}
            </div> */}

            <div className="flex gap-3 w-full">
              <button
                onClick={() => onAddToCart(activeProduct, quantity)}
                className="flex-1 bg-[#3D2B1F] text-white font-semibold py-2.5 px-3.5 rounded-md flex items-center justify-center gap-1.5 transition-all duration-300 hover:bg-[#2e1f17] active:scale-95 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed font-hanken-grotesk"
                disabled={isAddToCartDisabled}
              >
                <span className="text-white">
                  {PRODUCT_DRAWER.buttons.visitAmazon}
                </span>
              </button>
              <button
                className="flex-1 bg-white text-[#3D2F1F] border border-gray-300 font-semibold py-2.5 px-3.5 rounded-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 focus:outline-none disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed font-hanken-grotesk"
                disabled={isAddToCartDisabled}
              >
                <span>{PRODUCT_DRAWER.buttons.visitFlipkart}</span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductDrawer;
