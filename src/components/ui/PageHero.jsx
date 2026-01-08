"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

const PageHero = ({ image, text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // triggers immediately
  });

  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const updateDevice = () => {
      if (window.innerWidth < 640) setDevice("mobile");
      else if (window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  // Responsive height per device
  const heightMap = {
    mobile: ["25vh", "20vh"], // smaller height for mobile
    tablet: ["30vh", "25vh"], // smaller height for tablet
    desktop: ["60vh", "50vh"], // default for desktop
  };

  // Scroll-based transformations
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "25px"]);
  const width = useTransform(scrollYProgress, [0, 0.3], ["100%", "90%"]);
  const height = useTransform(scrollYProgress, [0, 0.3], heightMap[device]);

  return (
    <motion.section
      ref={ref}
      style={{ borderRadius, width, height }}
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative mx-auto overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={`${text} Banner`}
          className="w-full h-full object-cover object-center select-none"
        />
      </div>

      {/* Overlay Content with subtle gradient */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 w-full flex flex-col justify-end px-4 sm:px-6 md:px-10 lg:px-14 pb-5 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      >
        <h1 className="text-[2.2rem] sm:text-4xl md:text-6xl lg:text-[5rem] font-bold leading-snug md:leading-tight drop-shadow-md text-center md:text-left font-hanken-grotesk">
          {text}
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default PageHero;
