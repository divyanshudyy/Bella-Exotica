import NotFound from "./NotFound";
import SeoHead from "../seo/SeoHead";

const ProductsPage = () => {
  return (
    <>
      <SeoHead page="products" />
      <section>
        <NotFound />
      </section>
    </>
  );
};

export default ProductsPage;
