import React, { useState } from "react";
import { motion } from "motion/react";

// Category data
const categoryData = [
  {
    id: 1,
    imageUrl: "/images/bowl/ingredients/Oats Bowl.webp",
    name: "Oats",
  },
  {
    id: 2,
    imageUrl: "/images/bowl/ingredients/Museli Bowl.webp",
    name: "Museli",
  },
  {
    id: 3,
    imageUrl: "/images/bowl/ingredients/CornFlakes Bowl.webp",
    name: "Flakes",
  },
];

// Container only for text images (stagger control)
const textContainerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3, // wait until bowl finishes
      staggerChildren: 0.1,
    },
  },
};

// Zoom animation (text images)
const zoomVariants = {
  hidden: { scaleY: 1, scaleX: 1, opacity: 0 },
  show: {
    scaleY: [0, 1], // height goes almost flat
    scaleX: [1, 1], // slight stretch on width to emphasize squash
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
// Bowl animation
const bowlVariants = {
  hidden: { y: 1000 },
  show: {
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Full image section
const Bowl = ({ category }) => {
  const textImages = [
    "Nutritious&Wholesome.webp",
    "RichFiber.webp",
    "RealFruits.webp",
    "EnergizingStart.webp",
    "NaturalSweetness.webp",
    "Delicious.webp",
  ];

  return (
    <section className="w-full md:min-h-screen overflow-hidden">
      <motion.div
        className="relative w-full h-120 sm:min-h-svh md:min-h-svh flex items-center justify-center "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        key={category.id}
      >
        {/* Background Spread */}
        <motion.img
          src="/images/bowl/ingredients/Spread.png"
          className="absolute md:h-[80%] md:w-[80%] object-contain left-1/2 md:top-[53%] top-[60%]  -translate-x-1/2 -translate-y-1/2"
          alt="Fruits and nuts spread behind the bowl"
          variants={bowlVariants}
        />

        {/* Bowl image */}
        <motion.img
          src={category.imageUrl}
          alt={` ${category.name} with milk`}
          className="absolute z-1 md:w-[70%]  object-contain left-1/2 top-[60%] md:top-[58%] -translate-x-1/2 -translate-y-1/2"
          variants={bowlVariants}
        />
        <motion.div
          variants={textContainerVariants}
          className="absolute inset-0 flex items-center justify-center w-full md:h-full md:top-[7%] top-[25%]"
        >
          {textImages.map((file, i) => (
            <motion.img
              key={i}
              src={`/images/bowl/text img/${file}`}
              className="absolute object-cover md:h-[85%] h-[75%]"
              alt={`Text heading: ${file.replace(".webp", "")}`}
              variants={zoomVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Header Navigation
const Header = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <header className="absolute top-0 left-0 w-full  py-6 z-10">
      <h1 className="text-4xl md:text-5xl text-[#3D2B1F] text-center Capitalize mb-4  font-oakes-grostek font-[700]">
        Unleash Your Morning.
      </h1>
      <nav
        className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-2 animate-fadeInUp"
        style={{ animationDelay: "300ms" }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`text-sm md:text-md uppercase font-semibold tracking-wider transition-all duration-300 px-4 py-2 rounded-full ${
              selectedCategory.id === category.id
                ? "text-white bg-[#3D2B1F] shadow-md scale-[1.05] transition-transform ease-in-out duration-500"
                : "text-gray-500 hover:bg-[#4a2c2a] hover:text-[#fdfbf7]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

// Main Showcase Component
const Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryData[1]);

  return (
    <div className="relative w-full sm:w-full md:h-screen">
      {/* Header overlay */}
      <Header
        categories={categoryData}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Full image */}
      <Bowl category={selectedCategory} />
    </div>
  );
};

export default Showcase;
