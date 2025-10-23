export const CATEGORIES = ["All", "Oats", "Berries", "Nuts", "Museli"];

export const MAP_LOCATIONS = [
  {
    id: "home-base",
    name: "Our Headquarters",
    type: "home",
    position: { lat: 23.1135, lng: 70.026 },
  },
  {
    id: "place-1",
    name: "Ambaji Temple",
    type: "temple",
    position: { lat: 23.07, lng: 70.03 },
  },
  {
    id: "place-2",
    name: "Pashwadi Khara Village",
    type: "village",
    position: { lat: 23.1, lng: 70.02 },
  },
  {
    id: "place-3",
    name: "Varsamedi Village",
    type: "village",
    position: { lat: 23.09, lng: 70.01 },
  },
  {
    id: "place-4",
    name: "Modvadar Village",
    type: "village",
    position: { lat: 23.08, lng: 70.04 },
  },
  {
    id: "place-5",
    name: "Bageshree Township",
    type: "township",
    position: { lat: 23.06, lng: 70.05 },
  },
];

export const MAP_CONFIG = {
  centerCoordinates: [23.1135, 70.026],
  initialZoomLevel: 13,
  tileLayerUrl:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
  tileAttribution: "© OpenStreetMap contributors © CARTO",
  headerText: "Bella Exotica Pvt Ltd, Gujarat, India",
};

export const HEADER = {
  logoText: "Bella Exotica",
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Technology", path: "/technology" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  b2bButtonText: "Let's Collaborate",
};

export const FOOTER = {
  logoText: "Bella Exotica",
  description:
    "Explore Bella Exotica for premium organic meals and snacks, thoughtfully prepared and delivered with a commitment to taste, health, and environmental responsibility.",
  sections: [
    {
      heading: "Our Service",
      links: [
        { name: "Process", path: "/technology" },
        { name: "My Account", path: "/account" },
        { name: "Products", path: "/products" },
        { name: "Payment", path: "/checkout" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { name: "Reviews", path: "/" },
        { name: "Location", path: "/about" },
        { name: "Exports", path: "/b2b" },
        { name: "Ingredients", path: "/about" },
      ],
    },
    {
      heading: "Our Story",
      links: [
        { name: "About us", path: "/about" },
        { name: "Partners", path: "/b2b" },
        { name: "Purpose", path: "/" },
        { name: "Contact us", path: "/contact" },
      ],
    },
  ],
  contactButtonText: "Get in touch",
  bottomLinks: [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "www.bellaexotica.com", path: "/" },
  ],
  copyright: "© 2025 Bella Exotica",
};
