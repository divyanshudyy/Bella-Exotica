import { useState } from "react";
import { motion } from "motion/react";
import CategoryFilters from "../../ui/products/CategoryFilters";
import { SHOWCASE } from "../../../data/homeData";

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
  hidden: { y: 800, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Full image section
const Bowl = ({ category }) => {
  return (
    <section className="w-full overflow-hidden">
      <motion.div
        className="relative w-full flex flex-col items-center justify-center pt-30 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        key={category.id}
      >
        {/* Bowl image wrapper */}
        <div className="w-full flex justify-center my-6 md:my-10">
          {(() => {
            const selectedBowl = SHOWCASE.bowls.find(
              (bowl) => bowl.id === category.id
            );
            return (
              <motion.img
                key={selectedBowl.id}
                src={selectedBowl.imageUrl}
                alt={selectedBowl.alt}
                className="w-[100%] md:w-[70%] object-contain"
                variants={bowlVariants}
              />
            );
          })()}
        </div>

        {/* Text images overlay */}
        <motion.div
          variants={textContainerVariants}
          className="absolute inset-0 flex items-center justify-center w-full mt-25 md:my-10"
        >
          {SHOWCASE.textImages.map((file, i) => (
            <motion.img
              key={i}
              src={`/images/gallery/showcase/texts/${file}`}
              className="absolute object-cover lg:w-[85%] w-full md:scale-100 scale-125"
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
      <h1 className="text-3xl sm:text-5xl font-bold text-[#3D2B1F] text-center Capitalize mb-4  font-oakes-grostek">
        Unleash Your Morning.
      </h1>
      <nav
        className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-2 animate-fadeInUp"
        style={{ animationDelay: "300ms" }}
      >
        <CategoryFilters
          mt={"mt-0 md:mt-0"}
          bgColor="bg-[#F2F2F2]"
          categories={categories.map((c) => c.name)} // pass only the names
          activeCategory={selectedCategory.name} // pass active category name
          setActiveCategory={(name) => {
            const category = categories.find((c) => c.name === name);
            if (category) onSelectCategory(category);
          }}
        />
      </nav>
    </header>
  );
};

// Main Showcase Component
const Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    SHOWCASE.categories[1]
  );

  return (
    <div className="relative">
      {/* Header overlay */}
      <Header
        categories={SHOWCASE.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Full image */}
      <Bowl category={selectedCategory} />
    </div>
  );
};

export default Showcase;
