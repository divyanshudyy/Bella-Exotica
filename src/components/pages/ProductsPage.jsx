import PageHero from "../ui/PageHero";
import ListingProducts from "../sections/product/ListingProducts";
import SeoHead from "../seo/SeoHead";

const ProductsPage = () => {
  return (
    <>
      <SeoHead page="products" />
      <main className="py-18 px-10 flex flex-col gap-20">
        <PageHero
          image={"/images/productspage/product-banner.png"}
          text={"Products"}
        />
        <ListingProducts />
      </main>
    </>
  );
};

export default ProductsPage;
