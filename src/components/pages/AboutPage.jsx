import SeoHead from "../seo/SeoHead";
import PageHero from "../ui/PageHero";
import AboutStory from "../sections/about/AboutStory";
import AboutProcess from "../sections/about/AboutProcess";
import MapContent from "../ui/MapContent";

const AboutPage = () => {
  return (
    <>
      <SeoHead page="about" />
      <main className="py-18 px-10 flex flex-col gap-10">
        <PageHero image={"/images/about/about-banner.png"} text={"About"} />
        <AboutStory />
        <AboutProcess />
        <MapContent
          heading={"Know Your Source"}
          para={
            "Discover the true origins of freshness and flavour. This is where our commitment to quality begins."
          }
        />
      </main>
    </>
  );
};

export default AboutPage;
