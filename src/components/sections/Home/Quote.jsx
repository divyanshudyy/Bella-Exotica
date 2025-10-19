import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

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

  // Responsive Y start values
  const [yStart, setYStart] = useState([300, 500, 500]);
  useEffect(() => {
    const updateYStart = () => {
      const w = window.innerWidth;
      if (w < 640) setYStart([150, 250, 300]);
      else if (w < 1024) setYStart([250, 400, 450]);
      else setYStart([300, 500, 500]);
    };
    updateYStart();
    window.addEventListener("resize", updateYStart);
    return () => window.removeEventListener("resize", updateYStart);
  }, []);

  // Individual transforms for each jar (no hook-in-loop)
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [yStart[0], -50]);
  const rotateTransform1 = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const yTransform2 = useTransform(scrollYProgress, [0, 1], [yStart[1], -80]);
  const rotateTransform2 = useTransform(scrollYProgress, [0, 1], [-25, 10]);

  const yTransform3 = useTransform(scrollYProgress, [0, 1], [yStart[2], -100]);
  const rotateTransform3 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Throttle scroll updates (optional)
  useMotionValueEvent(scrollYProgress, "change", () => {
    requestAnimationFrame(() => {});
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex md:items-start items-center justify-center w-full px-4 pt-12 pb-55"
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
          style={{
            top: 0,
            left: "-1rem",
            fontSize: "clamp(2.5rem, 5vw, 9rem)",
            lineHeight: 1,
          }}
        >
          “
        </motion.span>

        <motion.blockquote
          className="text-center space-y-[clamp(0.3rem,1vw,1rem)]"
          variants={containerVariants}
        >
          {quoteLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="font-playfair font-semibold italic text-[#3D2B1F]"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 3.2rem)",
                  lineHeight: "clamp(1.2, 2vw, 1.35)",
                  willChange: "transform, opacity",
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

      {/* Jar Images */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.img
          src="/images/gallery/thumbnails/muesli-jar.webp"
          alt="Jar 1"
          className="absolute left-0 sm:left-5 bottom-6 sm:bottom-10 md:bottom-10"
          style={{
            y: yTransform1,
            rotate: rotateTransform1,
            width: "clamp(6rem,15vw,12rem)",
            willChange: "transform",
          }}
        />
        <motion.img
          src="/images/gallery/thumbnails/muesli-jar.webp"
          alt="Jar 2"
          className="absolute left-24 sm:left-36 md:left-25 bottom-32 sm:bottom-120"
          style={{
            y: yTransform2,
            rotate: rotateTransform2,
            width: "clamp(6rem,18vw,14rem)",
            willChange: "transform",
          }}
        />
        <motion.img
          src="/images/gallery/thumbnails/muesli-jar.webp"
          alt="Jar 3"
          className="absolute right-16 sm:right-20 bottom-80 sm:bottom-60 md:block"
          style={{
            y: yTransform3,
            rotate: rotateTransform3,
            width: "clamp(6rem,20vw,16rem)",
            willChange: "transform",
          }}
        />
      </div>
    </motion.section>
  );
};

export default Quote;
