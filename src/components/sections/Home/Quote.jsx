import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Intersection Observer for text animation
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

const quoteLines = [
  "Elevate your breakfast",
  "with a masterful blend offering",
  "natural radiance and wellness",
  "in every single spoonful.",
];

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

  // 🔹 Smooth proportional section scaling (entire section shrinks slightly)
  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  // inside your Quote component
  const [yStartJar1, setYStartJar1] = useState(300);
  const [yStartJar2, setYStartJar2] = useState(500);
  const [yStartJar3, setYStartJar3] = useState(500);

  const scaleJar1 = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.9]);
  const scaleJar2 = useTransform(scrollYProgress, [0.2, 0.9], [0.8, 1.4]);
  const scaleJar3 = useTransform(scrollYProgress, [0, 1], [1.2, 1.0]);

  const rotateJar1 = useTransform(scrollYProgress, [0, 0.8], [50, 0]);
  const rotateJar2 = useTransform(scrollYProgress, [0.2, 0.9], [-25, 10]);
  const rotateJar3 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  useEffect(() => {
    const updateYValues = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // small screens
        setYStartJar1(150);
        setYStartJar2(250);
        setYStartJar3(300);
      } else if (width < 1024) {
        // medium screens
        setYStartJar1(250);
        setYStartJar2(400);
        setYStartJar3(450);
      } else {
        // large screens
        setYStartJar1(300);
        setYStartJar2(500);
        setYStartJar3(500);
      }
    };

    updateYValues();
    window.addEventListener("resize", updateYValues);
    return () => window.removeEventListener("resize", updateYValues);
  }, []);

  // Then use these in your useTransform
  const yJar1 = useTransform(scrollYProgress, [0, 0.8], [yStartJar1, -50]);
  const yJar2 = useTransform(scrollYProgress, [0, 0.8], [yStartJar2, -80]);
  const yJar3 = useTransform(scrollYProgress, [0, 1], [yStartJar3, -100]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex md:items-start justify-center w-full px-4 pt-12 pb-55" // changed from fixed height to padding
      aria-label="Quote section"
      style={{ scale: sectionScale }}
    >
      {/* Text */}
      <motion.figure
        ref={textRef}
        className="max-w-5xl mx-auto relative z-10"
        initial="hidden"
        animate={isTextVisible ? "visible" : "hidden"}
      >
        {/* Opening Quote */}
        <motion.span
          variants={quoteMarkVariants}
          className="absolute font-playfair text-[#3D2B1F]"
          style={{
            top: 0,
            left: "-1rem",
            fontSize: "clamp(2.5rem, 5vw, 9rem)",
            lineHeight: 1,
          }}
        >
          “
        </motion.span>

        {/* Quote Lines */}
        <motion.blockquote
          className="text-center space-y-[clamp(0.3rem, 1vw, 1rem)] relative"
          variants={containerVariants}
        >
          {quoteLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="font-playfair font-semibold italic text-[#3D2B1F]"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 3.2rem)",
                  lineHeight: "clamp(1.2, 2vw, 1.35)",
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.blockquote>

        {/* Closing Quote */}
        <motion.span
          variants={quoteMarkVariants}
          className="absolute font-playfair text-[#3D2B1F]"
          style={{
            bottom: 0,
            right: "-1rem",
            fontSize: "clamp(2.5rem, 5vw, 9rem)",
            lineHeight: 1,
          }}
        >
          ”
        </motion.span>
      </motion.figure>

      {/* Jar images */}
      <div className="inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.img
          src="/images/highlight/Muesli-Jar3.png"
          alt="Jar 3"
          className="absolute left-0 sm:left-5 bottom-26 sm:bottom-10 md:bottom-10"
          style={{
            y: yJar1,
            scale: scaleJar1,
            rotate: rotateJar1,
            width: "clamp(6rem, 15vw, 12rem)",
          }}
        />

        <motion.img
          src="/images/highlight/Muesli-Jar2.png"
          alt="Jar 2"
          className="absolute left-24 sm:left-36 bottom-32 sm:bottom-120 md:left-25"
          style={{
            y: yJar2,
            scale: scaleJar2,
            rotate: rotateJar2,
            width: "clamp(6rem, 18vw, 14rem)",
          }}
        />

        <motion.img
          src="/images/highlight/Muesli-Jar1.png"
          alt="Jar 1"
          className="absolute right-16 sm:right-20 bottom-35 sm:bottom-60 sm:scale-120"
          style={{
            y: yJar3,
            scale: scaleJar3,
            rotate: rotateJar3,
            width: "clamp(6rem, 20vw, 16rem)",
          }}
        />
      </div>
    </motion.section>
  );
};

export default Quote;
