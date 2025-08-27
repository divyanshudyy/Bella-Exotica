import { motion } from "motion/react";
import { hero } from "../../data/content";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row  gap-4 md:gap-0 justify-center items-center overflow-hidden">
      <motion.h1
        className="text-center font-extrabold md:text-[18rem] text-[5rem] leading-[5rem] md:leading-[14rem]  text-[#3D2B1F]"
        initial={{
          opacity: 0,
          y: -400,
          scale: 2,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        {hero.title.map((word, wi) => (
          <motion.div
            key={wi}
            className="block"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    filter: "blur(50px)",
                    scale: 2,
                    lineHeight: 1.2,
                  },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    lineHeight: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="md:absolute md:top-50 md:right-20 md:w-[18rem] w-[20rem] md:text-start text-center text-[#3D2B1F] font-semibold text-md"
      >
        {hero.subtitle.map((line, i) => (
          <motion.p
            key={i}
            className="overflow-hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
                // scale: 1.2,
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                // scale: 1,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
