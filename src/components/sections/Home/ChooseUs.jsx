import { motion } from "motion/react";
import { Leaf, Salad, Recycle, CircleSlash } from "lucide-react";
import { WHY_CHOOSE_US_SECTION } from "../../../data/homeData";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const ICONS = [Leaf, Salad, Recycle, CircleSlash];

const Dots = ({ color }) => (
  <div className="flex flex-col items-center my-3" style={{ color }}>
    <span className="block w-1.5 h-1.5 bg-current rounded-full"></span>
    <span className="block w-1.5 h-1.5 bg-current rounded-full my-1"></span>
    <span className="block w-1.5 h-1.5 bg-current rounded-full"></span>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="relative min-h-full w-full flex justify-center items-center py-20">
      <div className="relative w-full max-w-7xl py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white rounded-3xl md:rounded-5xl shadow-lg mx-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-16 z-10 relative"
        >
          <h2 className="text-3xl md:text-[3.3rem] font-bold text-[#3D2B1F] font-hanken-grotesk">
            {WHY_CHOOSE_US_SECTION.heading}
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {WHY_CHOOSE_US_SECTION.features.map((feature, index) => {
            const IconComponent = ICONS[index];

            const TitleAndDescription = () => (
              <div className="text-center">
                <h3 className="font-semibold text-[#3D2B1F]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={cardVariants}
              >
                {feature.textPosition === "top" && <TitleAndDescription />}

                <div className="flex flex-col items-center">
                  {feature.textPosition === "top" && (
                    <Dots color={feature.color} />
                  )}

                  {/* Filled Circle with White Icon */}
                  <div className="flex items-center justify-center w-15 h-15 rounded-full bg-[#3D2B1F] shadow-md transition-transform duration-300 hover:scale-105">
                    <IconComponent
                      size={36}
                      color="#FFFFFF"
                      strokeWidth={1.5}
                    />
                  </div>

                  {feature.textPosition === "bottom" && (
                    <Dots color={feature.color} />
                  )}
                </div>

                {feature.textPosition === "bottom" && <TitleAndDescription />}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
