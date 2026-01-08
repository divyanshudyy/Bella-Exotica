"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../../../data/processData";

const TextComponent = ({
  step,
  title,
  description,
  isTextLeft,
  isVisible,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="p-4 h-full flex items-center"
  >
    <div
      className={`max-w-md flex flex-col items-center text-center ${
        isTextLeft
          ? "md:items-end md:text-right"
          : "md:items-start md:text-left"
      }`}
    >
      <p className="font-serif italic text-lg text-gray-500">{step}</p>
      <div className="inline-block border-b-2 border-gray-800 w-13 my-0"></div>
      <h3
        id={`timeline-item-title-${index}`}
        className="text-[1.6rem] font-extrabold capitalize text-[#3D2B1F] font-hanken-grotesk mt-2"
      >
        {title}
      </h3>
      <p
        className="mt-4 text-md text-gray-600 lg:w-90"
        dangerouslySetInnerHTML={{
          __html: description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      ></p>
    </div>
  </motion.div>
);

const ImageComponent = ({ imageUrl, title, isImageLeft, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    className={`flex items-center justify-center p-4 h-full ${
      isImageLeft ? "md:justify-end" : "md:justify-start"
    }`}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-full object-cover shadow-xl border-4 border-white max-w-sm"
    />
  </motion.div>
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
      { root: null, threshold: 0.2 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" ref={itemRef}>
      {/* Mobile */}
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

      {/* Desktop */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center w-full">
        {/* Text */}
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

        {/* Connector */}
        <div className="w-full md:w-2/12 order-2 flex justify-center items-center h-16 md:h-auto"></div>

        {/* Image */}
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

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress =
        ((window.innerHeight - rect.top) / (window.innerHeight + rect.height)) *
        100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
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
      {/* Background Line */}
      <div className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 h-[92%] w-px">
        <div className="h-full border-l-2 border-dashed border-gray-400"></div>
      </div>

      {/* Progress Line */}
      <div
        className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-[#3D2B1F] transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      {/* Timeline Items */}
      <div role="list" className="relative flex flex-col gap-y-6 md:gap-y-4">
        {PROCESS_STEPS.map((item, index) => (
          <div key={index} role="listitem" className="relative">
            <TimelineItem item={item} index={index} />
            <div className="absolute top-14 left-2 md:top-1/2 md:left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-[#3D2B1F] border-4 border-white shadow-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
