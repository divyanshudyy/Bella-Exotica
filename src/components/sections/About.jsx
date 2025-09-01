import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useRef } from "react";
import FillButton from "../ui/FillButton";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end start"],
  });

  // Circle grows (starts at 20%, finishes by 100%)
  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["circle(10% at 50% 50%)", "circle(45% at 50% 50%)"] // overshoot to cover fully
  );

  // Heading moves upward (starts at 40%)
  const headingY = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ["-1vh", "58vh"] // center → move up
  );

  const headingOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  // Paragraph fades in (after heading moves)
  const paraOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const paraBlurPx = useTransform(scrollYProgress, [0.3, 0.7], [10, 0]);
  const paraFilter = useMotionTemplate`blur(${paraBlurPx}px)`;
  const paraY = useTransform(scrollYProgress, [0.3, 0.7], ["10vh", "60vh"]);

  const buttonY = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ["0vh", "60vh"] // center → move up
  );
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={ref} className="relative h-[200vh] overflow-hidden">
      <div className="sticky top-0 h-full flex items-center justify-center ">
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 bg-[#3D2B1F]"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            style={{ y: headingY, opacity: headingOpacity }}
            className="text-5xl font-bold text-[#FAF3E0]"
          >
            About us
          </motion.h1>

          <motion.p
            style={{
              opacity: paraOpacity,
              filter: paraFilter, // ✅ blur works now
              willChange: "filter, opacity",
              y: paraY,
            }}
            className="max-w-lg text-lg text-[#FAF3E0] pb-10"
          >
            We leverage cutting-edge freeze-drying and dehydration technologies,
            preserving nutrients and flavor while meeting global food safety
            standards.
          </motion.p>
          <motion.div style={{ y: buttonY, opacity: buttonOpacity }}>
            <FillButton
              size="lg"
              baseColor="#F5E6CA"
              fillColor="#1A1A1A"
              hoverTextColor="#F6E6CA"
            >
              Learn More
            </FillButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
