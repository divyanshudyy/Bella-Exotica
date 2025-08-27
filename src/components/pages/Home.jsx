import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import Intro from "../sections/Intro";

const Home = () => {
  return (
    <section className="  bg-[#F5E6CA]">
      <Hero />
      <Intro />
      <Highlights />
    </section>
  );
};

export default Home;
