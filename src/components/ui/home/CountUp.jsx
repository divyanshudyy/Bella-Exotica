import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

const CountUp = ({ endValue, duration = 1.5, label, suffix = "" }) => {
  const countRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      const node = countRef.current;
      if (!node) return;

      const controls = animate(0, endValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
        onComplete() {
          node.textContent = endValue.toLocaleString();
        },
      });

      return () => controls.stop();
    }
  }, [isInView, endValue, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <span className="text-4xl sm:text-5xl font-bold text-[#3D2B1F] ">
        <span ref={countRef}>0</span>
        {suffix}
      </span>
      <p className="mt-2 text-base text-gray-500">{label}</p>
    </div>
  );
};

export default CountUp;
