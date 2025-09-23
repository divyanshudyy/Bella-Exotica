import { Title, Meta, Link } from "react-head";
import { seoData } from "../../data/seoHead.js";

export default function SeoHead({ page }) {
  const data = seoData[page] || seoData.home;

  return (
    <>
      {/* Title */}
      <Title>{data.title}</Title>

      {/* Meta description */}
      <Meta name="description" content={data.description} />

      {/* Canonical URL */}
      <Link rel="canonical" href={data.url} />

      {/* Open Graph */}
      <Meta property="og:title" content={data.title} />
      <Meta property="og:description" content={data.description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={data.url} />
      <Meta property="og:image" content={data.image} />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={data.title} />
      <Meta name="twitter:description" content={data.description} />
      <Meta name="twitter:image" content={data.image} />
    </>
  );
}
