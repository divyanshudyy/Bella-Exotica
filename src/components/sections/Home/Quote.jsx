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

  //  Floating animation
  const floatTransition = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  // Fade + Blur + Rotate intro
  const imageEntry1 = {
    hidden: {
      opacity: 0,
      filter: "blur(3px)",
      rotate: -10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      rotate: 5,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  const imageEntry2 = {
    hidden: {
      opacity: 0,
      filter: "blur(3px)",
      rotate: 10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      rotate: -5,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

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
        className="flex md:items-start items-center justify-center w-full px-4 pt-12 pb-25 md:pb-55"
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
            variants={imageEntry1}
            initial="hidden"
            animate={isTextVisible ? ["visible", floatTransition] : "hidden"}
            src={QUOTE.jars[0].src}
            alt={QUOTE.jars[0].alt}
            className="absolute md:left-15 md:bottom-80  lg:left-25 lg:bottom-105 w-[clamp(6rem,15vw,12rem)] md:scale-105 hidden md:block -rotate-22"
            style={{
              willChange: "transform, opacity, filter",
            }}
          />

          {/* Jar 2 */}
          <motion.img
            variants={imageEntry2}
            initial="hidden"
            animate={isTextVisible ? ["visible", floatTransition] : "hidden"}
            src={QUOTE.jars[1].src}
            alt={QUOTE.jars[1].alt}
            className="absolute md:bottom-20 md:right-10 lg:bottom-25 lg:right-25 w-[clamp(6rem,20vw,16rem)] md:scale-120 rotate-25 md:block  hidden"
            style={{
              willChange: "transform, opacity, filter",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;
