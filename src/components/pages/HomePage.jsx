import Seo from "../seo/SeoScript";
import Hero from "../sections/Home/Hero";
import Showcase from "../sections/Home/Bowl";
import Quote from "../sections/Home/Quote";
import Highlight from "../sections/Home/Highlight";
import Certification from "../sections/Home/Certification";
import ChooseUs from "../sections/Home/ChooseUs";
import Counter from "../sections/Home/Counter";
import Review from "../sections/Home/Review";
import Products from "../sections/Home/Products";
import { motion } from "motion/react";

const fadeUp = (y = 50, delay = 0.5, duration = 0.8) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: "easeOut" },
  viewport: { once: true },
});

const HomePage = () => {
  return (
    <>
      <Seo page="home" />
      <main className="overflow-hidden">
        <Hero />
        <Showcase />
        <Quote />

        <motion.div {...fadeUp(50)}>
          <Products />
        </motion.div>

        <motion.div {...fadeUp(30)}>
          <Counter />
        </motion.div>

        <Highlight />
        <Certification />

        <motion.div {...fadeUp(70)}>
          <ChooseUs />
        </motion.div>

        <Review />
      </main>
    </>
  );
};

export default HomePage;
