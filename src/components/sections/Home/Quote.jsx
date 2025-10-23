import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { QUOTE } from "../../../data/homeData";

function useIntersectionObserver(
  elementRef,
  { threshold = 0.1, triggerOnce = false } = {}
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
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, triggerOnce]);

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

  // Y offsets for each jar
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [300, -50]);
  const yTransform2 = useTransform(scrollYProgress, [0, 1], [500, -80]);
  const yTransform3 = useTransform(scrollYProgress, [0, 1], [500, -100]);

  const rotateTransform1 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[0].rotateTransform
  );
  const rotateTransform2 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[1].rotateTransform
  );
  const rotateTransform3 = useTransform(
    scrollYProgress,
    [0, 1],
    QUOTE.jars[2].rotateTransform
  );

  // Default styles
  const quoteMarkStyles = {
    topLeft: {
      top: 0,
      left: "-1rem",
      fontSize: "clamp(2.5rem,5vw,9rem)",
      lineHeight: 1,
    },
    bottomRight: {
      bottom: 0,
      right: "-1rem",
      fontSize: "clamp(2.5rem,5vw,9rem)",
      lineHeight: 1,
    },
  };

  const textStyle = {
    fontSize: "clamp(1.5rem,3vw,3.2rem)",
    lineHeight: "clamp(1.2,2vw,1.35)",
    className: "font-playfair font-semibold italic text-[#3D2B1F]",
    willChange: "transform, opacity",
  };

  return (
    <section className="relative">
      <motion.div
        ref={sectionRef}
        className="flex md:items-start items-center justify-center w-full px-4 pt-12 pb-55"
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
            style={quoteMarkStyles.topLeft}
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
                  className={textStyle.className}
                  style={{
                    fontSize: textStyle.fontSize,
                    lineHeight: textStyle.lineHeight,
                    willChange: textStyle.willChange,
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
            style={quoteMarkStyles.bottomRight}
          >
            ”
          </motion.span>
        </motion.figure>

        {/* Jar Images */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          {/* Jar 1 */}
          <motion.img
            src={QUOTE.jars[0].src}
            alt={QUOTE.jars[0].alt}
            className="absolute left-0 bottom-6 sm:left-20 sm:bottom-10 md:left-20 md:bottom-10 w-[clamp(6rem,15vw,12rem)]"
            style={{
              y: yTransform1,
              rotate: rotateTransform1,
              willChange: "transform",
            }}
          />

          <motion.img
            src={QUOTE.jars[1].src}
            alt={QUOTE.jars[1].alt}
            className="absolute left-24 bottom-32 sm:left-36  sm:bottom-120 md:left-70 md:bottom-32 w-[clamp(6rem,18vw,14rem)]"
            style={{
              y: yTransform2,
              rotate: rotateTransform2,
              willChange: "transform",
            }}
          />

          <motion.img
            src={QUOTE.jars[2].src}
            alt={QUOTE.jars[2].alt}
            className="absolute right-16 bottom-80 sm:right-2 sm:bottom-0 md:right-5 w-[clamp(6rem,20vw,16rem)]"
            style={{
              y: yTransform3,
              rotate: rotateTransform3,
              willChange: "transform",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;
