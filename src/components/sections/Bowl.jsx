import React, { useState } from "react";
import { motion } from "framer-motion";

// Category data
const categoryData = [
  {
    id: 1,
    imageUrl: "/images/bowl/ingredients/Oats Bowl.png",
    name: "Oats",
  },
  {
    id: 2,
    imageUrl: "/images/bowl/ingredients/Museli Bowl.png",
    name: "Museli",
  },
  {
    id: 3,
    imageUrl: "/images/bowl/ingredients/CornFlakes Bowl.png",
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
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// Bowl animation
const bowlVariants = {
  hidden: { y: 800 },
  show: {
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Full image section
const Bowl = ({ category }) => {
  const textImages = [
    "Delicious.png",
    "EnergizingStart.png",
    "NaturalSweetness.png",
    "Nutritious&Wholesome.png",
    "RealFruits.png",
    "RichFiber.png",
  ];

  return (
    <section className="h-[120%] w-full">
      <motion.div
        className="relative w-full h-screen flex items-center justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        key={category.id}
      >
        {/* Background Spread */}
        <motion.img
          src="/images/bowl/ingredients/Spread.png"
          className="absolute object-contain left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2"
          variants={bowlVariants}
        />

        {/* Bowl image */}
        <motion.img
          src={category.imageUrl}
          alt={category.name}
          className="absolute z-1 w-[90%] h-[90%] object-contain drop-shadow-[0_10px_9px_rgba(0,0,0,0.5)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={bowlVariants}
        />
        {/* Text images staggered AFTER bowl animation */}
        <motion.div
          variants={textContainerVariants}
          className="absolute inset-0 flex items-center justify-center"
        >
          {textImages.map((file, i) => (
            <motion.img
              key={i}
              src={`/images/bowl/text img/${file}`}
              className="absolute object-contain"
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
    <header className="absolute top-0 left-0 w-full py-6 z-10">
      <nav className="flex justify-center items-center space-x-6 md:space-x-10 px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className={`group relative text-xs md:text-sm tracking-widest font-semibold uppercase transition-colors duration-300 pb-1 
              ${
                selectedCategory.id === category.id
                  ? "text-black scale-[1.2] transition-transform ease-in-out duration-500"
                  : "text-gray-400 hover:text-gray-700"
              }`}
          >
            {category.name}

            {/* Animated underline */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-500 ease-in-out
                ${
                  selectedCategory.id === category.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
            ></span>
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
    <div className="relative w-full h-screen">
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
