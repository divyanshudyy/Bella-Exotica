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
import { REVIEWS } from "../../data/content";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <>
      <Seo page="home" />
      <main className="overflow-hidden">
        <Hero />
        <Showcase />
        <Quote />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Products />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Counter />
        </motion.div>
        <Highlight />
        <Certification />
        <ChooseUs />
        <Review reviews={REVIEWS} />
      </main>
    </>
  );
};

export default HomePage;
