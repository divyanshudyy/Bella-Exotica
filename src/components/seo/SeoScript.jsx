import { Title, Meta, Link } from "react-head";
import { seoData } from "../../data/seoData.js";

export default function Seo({ page }) {
  const data = seoData[page] || seoData.home;

  // Clean site root URL
  const siteRoot = new URL("/", data.url).href;

  // Map page names for breadcrumbs
  const pageNames = {
    home: "Home",
    about: "About",
    contact: "Contact",
    products: "Products",
    technology: "Technology",
    b2b: "B2B",
  };

  // Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bella Exotica",
    url: data.url,
    logo: `${data.url}/images/logo/logo.jpg`,
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
    ],
  };

  // Breadcrumb JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteRoot },
      page !== "home"
        ? {
            "@type": "ListItem",
            position: 2,
            name:
              pageNames[page] || page.charAt(0).toUpperCase() + page.slice(1),
            item: data.url,
          }
        : null,
    ].filter(Boolean),
  };

  // WebSite JSON-LD (extra for sitelinks & search relevance)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bella Exotica",
    url: siteRoot,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteRoot}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

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

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </>
  );
}
