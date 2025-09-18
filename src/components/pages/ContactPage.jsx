import NotFound from "./NotFound";
import SeoHead from "../seo/SeoHead";

const ContactPage = () => {
  return (
    <>
      <SeoHead page="contact" />
      <section>
        <NotFound />
      </section>
    </>
  );
};

export default ContactPage;
