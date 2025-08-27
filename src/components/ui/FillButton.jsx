import { motion } from "motion/react";

const FillButton = ({ value }) => {
  return (
    <motion.button
      className="relative overflow-hidden px-9 py-3  rounded-sm font-medium bg-[#FAF3E0] cursor-pointer shadow-sm"
      whileHover="hover"
      whileTap="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: { color: "#3D2B1F" },
        hover: { color: "#F5E6CA" },
      }}
    >
      <motion.span
        className="absolute inset-0 bg-[#3D2B1F] z-0"
        initial={{ scaleX: 0 }}
        variants={{
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.8, ease: "anticipate" }}
        style={{ transformOrigin: "right" }}
      />

      <span className="relative z-10">{value}</span>
    </motion.button>
  );
};

export default FillButton;
