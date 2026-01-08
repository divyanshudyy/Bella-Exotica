import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "../../ui/home/ReviewCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TESTIMONIALS, TESTIMONIAL_SECTION } from "../../../data/homeData";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = TESTIMONIALS.reviews; // use the testimonial reviews
  const data = TESTIMONIAL_SECTION;

  if (!reviews || !reviews.length) return null;

  const totalReviews = reviews.length;
  const overallRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <>
      <section className="text-center max-w-5xl mx-auto h-full">
        <h1 className="text-3xl md:text-5xl font-bold font-hanken-grostek text-[#3D2b1F] leading-snug">
          {data.headingTop}
        </h1>
        <h2 className="text-3xl md:text-5xl font-hanken-grostek font-bold text-[#3D2b1F] tracking-tight leading-snug">
          {data.headingBottom}
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-600 text-base sm:text-xl">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-slate-600">
              {overallRating.toFixed(1)}
              {data.ratingSuffix}
            </span>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-2xl sm:text-2xl font-bold text-[#3D2b1F]">
            {data.brandName}
          </span>
          <span className="w-full sm:w-auto text-base">
            {data.progressLabel.replace("{total}", totalReviews)}
          </span>
        </div>
      </section>

      <div className="relative w-full mt-4 sm:mt-8 px-0 sm:px-12 lg:px-[100px]">
        {/* Swiper wrapper with padding to allow fade to show */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f2f2f2] to-transparent pointer-events-none z-20" />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f2f2f2] to-transparent pointer-events-none z-20" />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            speed={800}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!py-12"
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 24 },
              375: { slidesPerView: 1.2, spaceBetween: 26 },
              400: { slidesPerView: 1.3, spaceBetween: 26 },
              480: { slidesPerView: 2, spaceBetween: 28 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 34 },
              1024: { slidesPerView: 2.3, spaceBetween: 38 },
              1280: { slidesPerView: 3.3, spaceBetween: 42 },
              1536: { slidesPerView: 4, spaceBetween: 48 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                {({ isActive }) => (
                  <ReviewCard review={review} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 mb-15">
        <button
          onClick={handlePrev}
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={data.prevLabel}
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
          aria-label={data.nextLabel}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default Testimonials;
