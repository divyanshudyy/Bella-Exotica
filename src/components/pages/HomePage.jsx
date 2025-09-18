import { useRef } from "react";
import SeoHead from "../seo/SeoHead";
// import Schema from "../seo/Schema";

import Hero from "../sections/Hero";
// import Products from "../sections/Products";
import Showcase from "../sections/Bowl";
import Quote from "../sections/Quote";
import Highlight from "../sections/Highlight";
import Certification from "../sections/Certification";
import ChooseUs from "../sections/ChooseUs";
import Counter from "../sections/Counter";
import Review from "../sections/Review";
import Footer from "../layout/Footer";
import Products from "../sections/Productss";
import { REVIEWS } from "../../data/content";

const HomePage = () => {
  const footerRef = useRef(null);

  return (
    <>
      <SeoHead page="home" />
      {/* <Schema /> */}
      <main>
        <Hero />
        <Showcase />
        <Quote />
        <Counter />
        <Products />
        <ChooseUs />
        <div className="bg-[#F2F2F2] h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden py-4 sm:py-8">
          <Review reviews={REVIEWS} />
        </div>
        <Certification />

        <Footer footerRef={footerRef} />
      </main>
    </>
  );
};

export default HomePage;
