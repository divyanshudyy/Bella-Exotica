import { motion } from "motion/react";
import CountUp from "../../ui/CountUp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.5,
    },
  },
};

const Counter = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-4 py-8 md:py-16 text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
      >
        Goodness that Lasts, Naturally.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
      >
        We gently dehydrate the best seasonal produce to lock in flavor and
        nutrients. Perfect for your pantry, your backpack, and a healthier
        planet.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <button className="bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300 w-full sm:w-auto">
          Shop Our Snacks
        </button>
        <button className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto">
          Our Process
        </button>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="mt-12 md:mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <CountUp endValue={10500} label="Products Bought" suffix="+" />
          <CountUp endValue={5500} label="Lbs of Food Saved" suffix="+" />
          <CountUp endValue={300} label="Kg of Plastic Reduced" suffix="+" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Counter;
