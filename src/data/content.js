export const hero = {
  title: ["Bella", "Exotica"],
  subtitle: [
    "Premium freeze-dried and dehydrated",
    " foods crafted for freshness, nutrition",
    "and long shelf life.",
  ],
};

export const intro = {
  title1: " Healthy Food",
  title2: "Future Ready",
  description:
    "Bella Exotica Foods, based in Gandhidham, Gujarat, produces premium freeze-dried and dehydrated fruits, vegetables, herbs, and spices that are nutritious, long-lasting, and full of flavor.",
  button: "Learn More",
  images: [
    "/images/metin-ozer-2GT3z_R0bco-unsplash.jpg",
    "/images/purvi-shah-CJljgde_4zg-unsplash.jpg",
    "/images/uliana-kopanytsia-7SfBWchOVpw-unsplash.jpg",
    "/images/widuri-putri-cfAzVP-N0Fo-unsplash.jpg",
  ],
};

export const highlights = [
  {
    title: "Advanced Technology",
    desc: "Cutting-edge freeze-drying and dehydration processes. Utilizing the latest machinery and precision techniques, our technology ensures optimal texture, color, and shelf-life for every product.",
    image: "/images/purvi-shah-CJljgde_4zg-unsplash.jpg",
  },
  {
    title: "Nutrient Retention",
    desc: "Preserves up to 97% of the original vitamins, minerals, and flavor. Our methods safeguard the natural essence of ingredients, maintaining peak freshness and health benefits for consumers.",
    image: "/images/widuri-putri-cfAzVP-N0Fo-unsplash.jpg",
  },
  {
    title: "Global Standards",
    desc: "Built for international food safety and export compliance. Every step meets stringent quality checks, ensuring products are trusted and loved across diverse markets worldwide.",
    image: "/images/uliana-kopanytsia-7SfBWchOVpw-unsplash.jpg",
  },
];

export const products = [
  { id: 1, name: "Product 1", image: "/images/71IhSmiyXAL._SL1500_.png" },
  { id: 2, name: "Product 2", image: "/images/71IhSmiyXAL._SL1500_.png" },
  { id: 3, name: "Product 3", image: "/images/71IhSmiyXAL._SL1500_.png" },
  { id: 4, name: "Product 4", image: "/images/71IhSmiyXAL._SL1500_.png" },
  { id: 5, name: "Product 5", image: "/images/71IhSmiyXAL._SL1500_.png" },
];

// <div className="sticky top-0 h-screen grid place-items-center">
//   {cards.map((card, i) => {
//     const Icon = card.icon;
//     return (
//       <motion.div
//         key={i}
//         style={{
//           y: card.y,
//           opacity: card.opacity,
//           scale: card.scale,
//           zIndex: card.zIndex,
//         }}
//         className={`absolute w-[80vw] h-[90vh]   flex flex-col gap-3 bg-[#F5E6CA] overflow-hidden`}
//       >
//         <div className="overflow-hidden ">
//           <img src={card.image} alt="" />
//         </div>
//         {/* <Icon className="w-12 h-12 text-[#3D2B1F]" /> */}
//         <h3 className="text-5xl font-bold text-[#3D2B1F]">
//           {card.title}
//         </h3>
//         <p className={`text-lg leading-relaxed `}>{card.desc}</p>
//       </motion.div>
//     );
//   })}
// </div>
