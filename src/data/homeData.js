//hero section
export const HERO = {
  title: "Pure taste timeless nutrition",
  subtitle: "Premium Organic Cereals, Granolas & Nuts",
  cta: "Explore Collection",
  imgAlt:
    "Bella Exotica organic products including oats, muesli, granola, cereals, and almonds",
};

//showcase section
export const SHOWCASE = {
  header: {
    title: "Unleash Your Morning.",
  },

  categories: [
    { id: 1, name: "Oats" },
    { id: 2, name: "Museli" },
    { id: 3, name: "Flakes" },
  ],

  bowls: [
    {
      id: 1,
      imageUrl: "/images/gallery/showcase/bowls/oats-bowl.webp",
      alt: "Oats with milk",
    },
    {
      id: 2,
      imageUrl: "/images/gallery/showcase/bowls/museli-bowl.webp",
      alt: "Museli with milk",
    },
    {
      id: 3,
      imageUrl: "/images/gallery/showcase/bowls/corn-flakes-bowl.webp",
      alt: "Flakes with milk",
    },
  ],

  textImages: [
    "nutritious-&-wholesome.webp",
    "rich-fiber.webp",
    "real-fruits.webp",
    "energizing-start.webp",
    "natural-sweetness.webp",
    "delicious.webp",
  ],
};

//quote section
export const QUOTE = {
  quoteLines: [
    "Elevate your breakfast",
    "with a masterful blend offering",
    "natural radiance and wellness",
    "in every single spoonful.",
  ],

  jars: [
    {
      id: 1,
      src: "/images/gallery/thumbnails/muesli-jar.webp",
      alt: "Muesli Jar",
      position: {
        left: 0,
        bottom: 24,
        smLeft: 20,
        smBottom: 40,
        mdLeft: 20,
        mdBottom: 40,
      },
      rotateTransform: [50, 0],
      width: "clamp(6rem,15vw,12rem)",
    },
    {
      id: 2,
      src: "/images/gallery/thumbnails/muesli-jar.webp",
      alt: "Muesli Jar",
      position: {
        left: 96,
        bottom: 128,
        smLeft: 144,
        smBottom: 480,
        mdLeft: 10,
        mdBottom: 128,
      },
      rotateTransform: [-25, 10],
      width: "clamp(6rem,18vw,14rem)",
    },
    {
      id: 3,
      src: "/images/gallery/thumbnails/muesli-jar.webp",
      alt: "Muesli Jar",
      position: {
        right: 64,
        bottom: 320,
        smRight: 8,
        mdRight: 40,
        smBottom: 0,
      },
      rotateTransform: [20, -20],
      width: "clamp(6rem,20vw,16rem)",
    },
  ],
};

