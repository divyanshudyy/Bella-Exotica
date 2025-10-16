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

const HomePage = () => {
  return (
    <>
      <Seo page="home" />
      {/* <Schema /> */}
      <main className="overflow-hidden">
        <Hero />
        <Showcase />
        <Quote />
        <Products />
        <Counter />
        <Highlight />
        <Certification />
        <ChooseUs />
        <Review reviews={REVIEWS} />
      </main>
    </>
  );
};

export default HomePage;

// <div className="h-screen w-full flex flex-col items-center justify-center font-sans overflow-hidden py-4 sm:py-8">
//           <Review reviews={REVIEWS} />
//         </div>
