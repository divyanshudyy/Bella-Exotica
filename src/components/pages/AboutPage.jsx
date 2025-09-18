import NotFound from "./NotFound";
import SeoHead from "../seo/SeoHead";

const AboutPage = () => {
  return (
    <>
      <SeoHead page="about" />
      <section>
        <NotFound />
      </section>
    </>
  );
};

export default AboutPage;
