import { motion } from "motion/react";

const FadeIn = ({ children, y = 30, delay = 0, amount = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
