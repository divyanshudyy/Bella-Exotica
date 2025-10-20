import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { QUOTE } from "../../../data/constants";

function useIntersectionObserver(
  elementRef,
  { threshold = 0.1, root = null, rootMargin = "0%", triggerOnce = false } = {}
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) observer.unobserve(node);
        } else {
          if (!triggerOnce) setIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};
const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const quoteMarkVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
  },
};

const Quote = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const isTextVisible = useIntersectionObserver(textRef, {
    threshold: 0.5,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Responsive Y start values
  const [yStart, setYStart] = useState(QUOTE.yStartValues.default);
  useEffect(() => {
    const updateYStart = () => {
      const w = window.innerWidth;
      if (w < 640) setYStart(QUOTE.yStartValues.sm);
      else if (w < 1024) setYStart(QUOTE.yStartValues.md);
      else setYStart(QUOTE.yStartValues.lg);
    };
    updateYStart();
    window.addEventListener("resize", updateYStart);
    return () => window.removeEventListener("resize", updateYStart);
  }, []);

  // Individual transforms for each jar
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [yStart[0], -50]);
  const rotateTransform1 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[0].rotateTransform
  );

  const yTransform2 = useTransform(scrollYProgress, [0, 1], [yStart[1], -80]);
  const rotateTransform2 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[1].rotateTransform
  );

  const yTransform3 = useTransform(scrollYProgress, [0, 1], [yStart[2], -100]);
  const rotateTransform3 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[2].rotateTransform
  );

  // Throttle scroll updates (optional)
  useMotionValueEvent(scrollYProgress, "change", () => {
    requestAnimationFrame(() => {});
  });

  return (
    <section className="relative">
      <motion.div
        ref={sectionRef}
        className=" flex md:items-start items-center justify-center w-full px-4 pt-12 pb-55"
      >
        {/* Text */}
        <motion.figure
          ref={textRef}
          className="max-w-5xl mx-auto relative z-10"
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
        >
          <motion.span
            variants={quoteMarkVariants}
            className="absolute font-playfair text-[#3D2B1F]"
            style={QUOTE.quoteMarkStyles.topLeft}
          >
            “
          </motion.span>

          <motion.blockquote
            className="text-center space-y-[clamp(0.3rem,1vw,1rem)]"
            variants={containerVariants}
          >
            {QUOTE.quoteLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.p
                  variants={lineVariants}
                  className={QUOTE.textStyle.className}
                  style={{
                    fontSize: QUOTE.textStyle.fontSize,
                    lineHeight: QUOTE.textStyle.lineHeight,
                    willChange: QUOTE.textStyle.willChange,
                  }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.blockquote>

          <motion.span
            variants={quoteMarkVariants}
            className="absolute font-playfair text-[#3D2B1F]"
            style={QUOTE.quoteMarkStyles.bottomRight}
          >
            ”
          </motion.span>
        </motion.figure>

        {/* Jar Images */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          {QUOTE.jars.map((jar, i) => {
            const yTransforms = [yTransform1, yTransform2, yTransform3];
            const rotateTransforms = [
              rotateTransform1,
              rotateTransform2,
              rotateTransform3,
            ];

            return (
              <motion.img
                key={jar.id}
                src={jar.src}
                alt={jar.alt}
                className={`absolute ${
                  jar.position.left
                    ? `left-${jar.position.left} sm:left-${jar.position.smLeft} md:left-${jar.position.mdLeft}`
                    : ""
                } ${
                  jar.position.right
                    ? `right-${jar.position.right} sm:right-${jar.position.smRight}`
                    : ""
                } bottom-${jar.position.bottom} sm:bottom-${
                  jar.position.smBottom
                } md:block`}
                style={{
                  y: yTransforms[i],
                  rotate: rotateTransforms[i],
                  width: jar.width,
                  willChange: "transform",
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;
