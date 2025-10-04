import { useState, useEffect, useRef } from "react";
import { TIMELINE_DATA } from "../../../data/constants";

const TextComponent = ({
  step,
  title,
  description,
  isTextLeft,
  isVisible,
  index,
}) => (
  <div
    className={`p-4 h-full flex items-center transition-opacity duration-500 ease-out ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    <div
      className={`max-w-md flex flex-col items-center text-center ${
        isTextLeft
          ? "md:items-end md:text-right"
          : "md:items-start md:text-left"
      }`}
    >
      <p className="font-serif italic text-lg text-gray-500">{step}</p>
      <div className="inline-block border-b-2 border-gray-800 w-12 my-1"></div>
      <h3
        id={`timeline-item-title-${index}`}
        className="text-2xl font-bold uppercase tracking-wider text-gray-800"
      >
        {title}
      </h3>
      <p
        className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html: description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      ></p>
    </div>
  </div>
);

const ImageComponent = ({ imageUrl, title, isImageLeft, isVisible }) => (
  <div
    className={`flex items-center justify-center p-4 h-full transition-opacity duration-500 ease-out ${
      isImageLeft ? "md:justify-end" : "md:justify-start"
    } ${isVisible ? "opacity-100" : "opacity-0"}`}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-full object-cover shadow-xl border-4 border-white max-w-sm"
    />
  </div>
);

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const isImageLeft = isEven;
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    const currentRef = itemRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="relative" ref={itemRef}>
      {/* --- Mobile View --- */}
      <div className="md:hidden pl-10">
        <TextComponent
          {...item}
          index={index}
          isTextLeft={false}
          isVisible={isVisible}
        />
        <div className="-mt-4">
          <ImageComponent
            imageUrl={item.imageUrl}
            title={item.title}
            isImageLeft={false}
            isVisible={isVisible}
          />
        </div>
      </div>

      {/* --- Desktop View --- */}
      <div className="hidden md:flex flex-col md:flex-row items-center md:items-stretch justify-center w-full">
        {/* Text Content */}
        <div
          className={`w-full md:w-5/12 ${
            isEven ? "md:order-3" : "md:order-1"
          } flex ${!isEven ? "md:justify-end" : "md:justify-start"}`}
        >
          <TextComponent
            {...item}
            index={index}
            isTextLeft={!isEven}
            isVisible={isVisible}
          />
        </div>

        {/* Separator Placeholder */}
        <div className="w-full md:w-2/12 order-2 flex justify-center items-center h-16 md:h-auto"></div>

        {/* Image Content */}
        <div
          className={`w-full md:w-5/12 ${isEven ? "md:order-1" : "md:order-3"}`}
        >
          <ImageComponent
            imageUrl={item.imageUrl}
            title={item.title}
            isImageLeft={isImageLeft}
            isVisible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

const ProcessSteps = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, TIMELINE_DATA.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // distance from top of viewport to top of element
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // calculate progress as 0% at top and 100% at bottom
      const totalHeight = elementBottom - elementTop;
      let progress =
        ((windowHeight - elementTop) / (windowHeight + element.offsetHeight)) *
        100;

      progress = Math.min(100, Math.max(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={timelineRef}
      className="container mx-auto px-4 sm:px-8 relative py-8"
    >
      {/* Background Dashed Line */}
      <div className="absolute top-0 left-6 md:left-1/2 transform -translate-x-1/2 h-full w-px">
        <div className="h-full w-full border-l-2 border-dashed border-gray-400"></div>
      </div>

      {/* Progress Line */}
      <div
        className="absolute top-0 left-6 md:left-1/2 transform -translate-x-1/2 w-1 md:w-1.5 bg-amber-800 transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      <div role="list" className="relative flex flex-col gap-y-6 md:gap-y-4">
        {TIMELINE_DATA.map((item, index) => (
          <div
            key={`${item.step}-${item.title}`}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            className="relative"
            role="listitem"
            aria-labelledby={`timeline-item-title-${index}`}
          >
            <TimelineItem item={item} index={index} />
            {/* Dot */}
            <div className="absolute top-14 left-2 md:top-1/2 md:left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-amber-800 border-2 md:border-4 border-white z-10 shadow-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
