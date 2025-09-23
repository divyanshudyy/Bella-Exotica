import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Highlight = () => {
  return (
    <section className="relative h-auto w-full flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/images/highlight/tldrawFile (4).png"
        alt="Healthy Organic Breakfast"
        className="w-full h-auto"
      />

      {/* Almond Jar */}
      <motion.div
        className="absolute top-[37.5%] left-[24%] text-[#464A45]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="uppercase tracking-normal text-4xl font-bold">
          ALMOND JAR
        </p>
        <p className="text-3xl tracking-tighter font-semibold">
          With Vitamin A
        </p>
      </motion.div>

      {/* Muesli Bowl */}
      <motion.div
        className="absolute top-[32%] right-[8%] text-[#464A45]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="uppercase tracking-normal text-4xl font-bold">
          MUESLI BOWL
        </p>
        <p className="text-3xl tracking-tighter font-semibold text-end">
          With Fibres
        </p>
      </motion.div>

      {/* Corn Flakes */}
      <motion.div
        className="absolute top-[54.5%] right-[17%] text-[#464A45]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="uppercase tracking-normal text-4xl font-bold">
          CORN FLAKES
        </p>
        <p className="text-3xl tracking-tighter font-semibold text-end">
          Morning Crunch
        </p>
      </motion.div>

      {/* Tasty Oats */}
      <motion.div
        className="absolute bottom-[32%] left-[32%] text-[#464A45]"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="uppercase tracking-normal text-4xl font-bold">
          TASTY OATS
        </p>
        <p className="text-3xl tracking-tighter font-semibold">High Protein</p>
      </motion.div>

      {/* Center Title */}
      <motion.div
        className="absolute top-[46%] left-1/2 -translate-x-1/2 text-center w-full"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
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
