import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CustomButton from "../../ui/CustomButton";
import { Link } from "react-router-dom";
import { HERO } from "../../../data/constants";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale from 1 -> 0.95
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);

  // Border radius from 0 -> 24px
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "25px"]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ scale, borderRadius }}
      className="relative min-h-svh w-full flex flex-col items-center justify-between px-4 sm:px-6 overflow-hidden shadow-md"
    >
      {/* Text Content */}
      <div className="mt-30 sm:mt-24 lg:mt-25 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl text-[#3D2B1F] capitalize font-oakes-grotesk font-bold">
          {HERO.title}
        </h1>
        <p className="text-md sm:text-xl lg:text-[25px] text-[#3D2B1F] mt-3 lg:mt-2 max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto font-oakes-grotesk">
          {HERO.subtitle}
        </p>
      </div>

      {/* Background Image */}
      <img
        src="/images/hero/home-hero.webp"
        alt={HERO.imgAlt}
        className="absolute inset-0 z-[-1] md:h-full md:w-full object-cover w-full h-full select-none pointer-events-none"
      />

      {/* CTA Button */}
      <div>
        <Link to="/products">
          <CustomButton text={HERO.cta} margin="mb-5" textSize="text-md" />
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
