import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Highlight = () => {
  return (
    <section className="relative h-auto w-full flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/highlight/tldrawFile (4).png"
        alt="Premium freeze-dried products from Bella Exotica"
        className="w-full h-auto"
      />

      {/* Almond Jar */}
      <motion.div
        className="absolute top-[37.5%] left-[24%] "
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="capitalize tracking-normal text-4xl font-bold text-[#3D2B1F]">
          No Refined Sugar
        </p>
        <p className="text-3xl tracking-tighter font-semibold text-[#3D2B1F]">
          With Pure Delight
        </p>
      </motion.div>

      {/* Muesli Bowl */}
      <motion.div
        className="absolute top-[32%] right-[8%] "
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="capitalize tracking-normal text-4xl font-bold text-[#3D2B1F]">
          Purely Organic
        </p>
        <p className="text-3xl tracking-tighter font-semibold text-end text-[#3D2B1F]">
          With Nature
        </p>
      </motion.div>

      {/* Corn Flakes */}
      <motion.div
        className="absolute top-[54.5%] right-[17%] "
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <p className="capitalize tracking-normal text-4xl font-bold text-[#3D2B1F]">
          High Protein & Fibre
        </p>
        <p className="text-3xl tracking-tighter font-semibold text-end text-[#3D2B1F]">
          Rich Flavour
        </p>
      </motion.div>

      {/* Tasty Oats */}
      <motion.div
        className="absolute bottom-[32%] left-[32%] "
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <p className="capitalize tracking-normal text-4xl font-bold text-[#3D2B1F]">
          100% Whole Grains
        </p>
        <p className="text-3xl tracking-tighter font-semibold  text-[#3D2B1F]">
          Added Minerals
        </p>
      </motion.div>

      {/* Center Title */}
      <motion.div className="absolute top-[46%] left-1/2 -translate-x-1/2 text-center w-full">
        <h2 className="text-[4.5rem] font-bold text-[#306211] tracking-tighter">
          Healthy Organic Breakfast
        </h2>
        <p className="text-[#306211] text-5xl font-medium">
          Fresh · Wholesome · Nutritious
        </p>
      </motion.div>
    </section>
  );
};

export default Highlight;
