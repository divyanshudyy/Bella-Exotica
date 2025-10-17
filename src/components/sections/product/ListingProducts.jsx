import { useState, useRef, useEffect, useMemo } from "react";
import CategoryFilters from "../../ui/products/CategoryFilters";
import ProductGrid from "../../ui/products/ProductGrid";
import ProductDrawer from "../../ui/products/ProductDrawer";
import CartDrawer from "../../ui/products/CartDrawer";
import SortDropdown from "../../ui/products/SortDropdown";
import { PRODUCTS, CATEGORIES } from "../../../data/constants";
import { ShoppingCart, Search, X } from "lucide-react";

const ListingProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState(""); // For immediate input
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // For filtering
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const lastFocusedElementRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const displayedProducts = useMemo(() => {
    let productsToFilter = [...PRODUCTS];

    // 1. Filter by category
    if (activeCategory !== "All") {
      productsToFilter = productsToFilter.filter(
        (product) => product.category === activeCategory
      );
    }

    // 2. Filter by search query (with scoring for relevance)
    if (debouncedSearchQuery.trim()) {
      const searchKeywords = debouncedSearchQuery
        .toLowerCase()
        .split(" ")
        .filter((kw) => kw.length > 0);

      const scoredProducts = productsToFilter
        .map((product) => {
          let score = 0;
          const productName = product.name.toLowerCase();
          const productCategory = product.category.toLowerCase();
          const productDescription = product.description.toLowerCase();

          let matchesAllKeywords = true;

          searchKeywords.forEach((keyword) => {
            let keywordFound = false;
            if (productName.includes(keyword)) {
              score += 10; // Higher weight for name match
              keywordFound = true;
            }
            if (productCategory.includes(keyword)) {
              score += 5; // Medium weight for category match
              keywordFound = true;
            }
            if (productDescription.includes(keyword)) {
              score += 2; // Lower weight for description match
              keywordFound = true;
            }
            if (!keywordFound) {
              matchesAllKeywords = false;
            }
          });

          // Product must match all keywords to be included
          if (!matchesAllKeywords) {
            score = 0;
          }

          return { ...product, score };
        })
        .filter((p) => p.score > 0);

      // If the user is searching and hasn't selected a specific sort order,
      // we sort by relevance (score).
      if (sortOrder === "default") {
        scoredProducts.sort((a, b) => b.score - a.score);
      }

      productsToFilter = scoredProducts;
    }

    // 3. Apply explicit sorting
    const sorted = [...productsToFilter];
    switch (sortOrder) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "alpha-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      // 'default' case is handled by relevance scoring if a search is active
      default:
        break;
    }

    return sorted;
  }, [activeCategory, debouncedSearchQuery, sortOrder]);

  const handleQuickView = (product) => {
    lastFocusedElementRef.current = document.activeElement;
    setSelectedProduct(product);
  };

  const handleCloseProductDrawer = () => {
    setSelectedProduct(null);
  };

  const handleOpenCart = () => {
    lastFocusedElementRef.current = document.activeElement;
    setIsCartOpen(true);
  };
  const handleCloseCart = () => setIsCartOpen(false);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      const quantityInCart = existingItem ? existingItem.quantity : 0;
      const newTotalQuantity = quantityInCart + quantity;

      // Do not add more than what's in stock
      const finalQuantity = Math.min(newTotalQuantity, product.stock);

      if (existingItem) {
        // Update quantity if it has changed
        if (finalQuantity > quantityInCart) {
          return prevItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: finalQuantity }
              : item
          );
        }
        return prevItems; // No change if quantity limit is already reached
      }
      return [...prevItems, { product, quantity: finalQuantity }];
    });
    setSelectedProduct(null); // Close product drawer
    setIsCartOpen(true); // Open cart drawer
  };

  const handleUpdateCartQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.product.id !== productId);
      }
      return prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  useEffect(() => {
    if (!selectedProduct && !isCartOpen) {
      // Delay focus return to allow drawer closing animation to complete
      setTimeout(() => {
        lastFocusedElementRef.current?.focus();
      }, 100);
    }
  }, [selectedProduct, isCartOpen]);

  const cartItemCount = cartItems.length;

  return (
    <div className="min-h-screen bg-white shadow-md font-oakes-grostek rounded-2xl">
      <ProductDrawer
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseProductDrawer}
        onSelectRelatedProduct={handleQuickView}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />
      {/* <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
      /> */}

      <header
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6 transition-all duration-1000 ease-out ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#3D2B1F] text-center font-oakes-grotesk ">
          Our Collection
        </h1>
        <CategoryFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </header>

      <main
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 transition-all duration-1000 ease-out ${
          isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {/* --- Controls Bar --- */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 my-2 sm:mb-8">
          {/* Sort Dropdown */}
          <div className="w-full md:col-span-1">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:col-span-3 order-2 md:order-none">
            <div className="relative w-full transition-transform duration-300 ease-out focus-within:scale-102">
              {/* Left icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search />
              </div>

              {/* Input */}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-10 py-2 border border-[#3D2B1F]/20 rounded-full hover:border-[#3D2B1F]/50  bg-white text-[#3D2B1F] focus:outline-[#3D2B1F]/60 focus:ring-0 transition-colors duration-300 ease-out"
              />

              {/* Clear button */}
              {searchTerm && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    onClick={() => setSearchTerm("")}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300 ease-out"
                    aria-label="Clear search"
                  >
                    <X />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Optional Cart Button */}
          {/* <div className="justify-self-end">
    <button
      onClick={handleOpenCart}
      className="relative p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
      aria-label={`Open cart with ${cartItemCount} items`}
    >
      <ShoppingCart className="text-gray-700" />
      {cartItemCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center pointer-events-none">
          {cartItemCount}
        </span>
      )}
    </button>
  </div> */}
        </div>

        <ProductGrid
          products={displayedProducts}
          onQuickView={handleQuickView}
        />
      </main>
    </div>
  );
};

export default ListingProducts;
