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

    // Duplicate the entire block for seamless loop
    const copies = Array.from({ length: numCopies }).map((_, idx) => (
      <div
        key={idx}
        ref={idx === 0 ? copyRef : null} // measure only the first copy
        className="flex items-center space-x-8 flex-shrink-0"
      >
        {children}
      </div>
    ));

    return (
      <div className="relative overflow-hidden w-full">
        <motion.div className="flex whitespace-nowrap" style={{ x }}>
          {copies}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="w-full overflow-hidden py-10 relative">
      {/* Fade overlay on the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 z-10"
        style={{
          background: "linear-gradient(to right, #F2F2F2, rgba(242,242,242,0))",
        }}
      />
      {/* Fade overlay on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 z-10"
        style={{
          background: "linear-gradient(to left, #F2F2F2, rgba(242,242,242,0))",
        }}
      />

      <VelocityText baseVelocity={50}>
        {texts.map((text, idx) => (
          <div key={idx} className="flex items-center px-10">
            <img
              src={`/images/logo/certificates/${text}.png`}
              alt={text}
              className="w-auto object-contain sm:h-30 md:h-15 h-20 opacity-20"
            />
          </div>
        ))}
      </VelocityText>
    </section>
  );
};

export default ScrollVelocity;