//products section
export const EX_PRODUCTS = [
  // Oats
  {
    id: 1,
    name: "Organic Oats",
    category: "Oats",
    imageUrl: "/images/gallery/thumbnails/almonds.webp",
    description: "Premium organic oats for a healthy breakfast.",
    price: 5.99,
  },
  {
    id: 2,
    name: "Steel Cut Oats",
    category: "Oats",
    imageUrl: "/images/gallery/thumbnails/muesli.webp",
    description: "Nutritious steel cut oats for sustained energy.",
    price: 6.49,
  },
  {
    id: 3,
    name: "Oatmeal Bowl",
    category: "Oats",
    imageUrl: "/images/gallery/thumbnails/almonds.webp",
    description: "Wholesome oatmeal for a perfect morning start.",
    price: 5.79,
  },

  // Museli
  {
    id: 4,
    name: "Crunchy Museli",
    category: "Museli",
    imageUrl: "/images/gallery/thumbnails/muesli.webp",
    description: "A perfect blend of grains, nuts, and dried fruits.",
    price: 6.99,
  },
  {
    id: 5,
    name: "Berry Museli",
    category: "Museli",
    imageUrl: "/images/gallery/thumbnails/granola.webp",
    description: "Museli with real berries for added flavor.",
    price: 7.29,
  },
  {
    id: 6,
    name: "Nutty Museli",
    category: "Museli",
    imageUrl: "/images/gallery/thumbnails/granola.webp",
    description: "Rich in nuts and grains for a hearty breakfast.",
    price: 6.89,
  },

  // Nuts
  {
    id: 7,
    name: "Almonds",
    category: "Nuts",
    imageUrl: "/images/gallery/thumbnails/almonds.webp",
    description: "Crunchy, natural almonds full of protein.",
    price: 9.99,
  },
  {
    id: 8,
    name: "Walnuts",
    category: "Nuts",
    imageUrl: "/images/gallery/thumbnails/muesli.webp",
    description: "Healthy walnuts to boost your brainpower.",
    price: 10.49,
  },
  {
    id: 9,
    name: "Cashews",
    category: "Nuts",
    imageUrl: "/images/gallery/thumbnails/granola.webp",
    description: "Naturally crunchy cashews, full of energy.",
    price: 10.99,
  },

  // Berries
  {
    id: 10,
    name: "Mixed Berries",
    category: "Berries",
    imageUrl: "/images/gallery/thumbnails/almonds.webp",
    description: "Fresh and juicy berries to boost your immunity.",
    price: 7.49,
  },
  {
    id: 11,
    name: "Berry Bowl",
    category: "Berries",
    imageUrl: "/images/gallery/thumbnails/muesli.webp",
    description: "A colorful mix of berries for your morning energy.",
    price: 7.99,
  },
  {
    id: 12,
    name: "Wild Berries",
    category: "Berries",
    imageUrl: "/images/gallery/thumbnails/granola.webp",
    description: "Tangy and sweet wild berries to start your day.",
    price: 8.29,
  },

  // Flakes
  {
    id: 13,
    name: "Classic Corn Flakes",
    category: "Flakes",
    imageUrl: "/images/gallery/thumbnails/muesli.webp",
    description: "Light and crispy corn flakes for a classic breakfast.",
    price: 4.99,
  },
  {
    id: 14,
    name: "Honey Corn Flakes",
    category: "Flakes",
    imageUrl: "/images/gallery/thumbnails/almonds.webp",
    description: "Sweetened with natural honey for extra taste.",
    price: 5.49,
  },
  {
    id: 15,
    name: "Choco Flakes",
    category: "Flakes",
    imageUrl: "/images/gallery/thumbnails/granola.webp",
    description: "Delicious chocolate-flavored corn flakes for kids.",
    price: 5.99,
  },
];

export const EX_PRODUCTS_SECTION = {
  heading: "Healthy Food Future Ready",
  paragraph:
    "Discover our premium selection of natural and wholesome products, crafted to nourish your body and delight your senses.",
};

//counter section
export const COUNTER_SECTION = {
  heading: "Eat. Change. Inspire.",
  paragraph:
    "We exist to create delicious snacks that are better for you and the planet. Every pack you purchase helps us rescue good food from going to waste and significantly reduce plastic use.",
  buttons: [
    {
      text: "Our Products",
      link: "/products",
      margin: "mb-0 hover:scale-105",
      bgColor: "bg-white",
      textColor: "text-[#3D2B1F]",
    },
    {
      text: "Our Process",
      link: "/technology",
      margin: "mb-0",
      bgColor: "bg-[#3D2B1F]",
      textColor: "text-white hover:scale-105",
    },
  ],
  stats: [
    { endValue: 1005, label: "Products Bought", suffix: "+" },
    { endValue: 320, label: "Kg of Plastic Reduced", suffix: "+" },
    { endValue: 5500, label: "Lbs of Food Saved", suffix: "+" },
  ],
};

//highlight section
export const HIGHLIGHT_SECTION = {
  bgImage: "/images/gallery/banner/highlight-banner.webp",
  altText: "Premium freeze-dried products from Bella Exotica",
  centerTitle: "Healthy Organic Breakfast",
  centerSubtitle: "Fresh · Wholesome · Nutritious",
};
export const HIGHLIGHTS = [
  {
    id: 1,
    position: "top-[7%] left-[5%]",
    title: "No Refined Sugar",
    subtitle: "With Pure Delight",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F]",
    delay: 0.2,
  },
  {
    id: 2,
    position: "top-[32%] right-[12%]",
    title: "Purely Organic",
    subtitle: "With Nature",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F] text-end",
    delay: 0.2,
  },
  {
    id: 3,
    position: "bottom-[6%] right-[22%]",
    title: "High Protein & Fibre",
    subtitle: "Rich Flavour",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F] text-end",
    delay: 0.2,
  },
  {
    id: 4,
    position: "bottom-[34%] left-[24%]",
    title: "100% Whole Grains",
    subtitle: "Added Minerals",
    titleAlign: "text-[#3D2B1F]",
    subtitleAlign: "text-[#3D2B1F]",
    delay: 0.2,
  },
];

