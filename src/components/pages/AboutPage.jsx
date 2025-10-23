import Seo from "../seo/SeoScript";
import PageHero from "../ui/PageHero";
import AboutProcess from "../sections/about/AboutProcess";
import MapContent from "../ui/MapContent";
import IntroContent from "../ui/IntroContent";
import { HERO } from "../../data/aboutData";
import FadeIn from "../ui/FadeIn";

const AboutPage = () => {
  return (
    <>
      <Seo page="about" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={HERO.imgUrl} text={HERO.title} />

        <FadeIn>
          <IntroContent
            title={HERO.subtitle_1}
            subtitle={HERO.subtitle_2}
            description={
              <>
                <p>{HERO.paragraph_1}</p>
                <p>{HERO.paragraph_2}</p>
                <p>{HERO.paragraph_3}</p>
              </>
            }
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <AboutProcess />
        </FadeIn>

        <FadeIn delay={0.4}>
          <MapContent heading={HERO.subtitle_3} para={HERO.paragraph_4} />
        </FadeIn>
      </main>
    </>
  );
};

export default AboutPage;
