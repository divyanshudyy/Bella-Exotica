import { useRef } from "react";
import { motion } from "motion/react";

import { useState, useEffect } from "react";

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
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else {
          if (!triggerOnce) {
            setIntersecting(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
}

const quoteLines = [
  "This mix of oats, quinoa,",
  "amaranth, chia, and almonds is",
  "what so few good-for-you",
  "cereals aren't: satisfying.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const quoteMarkVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Quote = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex md:items-center justify-center h-96 sm:min-h-[80vh] md:min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
      aria-label="Quote section"
    >
      {/* Quote figure */}
      <motion.figure
        className="max-w-3xl mx-auto relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.span
          variants={quoteMarkVariants}
          className="absolute -top-3 md:-top-6 -left-3 sm:-left-5 font-playfair text-6xl sm:text-8xl md:text-9xl text-[#3D2B1F]"
        >
          “
        </motion.span>
        <motion.blockquote
          className="space-y-2 text-center"
          variants={containerVariants}
        >
          {quoteLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="text-2xl sm:text-3xl md:text-5xl font-playfair font-semibold  text-[#3D2B1F] leading-snug sm:leading-[1.35]"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.blockquote>
        <motion.span
          variants={quoteMarkVariants}
          className="absolute bottom-30 md:-bottom-8 -right-3 sm:-right-5 font-playfair text-6xl sm:text-8xl md:text-9xl text-[#3D2B1F]"
        >
          ”
        </motion.span>
      </motion.figure>

      {/* Images overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.img
          src="/images/highlight/Muesli-Jar3.png"
          alt="Bella Exotica product highlights"
          className="absolute left-0 sm:left-20 bottom-26 sm:bottom-10 h-32 sm:h-44 md:h-60 scale-60 sm:scale-70 md:scale-70 md:bottom-3"
          initial={{ y: 500, filter: "blur(0rem)" }}
          animate={
            isVisible
              ? { y: [500, -100, 0], filter: "blur(.15rem)" }
              : { y: 500 }
          }
          transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.6, 1] }}
        />

        <motion.img
          src="/images/highlight/Muesli-Jar2.png"
          alt="Bella Exotica product highlights"
          className="absolute left-24 sm:left-36 bottom-32 sm:bottom-40 h-32 sm:h-44 md:h-60 scale-0 sm:scale-90 md:scale-90 blur-[.06rem] md:left-50"
          initial={{ y: 900 }}
          animate={isVisible ? { y: [900, -50, 0], opacity: 1 } : { y: 600 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            times: [0, 0.6, 1],
            delay: 0.1,
          }}
        />

        <motion.img
          src="/images/highlight/Muesli-Jar1.png"
          alt="Bella Exotica product highlights"
          className="absolute right-16 sm:right-20 bottom-35 sm:bottom-20 h-32 sm:h-44 md:h-60 scale-[140%] sm:scale-[130%] md:scale-[160%] blur-[.09rem] md:blur-[0rem]"
          initial={{ y: 500 }}
          animate={isVisible ? { y: [500, -100, 0], opacity: 1 } : { y: 500 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            times: [0, 0.6, 1],
            delay: 0.3,
          }}
        />
      </div>
    </section>
  );
};

export default Quote;
