import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Highlight = () => {
  const ref = useRef(null);

  // Watch scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // "start end" = section enters viewport
    // "end start" = section fully leaves viewport
  });

  // Map scroll progress (0 → 1) to values
  const top = useTransform(scrollYProgress, [0, 0.45], ["-30%", "50%"]);
  const left = useTransform(scrollYProgress, [0, 0.45], ["10%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.45], [-55, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 4]);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center"
      ref={ref}
    >
      <img
        src="/images/highlight/spread1.png"
        alt=""
        className="h-[70%] w-[70%] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
      />
      <motion.img
        src="/images/highlight/Muesli Jar.png"
        alt="Muesli Jar"
        className="absolute h-[20%]"
        style={{ top, left, rotate, scale, x: "-50%", y: "-50%" }}
      />

      <img
        src="/images/highlight/Muesli Jar.png"
        alt="Muesli Jar"
        className="absolute h-[35%] top-[-90%] left-[5%] -rotate-20 blur-[1px]"
      />
      <img
        src="/images/highlight/Muesli Jar.png"
        alt="Muesli Jar"
        className="absolute h-[30%] top-[-40%] left-[80%] rotate-35 blur-[1px]"
      />
      <img
        src="/images/highlight/ELEMENTS.png"
        alt=""
        className="absolute h-[65%] w-[90%] "
      />
    </section>
  );
};

export default Highlight;
