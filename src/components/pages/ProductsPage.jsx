import { motion } from "motion/react";
import PageHero from "../ui/PageHero";
import ListingProducts from "../sections/product/ListingProducts";
import Seo from "../seo/SeoScript";
import { HERO } from "../../data/productsData";

const ProductsPage = () => {
  return (
    <>
      <Seo page="products" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={HERO.imgUrl} text={HERO.title} />

        <motion.div
          className="px-5 sm:px-10 md:px-10 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <ListingProducts />
        </motion.div>
      </main>
    </>
  );
};

export default ProductsPage;
