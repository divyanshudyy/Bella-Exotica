import { motion } from "motion/react";

const LoadingScreen = () => {
  const name = "Bella Exotica";
  const letters = name.split("");

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.03, // controls left-to-right timing
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-stone-100 font-oakes-grostek overflow-hidden">
      {/* Fade in the whole word smoothly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
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
