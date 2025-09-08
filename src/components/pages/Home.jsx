import Hero from "../sections/Hero";
import Showcase from "../sections/Bowl";
import Products from "../sections/Products";
import Footer from "../layout/Footer";
import { useRef } from "react";
import Quote from "../sections/Quote";
import Highlight from "../sections/Highlight";

const Home = () => {
  const footerRef = useRef(null);

  return (
    <section>
      <Hero />
      {/* <Intro /> */}
      <Products />
      <Showcase />
      <Quote />
    <Highlight />
      <Footer footerRef={footerRef} />
    </section>
  );
};

export default Home;
