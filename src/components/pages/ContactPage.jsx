import Seo from "../seo/SeoScript";
import PageHero from "../ui/PageHero";
import ContactInfo from "../sections/contact/ContactInfo";
import Form from "../ui/Form";
import MapContent from "../ui/MapContent";
import FadeIn from "../ui/FadeIn";
import { HERO } from "../../data/contactData";

const ContactPage = () => {
  return (
    <>
      <Seo page="contact" />
      <main className="py-16 flex flex-col gap-10 overflow-hidden">
        <PageHero image={HERO.imgUrl} text={HERO.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-14 md:gap-16 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-20 pb-8 sm:pb-10 md:pb-12">
          <FadeIn y={60} amount={0.2}>
            <ContactInfo />
          </FadeIn>

          <FadeIn y={30} delay={0.2} amount={0.1}>
            <Form />
          </FadeIn>
        </div>

        <FadeIn y={30} delay={0.3} amount={0.1}>
          <MapContent heading={HERO.subtitle} para={HERO.paragraph} />
        </FadeIn>
      </main>
    </>
  );
};

export default ContactPage;