//certificates section
export const CERTIFICATES_SECTION = [
  { name: "GMP", image: "/images/gallery/certificates/gmp.webp" },
  { name: "HACCP", image: "/images/gallery/certificates/haccp.webp" },
  { name: "FSSAI", image: "/images/gallery/certificates/fssai.webp" },
  { name: "ISO", image: "/images/gallery/certificates/iso.webp" },
];

//why choose us
export const WHY_CHOOSE_US_SECTION = {
  heading: "Why Choose Us?",
  features: [
    {
      title: "High quality ingredients",
      description: "from the best farms",
      color: "#3D2B1F",
      textPosition: "top",
    },
    {
      title: "Delicious and healthy meals",
      description: "Where Health and Taste Align",
      color: "#3D2B1F",
      textPosition: "bottom",
    },
    {
      title: "Eco-friendly food",
      description: "packaging for delivery",
      color: "#3D2B1F",
      textPosition: "top",
    },
    {
      title: "Purity and Freshness",
      description: "With 0% Artificial Additives",
      color: "#3D2B1F",
      textPosition: "bottom",
    },
  ],
};

//testimonial section
export const TESTIMONIAL_SECTION = {
  headingTop: "Read reviews,",
  headingBottom: "choose with confidence.",
  ratingSuffix: "/5",
  brandName: "Bella Exotica",
  progressLabel: "Based on {total} reviews",
  prevLabel: "Previous review",
  nextLabel: "Next review",
};
export const TESTIMONIALS = {
  heading: "Read reviews, choose with confidence.",
  subheading: "",
  companyName: "Bella Exotica",
  reviews: [
    {
      id: 1,
      category: "TRAVEL PACKS",
      text: "I often travel for work, and carrying these mixed dry fruit packs has been a lifesaver. Healthy and convenient.",
      rating: 5.0,
      author: {
        name: "Ananya Verma",
        title: "Gurugram, India",
        avatarUrl: "https://picsum.photos/id/1027/100/100",
      },
    },
    {
      id: 2,
      category: "KIDS' FAVORITES",
      text: "My daughter loves the crunchy freeze-dried bananas. Finally a healthy snack she actually enjoys!",
      rating: 4.7,
      author: {
        name: "Vikram Singh",
        title: "Jaipur, India",
        avatarUrl: "https://picsum.photos/id/1005/100/100",
      },
    },
    {
      id: 3,
      category: "NUTRIENT BOOST",
      text: "Adding their chia seeds and walnuts to my smoothie has completely changed my mornings. Great energy boost!",
      rating: 4.8,
      author: {
        name: "Kavita Pillai",
        title: "Mumbai, India",
        avatarUrl: "https://picsum.photos/id/1011/100/100",
      },
    },
    {
      id: 4,
      category: "MORNING MIX",
      text: "I start my morning with their millet-based muesli. Tastes amazing and keeps me full for hours.",
      rating: 5.0,
      author: {
        name: "Aarav Iyer",
        title: "Bengaluru, India",
        avatarUrl: "https://picsum.photos/id/1012/100/100",
      },
    },
    {
      id: 5,
      category: "DEHYDRATED SNACKS",
      text: "The dehydrated mango slices were delicious and not overly sweet. A guilt-free snack I keep going back to.",
      rating: 4.9,
      author: {
        name: "Rahul Deshpande",
        title: "Pune, India",
        avatarUrl: "https://picsum.photos/id/1013/100/100",
      },
    },
    {
      id: 6,
      category: "BERRY BLAST",
      text: "The mix of berries is perfect for my yogurt bowl. They are fresh, tangy, and full of antioxidants.",
      rating: 4.6,
      author: {
        name: "Priya Sharma",
        title: "Delhi, India",
        avatarUrl: "https://picsum.photos/id/1014/100/100",
      },
    },
    {
      id: 7,
      category: "SAVORY TREATS",
      text: "Was skeptical about spiced nuts, but the masala cashews are incredibly addictive. A perfect evening snack.",
      rating: 4.9,
      author: {
        name: "Rohan Gupta",
        title: "Kolkata, India",
        avatarUrl: "https://picsum.photos/id/1015/100/100",
      },
    },
    {
      id: 8,
      category: "SEED MIX",
      text: "The omega-3 seed mix is a staple in my pantry now. I sprinkle it on salads and soups for that extra crunch.",
      rating: 5.0,
      author: {
        name: "Meera Krishnan",
        title: "Chennai, India",
        avatarUrl: "https://picsum.photos/id/1025/100/100",
      },
    },
  ],
};
