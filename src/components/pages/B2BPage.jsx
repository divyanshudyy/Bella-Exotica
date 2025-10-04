import GlobeViz from "../sections/b2b/GlobeViz";
import PageHero from "../ui/PageHero";
import ContactInfo from "../sections/contact/ContactInfo";
import Form from "../ui/Form";
import B2bContent from "../sections/b2b/B2bContent";

const B2BPage = () => {
  return (
    <main className="py-18 px-10 flex flex-col gap-20">
      <PageHero image={"/images/contact/contact-banner.png"} text={"B2B"} />
      <B2bContent />
      <GlobeViz />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start overflow-hidden px-20">
        <ContactInfo />
        <Form />
      </div>
    </main>
  );
};

export default B2BPage;
