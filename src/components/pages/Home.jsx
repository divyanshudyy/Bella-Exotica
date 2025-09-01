import About from "../sections/About";
import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import Intro from "../sections/Intro";
import Products from "../sections/Products";
import Contact from "../sections/Contact";
import Footer from "../layout/Footer";
import { useRef } from "react";

const Home = () => {
  const footerRef = useRef(null);

  return (
    <section className="bg-[#F5E6CA]">
      <Hero />
      <Intro />
      <Highlights />
      <About />
      <Products />
      <div className="relative">
        <Contact footerRef={footerRef} />

        {/* Footer */}
        <Footer footerRef={footerRef} />
      </div>
    </section>
  );
};

export default Home;
