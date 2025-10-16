import SeoHead from "../seo/SeoHead";
import PageHero from "../ui/PageHero";
import AboutProcess from "../sections/about/AboutProcess";
import MapContent from "../ui/MapContent";
import { motion } from "motion/react";
import IntroContent from "../ui/IntroContent";

const AboutPage = () => {
  return (
    <>
      <SeoHead page="about" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={"/images/about/about-banner.png"} text={"About"} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <IntroContent
            title={"Our Journey"}
            subtitle={"“ Fresh. Wholesome. Thoughtfully Crafted. ”"}
            description={
              <>
                <p>
                  At Bella Exotica, every meal begins with the finest organic
                  ingredients sourced from trusted growers who share our
                  commitment to quality, sustainability, and care.
                </p>
                <p>
                  Our team of culinary experts and nutritionists works together
                  to create dishes that are balanced, flavorful, and nourishing.
                  Each recipe is carefully crafted to be free from artificial
                  preservatives and refined sugars, delivering food that is as
                  honest and wholesome as it is delicious.
                </p>
                <p>
                  From farm to fork, we preserve the natural taste, nutrients,
                  and aroma of every ingredient, offering a mindful dining
                  experience delivered straight to your door. Whether for your
                  daily routine or special occasions, Bella Exotica makes it
                  effortless to enjoy meals that fuel the body and delight the
                  senses.
                </p>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AboutProcess />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <MapContent
            heading={"Know Your Source"}
            para={
              "Discover the true origins of freshness and flavour. This is where our commitment to quality begins."
            }
          />
        </motion.div>
      </main>
    </>
  );
};

export default AboutPage;
