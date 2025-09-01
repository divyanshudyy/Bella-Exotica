import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FillButton from "../ui/FillButton";
import { intro } from "../../data/content";

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? ["100vw", "90vw"] : ["100vw", "25vw"]
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? ["100vh", "55vh"] : ["100vh", "60vh"]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "-47%"] : ["0%", "-20%"]
  );

  return (
    <section ref={ref} className="relative h-[600vh]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            height,
            y,
          }}
          className="relative w-full h-full"
        >
          <motion.img
            src={`${intro.images[0]}`}
            className="absolute w-full h-full object-cover"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.1, 0.2],
                [0, 1, 0.8]
              ),
            }}
          />
          <motion.img
            src={intro.images[1]}
            className="absolute w-full h-full object-cover"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.2, 0.3, 0.4],
                [0, 1, 0.5]
              ),
            }}
          />
          <motion.img
            src={intro.images[2]}
            className="absolute w-full h-full object-cover"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.4, 0.5, 0.6],
                [0, 1, 0.8]
              ),
            }}
          />

          <motion.img
            src={intro.images[3]}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.6, 0.7, 0.8],
                [0, 1, 1]
              ),
            }}
          />
        </motion.div>

        <div className="absolute w-full h-screen overflow-hidden text-[#3D2B1F] ">
          <motion.h2
            style={{
              y: useTransform(scrollYProgress, [0.6, 0.7], ["50px", "0px"]),
              opacity: useTransform(scrollYProgress, [0.6, 0.7], [0, 1]),
            }}
            className="absolute md:bottom-45 bottom-74 md:left-10 left-6 md:text-[5rem] text-[3rem]  font-bold mb-4  font-boska"
          >
            {intro.title1}
          </motion.h2>
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.6, 0.7, 0.8],
                [0, 1, 1]
              ),
              filter: useTransform(
                scrollYProgress,
                [0.6, 0.7, 0.8],
                ["100px", "0px", "0px"]
              ),
              y: useTransform(
                scrollYProgress,
                [0.6, 0.7, 0.8],
                ["50px", "0px", "0px"]
              ),
            }}
            className="absolute md:bottom-58 bottom-10  px-9 md:px-0 md:right-0 z-10 text-md h-auto md:w-1/3 w-3/3 md:pr-17 flex flex-col md:items-start items-end md:gap-7 gap-8"
          >
            <p className="font-semibold text-md">{intro.description}</p>
            <FillButton size="lg" >Learn More</FillButton>
          </motion.div>
          <motion.h2
            style={{
              y: useTransform(scrollYProgress, [0.7, 0.8], ["50px", "0px"]),
              opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
            }}
            className="absolute md:bottom-8 bottom-55 w-full md:text-[6.5rem] text-[3rem] font-bold md:text-center text-end md:right-0 right-7 mb-8 font-boska"
          >
            {intro.title2}
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;
