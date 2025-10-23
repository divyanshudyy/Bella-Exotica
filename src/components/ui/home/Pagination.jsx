import { ChevronLeft, ChevronRight } from "lucide-react";

export const SliderPagination = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}) => {
  const formatNumber = (num) => String(num).padStart(2, "0");

  const progress =
    totalSlides > 1 ? ((currentIndex + 1) / totalSlides) * 100 : 0;

  return (
    <div className="flex items-center justify-center gap-4 text-[#4a2c2a]">
      {/* Prev Button */}
      <button
        onClick={onPrev}
        aria-label="Previous Product"
        className="p-2 rounded-full transition-colors duration-300 hover:bg-[#4a2c2a] group disabled:opacity-30 disabled:hover:bg-transparent"
        disabled={totalSlides <= 1}
      >
        <ChevronLeft className="h-6 w-6 text-[#4a2c2a] group-hover:text-[#fdfbf7] transition-colors duration-300" />
      </button>

      {/* Progress Bar */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg w-8 text-center">
          {formatNumber(currentIndex + 1)}
        </span>
        <div className="w-24 h-1 bg-gray-300/70 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4a2c2a]"
            style={{
              width: `${progress}%`,
              transition: "width 300ms ease-in-out",
            }}
          />
        </div>
        <span className="font-semibold text-lg text-gray-400 w-8 text-center">
          {formatNumber(totalSlides)}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        aria-label="Next Product"
        className="p-2 rounded-full transition-colors duration-300 hover:bg-[#4a2c2a] group disabled:opacity-30 disabled:hover:bg-transparent"
        disabled={totalSlides <= 1}
      >
        <ChevronRight className="h-6 w-6 text-[#4a2c2a] group-hover:text-[#fdfbf7] transition-colors duration-300" />
      </button>
    </div>
  );
};
