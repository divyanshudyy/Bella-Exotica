import { motion } from "motion/react";
import { HIGHLIGHTS, HIGHLIGHT_SECTION } from "../../../data/homeData";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay },
  }),
};

const Highlight = () => {
  return (
    <section className="relative h-auto w-full flex items-center justify-center">
      {/* Background Image */}
      <motion.img
        src={HIGHLIGHT_SECTION.bgImage}
        alt={HIGHLIGHT_SECTION.altText}
        className="w-full h-auto"
        initial={{ filter: "blur(8px)", opacity: 0.7 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Highlights */}
      {HIGHLIGHTS.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.position} bg-[#F2F2F2] px-3 md:px-10 py-1 md:py-7 rounded-full shadow-md`}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          custom={item.delay}
          viewport={{ once: true }}
        >
          <p
            className={`capitalize font-bold font-hanken-grotesk ${item.titleAlign}`}
            style={{ fontSize: `clamp(0.75rem, 2.2vw, 2rem)` }}
          >
            {item.title}
          </p>
          <p
            className={`font-normal font-hanken-grotesk ${item.subtitleAlign}`}
            style={{ fontSize: `clamp(0.65rem, 1.8vw, 1.5rem)` }}
          >
            {item.subtitle}
          </p>
        </motion.div>
      ))}

      {/* Center Title */}
      <div className="absolute top-[45%] text-center px-10 py-5">
        <h2
          className="font-bold text-[#306211] font-hanken-grotesk"
          style={{ fontSize: "clamp(1.2rem, 4.6vw, 4rem)" }}
        >
          {HIGHLIGHT_SECTION.centerTitle}
        </h2>
        <p
          className="text-[#306211] font-normal font-hanken-grotesk"
          style={{ fontSize: "clamp(0.85rem, 2.7vw, 3rem)" }}
        >
          {HIGHLIGHT_SECTION.centerSubtitle}
        </p>
      </div>
    </section>
  );
};

export default Highlight;
