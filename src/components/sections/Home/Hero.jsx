"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CustomButton from "../../ui/CustomButton";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale from 1 -> 0.95
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);

  // Border radius from 0 -> 24px
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "30px"]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, borderRadius }}
      className="relative min-h-180 md:min-h-svh w-full flex flex-col items-center justify-between px-4 sm:px-6 overflow-hidden"
    >
      {/* Text Content */}
      <div className="mt-30 sm:mt-24 lg:mt-25 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl text-[#3D2B1F] capitalize font-oakes-grostek font-[700]">
          Pure taste timeless nutrition
        </h1>
        <p className="text-md sm:text-xl lg:text-[25px] text-[#3D2B1F] mt-0 lg:mt-2 max-w-md sm:max-w-2xl lg:max-w-3xl mx-auto font-oakes-grostek">
          Premium Organic Cereals, Granolas & Nuts
        </p>
      </div>

      {/* Background Image */}
      <img
        src="/images/hero/HeroBanner.png"
        alt="Bella Exotica organic products including oats, muesli, granola, cereals, and almonds"
        className="absolute inset-0 z-[-1] md:h-full md:w-full object-cover w-full h-full select-none pointer-events-none"
      />

      {/* CTA Button */}

      <div>
        <Link to="/products">
          <CustomButton text="EXPLORE COLLECTION" margin="mb-5" />
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
