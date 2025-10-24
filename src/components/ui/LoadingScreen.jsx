import { motion } from "motion/react";
import { useEffect } from "react";

const LoadingScreen = ({ onAnimationComplete }) => {
  const name = "Bella Exotica";
  const letters = name.split("");

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.03, // stagger per letter
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Calculate total animation duration
  useEffect(() => {
    const lastIndex = letters.length - 1;
    const totalDuration = lastIndex * 0.03 + 0.6; // last letter delay + its duration
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, totalDuration * 800); // convert to ms
    return () => clearTimeout(timer);
  }, [letters, onAnimationComplete]);

  return (
    <main className="absolute top-0 left-0 flex flex-col items-center justify-center h-screen w-full bg-[#f2f2f2] font-oakes-grostek overflow-hidden z-[9999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl text-[#3D2B1F] font-bold font-playfair"
          aria-label={name}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </main>
  );
};

export default LoadingScreen;
