import GlobeViz from "../sections/b2b/GlobeViz";
import PageHero from "../ui/PageHero";
import ContactInfo from "../sections/contact/ContactInfo";
import Form from "../ui/Form";
import B2bContent from "../sections/b2b/B2bContent";
import { motion } from "motion/react";
import IntroContent from "../ui/IntroContent";
import Seo from "../seo/SeoScript";

const B2BPage = () => {
  return (
    <>
      <Seo page="b2b" />
      <main className="py-16 flex flex-col gap-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <PageHero
            image={"/images/contact/contact-banner.png"}
            text={"Collaboration"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <B2bContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <IntroContent
            title={"Global Exports"}
            subtitle={"“ Natural. Trusted. Worldwide. ”"}
            description={
              <>
                <p>
                  Our story is deeply rooted in the rich, natural landscapes of
                  India. While we begin by serving our local community, our
                  vision is to share this authentic goodness with the world.
                </p>
                <p>
                  We are building our export strategy on a foundation of product
                  integrity, reliability, and a commitment to forming trusted
                  global partnerships. Our ambition is to bring the wholesome,
                  exquisite taste of modern India to tables everywhere.
                </p>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <GlobeViz />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-14 md:gap-15 lg:gap-15 px-4 sm:px-8 md:px-12 lg:px-20 pb-8 sm:pb-10 md:pb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ContactInfo />
          <Form />
        </motion.div>
      </main>
    </>
  );
};

export default B2BPage;
