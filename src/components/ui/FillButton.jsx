import { motion } from "motion/react";

const FillButton = ({
  children,
  size = "md", // sm, md, lg
  baseColor = "#FAF3E0",
  hoverTextColor = "#F5E6CA",
  fillColor = "#3D2B1F",
  duration = 0.6,
  textClass = "",
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };

  return (
    <motion.button
      className={`max-w-fit relative overflow-hidden rounded-[0.4rem] font-medium cursor-pointer ${sizeClasses[size]} group flex items-center gap-2 border-none`}
      whileHover="hover"
      whileTap="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: { color: "#3D2B1F" },
        hover: { color: hoverTextColor },
      }}
      style={{ backgroundColor: baseColor }}
    >
      {/* Expanding fill with rounded edges */}
      <motion.span
        className="absolute inset-0 z-0 rounded-[0.4rem] border-none" // ✅ matches parent rounding
        initial={{ width: "0%" }}
        variants={{
          hover: { width: "102%" },
        }}
        transition={{ duration, ease: "easeInOut" }}
        style={{ backgroundColor: fillColor }}
      />

      {/* Button content */}
      <span className={`${textClass} relative z-10 flex items-center gap-2`}>
        {children}
      </span>
    </motion.button>
  );
};

export default FillButton;
