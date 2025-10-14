"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

const PageHero = ({ image, text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [device, setDevice] = useState("desktop");

  // Detect device width
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

  // Separate start/end heights per device
  const heightMap = {
    mobile: ["20vh", "40vh"],
    tablet: ["45vh", "85vh"],
    desktop: ["55vh", "100vh"],
  };

  // Scroll-based animations
  const height = useTransform(scrollYProgress, [0, 0.3], heightMap[device]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "25px"]);

  // Parallax effect for background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // moves slower than scroll

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      ref={ref}
      style={{ scale, borderRadius, height }}
      className="relative w-full overflow-hidden shadow-lg"
    >
      {/* Background Image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image}
          alt={`${text} Banner`}
          className="w-full h-full object-cover object-center select-none"
        />
      </motion.div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full flex flex-col justify-end px-4 sm:px-6 md:px-10 lg:px-14 pb-5 text-white bg-gradient-to-t from-black/70 via-transparent"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight drop-shadow-md text-center md:text-left font-oakes-grotesk">
          {text}
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default PageHero;
