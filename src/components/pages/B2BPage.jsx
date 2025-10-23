import Globe from "../sections/b2b/GlobeViz";
import PageHero from "../ui/PageHero";
import ContactInfo from "../sections/contact/ContactInfo";
import Form from "../ui/Form";
import FadeIn from "../ui/FadeIn";
import B2bContent from "../sections/b2b/B2bContent";
import IntroContent from "../ui/IntroContent";
import Seo from "../seo/SeoScript";
import { HERO } from "../../data/b2bData";

const B2BPage = () => {
  return (
    <>
      <Seo page="b2b" />
      <main className="py-16 flex flex-col gap-12 overflow-hidden">
        <FadeIn>
          <PageHero image={HERO.imgUrl} text={HERO.title} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <B2bContent />
        </FadeIn>

        <FadeIn delay={0.4}>
          <IntroContent
            title={HERO.subtitle_1}
            subtitle={HERO.subtitle_2}
            description={
              <>
                <p>{HERO.paragraph_1}</p>
                <p>{HERO.paragraph_2}</p>
              </>
            }
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <Globe />
        </FadeIn>

        {/* Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-14 md:gap-16 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-20 pb-8 sm:pb-10 md:pb-12">
          <FadeIn y={60} amount={0.2}>
            <ContactInfo />
          </FadeIn>

          <FadeIn y={30} delay={0.2} amount={0.1}>
            <Form />
          </FadeIn>
        </div>
      </main>
    </>
  );
};

export default B2BPage;
