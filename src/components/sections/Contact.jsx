import { motion, useScroll, useTransform } from "motion/react";
import FillButton from "../ui/FillButton";

const Contact = ({ footerRef }) => {
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end center"], // starts sooner, ends at top of viewport
  });

  const line1X = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const line2X = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);

  return (
    <section className="sticky top-0 h-screen w-full flex flex-col justify-center items-center  z-0 overflow-hidden gap-20">
      <motion.div
        style={{ x: line1X, opacity: lineOpacity }}
        className="relative z-10"
      >
        <h1 className="text-[#3D2B1F] text-[12vw] md:text-[13vw] leading-[0.9] font-extrabold font-boska">
          Turn Ideas
        </h1>
      </motion.div>
      <motion.div
        style={{ x: line2X, opacity: lineOpacity }}
        className="relative z-10"
      >
        <h1 className="text-[#3D2B1F] text-[12vw] md:text-[13vw] leading-[0.9] font-extrabold font-boska">
          into Products
        </h1>
      </motion.div>
      <FillButton
        size="lg"
        textClass="h-[3rem] pb-6  px-10  text-8xl relative z-10 font-boska"
      >
        →
      </FillButton>
    </section>
  );
};

export default Contact;
