import { Script } from "react-head";

const siteUrl = "https://www.bellaexotica.com";
const logoUrl = `${siteUrl}/images/logo/logo.jpg`;

export default function Schema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bella Exotica",
    url: siteUrl,
    logo: logoUrl,
    // sameAs: [
    //   "https://www.facebook.com/bellaexotica",
    //   "https://www.instagram.com/bellaexotica",
    // ],
  };

  return (
    <Script type="application/ld+json">{JSON.stringify([organization])}</Script>
  );
}
