import SeoHead from "../seo/SeoHead";
// import Schema from "../seo/Schema";

import Hero from "../sections/Home/Hero";
// import Products from "../sections/Products";
import Showcase from "../sections/Home/Bowl";
import Quote from "../sections/Home/Quote";
import Highlight from "../sections/Home/Highlight";
import Certification from "../sections/Home/Certification";
import ChooseUs from "../sections/Home/ChooseUs";
import Counter from "../sections/Home/Counter";
import Review from "../sections/Home/Review";
import Footer from "../layout/Footer";
import Products from "../sections/Home/Productss";
import { REVIEWS } from "../../data/content";

const HomePage = () => {
  return (
    <>
      <SeoHead page="home" />
      {/* <Schema /> */}
      <main className="">
        <Hero />
        <Showcase />
        <Quote />
        <Highlight />
        <Counter />
        <Products />
        <ChooseUs />
        <div className="h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden py-4 sm:py-8">
          <Review reviews={REVIEWS} />
        </div>
        <Certification />
      </main>
    </>
  );
};

export default HomePage;
