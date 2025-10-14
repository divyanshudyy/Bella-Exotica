import SeoHead from "../seo/SeoHead";
import PageHero from "../ui/PageHero";
import ProcessContent from "../sections/process/ProcessContent";
import { motion } from "motion/react";

const TechnologyPage = () => {
  return (
    <>
      <SeoHead page="technology" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero
          image={"/images/contact/contact-banner.png"}
          text={"Technology"}
        />
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
