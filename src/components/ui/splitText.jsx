import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

const SplitText = ({
  text = "Smart. Safe. Nutritious",
  tag: Tag = "h1",
  className = "",
  stagger = 0.04,
  letterDuration = 0.4,
  fromY = 0,
  rootOffset = ["start end", "end 60%"], // element enters -> 0, leaves -> 1
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: rootOffset });
  const [progress, setProgress] = useState(0);

  // Use rAF batching to avoid setState every tiny change (better perf)
  useEffect(() => {
    if (!scrollYProgress) return;
    let frame = null;
    let latest = 0;
    const handler = (v) => {
      latest = v;
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          setProgress(latest);
          frame = null;
        });
      }
    };
    const unsubscribe = scrollYProgress.onChange(handler);
    return () => {
      unsubscribe();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scrollYProgress]);

  const letters = Array.from(String(text));

  // helper
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  return (
    <Tag
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      style={{ lineHeight: 1 }}
      aria-label={text}
    >
      {letters.map((char, i) => {
        // compute per-letter timeline window (progress space)
        const start = i * stagger;
        const end = start + letterDuration;

        // normalized progress for this letter (0..1)
        const local = clamp01((progress - start) / (end - start || 1));

        // compute CSS values
        const y = (1 - local) * fromY; // from -> 0
        const opacity = local;

        return (
          <motion.span
            key={`${char}-${i}`}
            // We don't call hooks here — just compute values and pass them in style
            style={{
              display: "inline-block", // critical so translateY works
              transform: `translateY(${y}px)`,
              opacity,
              willChange: "transform, opacity",
            }}
            aria-hidden={char === " " ? true : undefined}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default SplitText;
