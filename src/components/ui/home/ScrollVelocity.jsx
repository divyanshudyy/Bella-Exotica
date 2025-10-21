import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { CERTIFICATES_SECTION } from "../../../data/homeData";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  numCopies = 5,
}) => {
  function VelocityText({ children, baseVelocity = velocity }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    // Equal space between all copies, including ends
    const copies = Array.from({ length: numCopies }).map((_, idx) => (
      <div
        key={idx}
        ref={idx === 0 ? copyRef : null}
        className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 flex-shrink-0"
      >
        {children}
      </div>
    ));

    return (
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap justify-between"
          style={{ x }}
        >
          {copies}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden py-0 relative">
      {/* Fade overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 z-10"
        style={{
          background: "linear-gradient(to right, #F2F2F2, rgba(242,242,242,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 z-10"
        style={{
          background: "linear-gradient(to left, #F2F2F2, rgba(242,242,242,0))",
        }}
      />

      <VelocityText baseVelocity={50}>
        <div
          className="
       
          py-4 
      flex items-ce nter justify-start gap-18  lg:gap-28
      px-10 sm:px-10 lg:px-18
    "
        >
          {CERTIFICATES_SECTION.map((cert, idx) => (
            <img
              key={idx}
              src={cert.image}
              alt={cert.name}
              className="
      object-contain
      opacity-20
      h-10 sm:h-12 md:h-10 lg:h-14
      w-auto
      transition-all duration-300 ease-in-out
    "
            />
          ))}
        </div>
      </VelocityText>
    </section>
  );
};

export default ScrollVelocity;
