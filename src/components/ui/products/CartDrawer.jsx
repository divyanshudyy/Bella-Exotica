import { useState, useEffect, useRef, useMemo } from "react";
import { formatPrice } from "../../utils/utils";
import { ArrowLeft } from "lucide-react";
import CartItemCard from "./CartItemCard";

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity }) => {
  const [isVisible, setIsVisible] = useState(false);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

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
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      // Copy ref to a variable inside effect
      const currentDrawer = drawerRef.current;
      currentDrawer.addEventListener("keydown", handleTabKeyPress);
      closeButtonRef.current?.focus();

      return () => {
        // Use the captured variable in cleanup
        currentDrawer.removeEventListener("keydown", handleTabKeyPress);
      };
    }
  }, [isVisible]);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className={`fixed inset-0 z-100 ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 transform flex flex-col ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="p-3 border-b border-gray-300 flex justify-between items-center shrink-0">
          <button
            ref={closeButtonRef}
            aria-label="Close cart"
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h2
            id="cart-drawer-title"
            className="text-base sm:text-lg font-semibold text-gray-800"
          >
            Your Cart
          </h2>
        </header>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <p className="text-gray-600 text-sm">Your cart is empty.</p>
            <button
              onClick={onClose}
              className="mt-3 text-blue-600 hover:underline font-semibold text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hide">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
            </div>

            {/* Footer */}
            <footer className="p-3 border-t border-gray-300 shrink-0 bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm sm:text-base font-semibold text-gray-800">
                  Subtotal
                </span>
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex items-stretch gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 bg-white text-gray-800 border border-gray-300 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none text-sm"
                >
                  Continue Shopping
                </button>
                <button className="flex-1 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none text-sm">
                  Proceed to Checkout
                </button>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
