import { useState, useEffect, useCallback, useRef } from "react";
import { ProductCard } from "./ProductCard";
import { SliderPagination } from "./Pagination";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const DRAG_THRESHOLD = 50;
  const autoplayIntervalRef = useRef(null);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (products.length <= 1) return;
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }, [products.length]);

  const prevSlide = useCallback(() => {
    if (products.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  }, [products.length]);

  useEffect(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (products.length > 1) {
      autoplayIntervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(autoplayIntervalRef.current);
  }, [nextSlide, products.length]);

  useEffect(() => {
    if (products.length > 0 && currentIndex >= products.length) {
      setCurrentIndex(0);
    }
  }, [products, currentIndex]);

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartPos(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const offset = clientX - startPos;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > DRAG_THRESHOLD) {
      if (dragOffset < 0) nextSlide();
      else prevSlide();
    }

    setDragOffset(0);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };
  const onMouseMove = (e) => {
    if (isDragging) e.preventDefault();
    handleDragMove(e.clientX);
  };
  const onMouseUpOrLeave = () => {
    if (isDragging) handleDragEnd();
  };
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX);

  if (!products || products.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        No products in this category.
      </div>
    );
  }

  const showNavigation = products.length > 1;

  const dragHandlers = {
    onMouseDown,
    onMouseMove,
    onMouseUp: onMouseUpOrLeave,
    onMouseLeave: onMouseUpOrLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd: handleDragEnd,
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Mobile 2D Slider */}
      <div
        ref={sliderRef}
        className="w-full flex-grow overflow-hidden md:hidden"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        {...dragHandlers}
      >
        <div
          className="h-full flex"
          style={{
            width: `${products.length * 100}%`,
            transform: `translateX(calc(-${
              currentIndex * (100 / products.length)
            }% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 500ms ease-out",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full h-full"
              style={{ width: `${100 / products.length}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop 3D Slider */}
      <div
        className="w-full hidden flex-grow md:flex items-center justify-center perspective-1000"
        style={{
          transformStyle: "preserve-3d",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        {...dragHandlers}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {products.map((product, index) => {
            const N = products.length;
            let offset = index - currentIndex;
            if (N > 1) {
              if (offset > N / 2) offset -= N;
              else if (offset < -N / 2) offset += N;
            }
            const absOffset = Math.abs(offset);

            const centerScale = 1.05,
              sideScale = 0.75;
            const centerZ = 0,
              sideZ = -500;
            const centerBlur = 0,
              sideBlur = 1;
            const xTranslateFactor = 40;

            let transform = "",
              opacity = 0,
              filter = "blur(0px)";
            if (absOffset < 2) {
              const factor = Math.max(0, 1 - absOffset);
              const scale = sideScale + (centerScale - sideScale) * factor;
              const translateZ = sideZ + (centerZ - sideZ) * factor;
              const blur = sideBlur + (centerBlur - sideBlur) * factor;
              opacity = Math.max(0, 1 - absOffset / 4);
              filter = `blur(${blur}px)`;
              const baseTransform = `translateX(${
                offset * xTranslateFactor
              }%) translateZ(${translateZ}px) scale(${scale})`;
              transform = isDragging
                ? `${baseTransform} translateX(${dragOffset}px)`
                : baseTransform;
            } else {
              transform = `translateX(${
                Math.sign(offset) * xTranslateFactor * 2
              }%) scale(${sideScale})`;
            }

            return (
              <div
                key={`${product.id}-${index}`}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transition: isDragging
                    ? "none"
                    : "transform 500ms ease-out, opacity 500ms ease-out, filter 500ms ease-out",
                  pointerEvents: absOffset > 1 ? "none" : "auto",
                  transform,
                  opacity,
                  filter,
                  zIndex: Math.round(10 - absOffset),
                }}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>

      {showNavigation && (
        <div className="mt-2 flex-shrink-0">
          <SliderPagination
            currentIndex={currentIndex}
            totalSlides={products.length}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
