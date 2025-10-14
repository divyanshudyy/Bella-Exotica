import { motion } from "motion/react";
import CountUp from "../../ui/CountUp";
import CustomButton from "../../ui/CustomButton";
import { Link } from "react-router-dom";

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
        className="text-4xl md:text-5xl text-[#3D2B1F] font-oakes-grostek font-[700] capitalize"
      >
        Purpose in Every Pack.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-4 text-sm sm:text-base text-[#3D2B1F] max-w-2xl mx-auto"
      >
        We exist to create delicious snacks that are better for you and the
        planet. Every pack you purchase helps us rescue good food from going to
        waste and significantly reduce plastic use.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <div>
          <Link to="/products">
            <CustomButton text="Our Products" margin="mb-5 " />
          </Link>
        </div>
        <div>
          <Link to="/technology">
            <CustomButton text="Our Process" margin="mb-5 mx-5" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="mt-12 md:mt-16 bg-white/80 backdrop-blur-xs rounded-2xl shadow-sm p-8 md:p-12 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <CountUp endValue={1005} label="Products Bought" suffix="+" />
          <CountUp endValue={5500} label="Lbs of Food Saved" suffix="+" />
          <CountUp endValue={320} label="Kg of Plastic Reduced" suffix="+" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Counter;
