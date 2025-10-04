import { motion } from "motion/react";
import { Leaf, Salad, Recycle, CircleSlash } from "lucide-react";

// --- Feature Data ---
const features = [
  {
    icon: Leaf,
    title: "High quality ingredients",
    description: "from the best farms",
    color: "#34241D", // teal-500
    textPosition: "top",
  },
  {
    icon: Salad,
    title: "Delicious and healthy meals",
    description: "Where Health and Taste Align",
    color: "#34241D", // pink-500
    textPosition: "bottom",
  },
  {
    icon: Recycle,
    title: "Eco-friendly food",
    description: "packaging for delivery",
    color: "#34241D", // teal-500
    textPosition: "top",
  },
  {
    icon: CircleSlash,
    title: "Purity and Freshness",
    description: "With 0% Artifical Additives",
    color: "#34241D", // pink-500
    textPosition: "bottom",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- Helper Component ---
const Dots = ({ color }) => (
  <div className="flex flex-col items-center my-3" style={{ color }}>
    <span className="block w-1.5 h-1.5 bg-current rounded-full"></span>
    <span className="block w-1.5 h-1.5 bg-current rounded-full my-1"></span>
    <span className="block w-1.5 h-1.5 bg-current rounded-full"></span>
  </div>
);

// --- Main Component ---
const WhyChooseUs = () => {
  return (
    <section className="relative min-h-full w-full flex justify-center items-center">
      <div className="relative w-full max-w-6xl py-20 px-4 sm:px-6 lg:px-8 md:my-30 overflow-hidden bg-white rounded-3xl shadow-md">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-16 z-10 relative"
        >
          <h2 className="text-4xl font-semibold text-gray-800">
            Why Choose Bella Exotica?
          </h2>
        </motion.div>

        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const TitleAndDescription = () => (
              <div className="text-center">
                <h3 className="font-semibold text-gray-700">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
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
                  {feature.textPosition === "top" ? (
                    <Dots color={feature.color} />
                  ) : null}
                  <IconComponent
                    size={40}
                    color={feature.color}
                    strokeWidth={1.5}
                  />
                  {feature.textPosition === "bottom" ? (
                    <Dots color={feature.color} />
                  ) : null}
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
