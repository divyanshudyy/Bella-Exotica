import SeoHead from "../seo/SeoHead";
import PageHero from "../ui/PageHero";
import ProcessContent from "../sections/process/ProcessContent";

const TechnologyPage = () => {
  return (
    <>
      <SeoHead page="technology" />
      <main className="py-18 px-10 flex flex-col gap-20">
        <PageHero
          image={"/images/contact/contact-banner.png"}
          text={"Our Process"}
        />
        <ProcessContent />
      </main>
    </>
  );
};

export default TechnologyPage;
