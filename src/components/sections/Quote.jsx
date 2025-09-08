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
      className="flex items-center justify-center min-h-screen w-full py-20 px-4"
      aria-label="Quote section"
    >
      <motion.figure
        className="max-w-3xl mx-auto relative"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.span
          variants={quoteMarkVariants}
          className="absolute -top-6 -left-5 font-playfair text-9xl text-[#3D2B1F]"
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
                className=" text-4xl md:text-5xl font-playfair  font-semibold text-[#3D2B1F] leading-[1.35]"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.blockquote>
        <motion.span
          variants={quoteMarkVariants}
          className="absolute -bottom-10 -right-5 font-playfair  text-9xl text-[#3D2B1F]"
        >
          ”
        </motion.span>
      </motion.figure>
    </section>
  );
};

export default Quote;
