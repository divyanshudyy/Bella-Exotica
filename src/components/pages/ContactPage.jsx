import Form from "../ui/Form";
import ContactInfo from "../sections/contact/ContactInfo";
import PageHero from "../ui/PageHero";
import MapContent from "../ui/MapContent";
import { motion } from "motion/react";
import Seo from "../seo/SeoScript";

const ContactPage = () => {
  return (
    <>
      <Seo page="contact" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={"/images/hero/contact-hero.webp"} text={"Contact"} />

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-14 md:gap-16 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-20 pb-8 sm:pb-10 md:pb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactInfo />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Form />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <MapContent
            heading={"Our Location"}
            para={
              "Discover the true origins of freshness and flavour. This is where our commitment to quality begins."
            }
          />
        </motion.div>
      </main>
    </>
  );
};

export default ContactPage;
