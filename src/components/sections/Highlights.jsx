"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SplitText from "../ui/splitText";
import { highlights } from "../../data/content";

const Highlights = () => {
  const ref = useRef(null);

  // Control pacing
  const scrollPerItem = 400; // vh per highlight
  const sectionHeight = `${highlights.length * scrollPerItem + 100}vh`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // --- Heading animation (main title) ---
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [1, 1, 0]
  );
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const headingBlur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2],
    ["blur(0px)", "blur(0px)", "blur(10px)"]
  );

  // --- Content highlights ---
  const startOffset = 0.25;
  const availableRange = 1 - startOffset;
  const slotSize = availableRange / highlights.length;

  const highlightTransforms = highlights.map((_, i) => {
    const start = startOffset + i * slotSize;
    const mid = start + slotSize * 0.5;
    const end = start + slotSize;

    return {
      // For container fade
      opacity: useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]),

      // Heading (scale + opacity)
      headingScale: useTransform(scrollYProgress, [start, mid], [1.15, 1]),
      headingOpacity: useTransform(scrollYProgress, [start, mid], [0, 1]),

      // Paragraph (y + opacity)
      paraY: useTransform(scrollYProgress, [start, mid], [50, 0]),
      paraOpacity: useTransform(scrollYProgress, [start, mid], [0, 1]),

      // Image reveal
      clipPath: useTransform(
        scrollYProgress,
        [start, mid, end],
        [
          "inset(100% 0% 0% 0%)", // enter from bottom
          "inset(0% 0% 0% 0%)", // fully visible
          "inset(0% 0% 100% 0%)", // exit to top
        ]
      ),
    };
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-start items-center"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex justify-center items-center w-full overflow-hidden ">
        {/* --- Main Title --- */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY, filter: headingBlur }}
          className="absolute"
        >
          <SplitText
            text="Smart. Safe. Nutritious."
            className="text-8xl font-extrabold text-[#3D2B1F] font-boska"
          />
        </motion.div>

        {/* --- Highlights --- */}
        <div className="relative w-full h-full flex items-center justify-center px-10 ">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-[80%] h-full flex items-center justify-center gap-10 "
              style={{ opacity: highlightTransforms[i].opacity }}
            >
              {/* Text */}
              <div className="w-1/2 h-full flex flex-col justify-center items-start text-[#3D2B1F] ">
                <motion.h2
                  style={{
                    scale: highlightTransforms[i].headingScale,
                    opacity: highlightTransforms[i].headingOpacity,
                  }}
                  className="text-5xl font-bold mb-4"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  style={{
                    y: highlightTransforms[i].paraY,
                    opacity: highlightTransforms[i].paraOpacity,
                  }}
                  className="max-w-xl text-lg"
                >
                  {item.desc}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                style={{ clipPath: highlightTransforms[i].clipPath }}
                className="w-1/2 h-[600px] overflow-hidden flex items-center justify-center "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[400px] h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
