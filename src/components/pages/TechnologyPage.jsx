import Seo from "../seo/SeoScript";
import PageHero from "../ui/PageHero";
import ProcessContent from "../sections/process/ProcessContent";
import { motion } from "motion/react";
import { HERO } from "../../data/technologyData";

const TechnologyPage = () => {
  return (
    <>
      <Seo page="technology" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={HERO.imgUrl} text={HERO.title} />
        <motion.div
          className="div"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <ProcessContent />
        </motion.div>
      </main>
    </>
  );
};

export default TechnologyPage;
