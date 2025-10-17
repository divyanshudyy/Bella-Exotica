import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay },
  }),
};

const highlights = [
  {
    id: 1,
    position: "top-[7%] left-[5%]",
    title: "No Refined Sugar",
    subtitle: "With Pure Delight",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F]",
    delay: 0.2,
  },
  {
    id: 2,
    position: "top-[32%] right-[12%]",
    title: "Purely Organic",
    subtitle: "With Nature",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F] text-end",
    delay: 0.2,
  },
  {
    id: 3,
    position: "bottom-[6%] right-[22%]",
    title: "High Protein & Fibre",
    subtitle: "Rich Flavour",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F] text-end",
    delay: 0.2,
  },
  {
    id: 4,
    position: "bottom-[34%] left-[24%]",
    title: "100% Whole Grains",
    subtitle: "Added Minerals",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F]",
    delay: 0.2,
  },
];

const Highlight = () => {
  return (
    <section className="relative h-auto w-full flex items-center justify-center">
      {/* Background Image */}
      <motion.img
        src="/images/highlight/tldrawFile (4).png"
        alt="Premium freeze-dried products from Bella Exotica"
        className="w-full h-auto"
        initial={{ filter: "blur(14px)", opacity: 0.7 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Loop through highlights */}
      {highlights.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.position} bg-[#F2F2F2] px-3 md:px-10 py-1 md:py-7 rounded-full shadow-md`}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={item.delay}
          viewport={{ once: true }}
        >
          <p
            className={`capitalize font-bold font-oakes-grotesk ${item.titleAlign}`}
            style={{
              fontSize: `clamp(0.75rem, 2.2vw, 2rem)`, // smaller start, scales smoothly
            }}
          >
            {item.title}
          </p>
          <p
            className={`font-semibold font-oakes-grotesk ${item.subtitleAlign}`}
            style={{
              fontSize: `clamp(0.65rem, 1.8vw, 1.5rem)`, // tighter for subtitles
            }}
          >
            {item.subtitle}
          </p>
        </motion.div>
      ))}

      {/* Center Title */}
      <div className="absolute top-[45%] text-center px-10 py-5">
        <h2
          className="font-bold text-[#306211] font-oakes-grotesk"
          style={{
            fontSize: "clamp(1.2rem, 4.2vw, 4rem)", // starts smaller on mobile
          }}
        >
          Healthy Organic Breakfast
        </h2>
        <p
          className="text-[#306211] font-normal font-oakes-grotesk"
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 3rem)", // subtle subtitle scaling
          }}
        >
          Fresh · Wholesome · Nutritious
        </p>
      </div>
    </section>
  );
};

export default Highlight;
