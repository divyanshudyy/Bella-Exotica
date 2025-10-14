import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// --- StarRating Component (Internal) ---
const StarIcon = ({ filled }) => (
  <Star
    fill="#FBCC1E"
    strokeWidth={1}
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
  />
);

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon key={index} filled={index < Math.round(rating)} />
      ))}
    </div>
  );
};

// --- ReviewCard Component (Internal) ---
const ReviewCard = ({ review, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6  flex flex-col justify-between h-[360px] w-80 transition-opacity duration-300 shadow-md ${
        !isActive ? "opacity-80" : ""
      }`}
    >
      <div>
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase ">
          {review.category}
        </p>
        <p className="mt-4 text-lg sm:text-[1.1rem] text-gray-800 leading-snug font-medium ">
          {review.text}
        </p>
      </div>
      <div className="mt-6 relative pt-6 border-t border-gray-100">
        <div className="absolute -top-0 right-0 text-[8rem] sm:text-[10rem] font-bold text-gray-300  select-none z-0">
          <Quote />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={review.rating} />
            <span className="font-bold text-gray-700 text-lg">
              {review.rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={review.author.avatarUrl}
              alt={review.author.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-gray-800 leading-tight">
                {review.author.name}
              </p>
              <p className="text-sm text-gray-500 leading-tight">
                {review.author.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ReviewSlider Component (Exported) ---
const Review = ({ reviews }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const totalReviews = reviews.length;
  const overallRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  return (
    <>
      <section className="text-center max-w-5xl mx-auto  h-full">
        <h1 className="text-4xl md:text-5xl font-bold font-oakes-grostek text-[#3D2b1F] leading-snug">
          Read reviews,
        </h1>
        <h2 className="text-4xl md:text-5xl font-oakes-grostek font-bold text-[#3D2b1F] tracking-tight leading-snug">
          choose with confidence.
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-600 text-base sm:text-xl">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-slate-600">
              {overallRating.toFixed(1)}/5
            </span>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-2xl sm:text-2xl font-bold text-[#3D2b1F]">
            Bella Exotica
          </span>
          <span className="w-full sm:w-auto text-base">
            Based on {totalReviews} reviews
          </span>
        </div>
      </section>

      <div className="w-full mt-4 sm:mt-8 px-8 sm:px-12 lg:px-25">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!py-12"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              {({ isActive }) => (
                <div
                  className={`transition-transform duration-500 ease-in-out ${
                    isActive ? "scale-110" : "scale-90"
                  }`}
                >
                  <ReviewCard review={review} isActive={isActive} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 ">
        <button
          onClick={handlePrev}
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-3 text-md font-medium">
          <span className="font-bold text-slate-800">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-24 sm:w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-1 bg-slate-800 rounded-full transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / totalReviews) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-400">
            {String(totalReviews).padStart(2, "0")}
          </span>
        </div>
        <button
          onClick={handleNext}
          className="p-2 text-slate-600 hover:text-[#3D2B1F] transition-colors"
          aria-label="Next review"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default Review;
