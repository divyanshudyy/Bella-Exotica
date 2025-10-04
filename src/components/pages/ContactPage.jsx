import Form from "../ui/Form";
import ContactInfo from "../sections/contact/ContactInfo";
import PageHero from "../ui/PageHero";
import MapContent from "../ui/MapContent";
import SeoHead from "../seo/SeoHead";

const ContactPage = () => {
  return (
    <>
      <SeoHead page="contact" />
      <main className="py-18 px-10 flex flex-col gap-20">
        <PageHero
          image={"/images/contact/contact-banner.png"}
          text={"Contact"}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start overflow-hidden px-20">
          <ContactInfo />
          <Form />
        </div>
        <MapContent />
      </main>
    </>
  );
};

export default ContactPage;
