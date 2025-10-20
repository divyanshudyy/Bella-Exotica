export const HERO = {
  title: "Pure taste timeless nutrition",
  subtitle: "Premium Organic Cereals, Granolas & Nuts",
  cta: "Explore Collection",
  imgAlt:
    "Bella Exotica organic products including oats, muesli, granola, cereals, and almonds",
};

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
        left: "0",
        smLeft: "5",
        bottom: "6",
        smBottom: "10",
        mdBottom: "10",
      },
      yTransformIndex: 0,
      rotateTransform: [50, 0],
      width: "clamp(6rem,15vw,12rem)",
    },
    {
      id: 2,
      src: "/images/gallery/thumbnails/muesli-jar.webp",
      alt: "Muesli Jar",
      position: {
        left: "24",
        smLeft: "36",
        mdLeft: "25",
        bottom: "32",
        smBottom: "120",
      },
      yTransformIndex: 1,
      rotateTransform: [-25, 10],
      width: "clamp(6rem,18vw,14rem)",
    },
    {
      id: 3,
      src: "/images/gallery/thumbnails/muesli-jar.webp",
      alt: "Muesli Jar",
      position: { right: "16", smRight: "20", bottom: "80", smBottom: "60" },
      yTransformIndex: 2,
      rotateTransform: [20, -20],
      width: "clamp(6rem,20vw,16rem)",
    },
  ],

  yStartValues: {
    default: [300, 500, 500],
    sm: [150, 250, 300],
    md: [250, 400, 450],
    lg: [300, 500, 500],
  },

  quoteMarkStyles: {
    topLeft: {
      top: 0,
      left: "-1rem",
      fontSize: "clamp(2.5rem, 5vw, 9rem)",
      lineHeight: 1,
    },
    bottomRight: {
      bottom: 0,
      right: "-1rem",
      fontSize: "clamp(2.5rem, 5vw, 9rem)",
      lineHeight: 1,
    },
  },

  textStyle: {
    fontSize: "clamp(1.5rem, 3vw, 3.2rem)",
    lineHeight: "clamp(1.2, 2vw, 1.35)",
    className: "font-playfair font-semibold italic text-[#3D2B1F]",
    willChange: "transform, opacity",
  },
};

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

export const EX_CATEGORIES = ["All", "Oats", "Berries", "Nuts", "Museli"];

export const EX_PRODUCTS_SECTION = {
  heading: "Healthy Food Future Ready",
  paragraph:
    "Discover our premium selection of natural and wholesome products, crafted to nourish your body and delight your senses.",
};

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

export const CERTIFICATES_SECTION = [
  { name: "GMP", image: "/images/gallery/certificates/gmp.webp" },
  { name: "HACCP", image: "/images/gallery/certificates/haccp.webp" },
  { name: "FSSAI", image: "/images/gallery/certificates/fssai.webp" },
  { name: "ISO", image: "/images/gallery/certificates/iso.webp" },
];

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

export const CATEGORIES = ["All", "Oats", "Berries", "Nuts", "Museli"];

const sampleReviews = [
  {
    id: 1,
    author: "Jane D.",
    rating: 5,
    date: "2023-10-26",
    comment: "Absolutely love this! So fresh and tasty.",
  },
  {
    id: 2,
    author: "John S.",
    rating: 4,
    date: "2023-10-24",
    comment: "Great product, would buy again. A bit pricey but worth it.",
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 5,
    date: "2023-10-22",
    comment: "My new favorite breakfast. The quality is unmatched.",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Oats Collection",
    description:
      "A curated collection of our finest oats, perfect for a healthy and hearty breakfast. Includes a variety of textures and flavors to start your day right.",
    price: 450,
    imageUrl: "/images/gallery/products/Almonds.webp",
    category: "Oats",
    ingredients: ["Rolled Oats", "Steel-Cut Oats", "Quick Oats", "Oat Bran"],
    nutritionalInfo:
      "Serving Size: 40g. Calories: 150. Fat: 2.5g. Carbohydrates: 27g. Protein: 5g.",
    usageInstructions:
      "Can be used for porridge, baking, or added to smoothies. Store in a cool, dry place.",
    stock: 25,
    reviews: [
      ...sampleReviews,
      {
        id: 4,
        author: "Chris P.",
        rating: 4,
        date: "2023-10-20",
        comment: "Good variety in one package.",
      },
    ],
  },
  {
    id: 2,
    name: "Berry Granola Bowl",
    description:
      "A delightful mix of crunchy granola, sweet berries, and creamy yogurt. A refreshing and nutritious meal to energize your morning.",
    price: 520,
    imageUrl: "/images/gallery/products/Oats.webp",
    category: "Nuts",
    ingredients: [
      "Whole grain oats",
      "Almonds",
      "Honey",
      "Coconut flakes",
      "Dried berries (strawberries, blueberries, raspberries)",
    ],
    nutritionalInfo:
      "Serving Size: 50g. Calories: 220. Fat: 9g. Carbohydrates: 30g. Protein: 6g.",
    usageInstructions:
      "Enjoy with milk, yogurt, or as a standalone snack. Perfect for breakfast or a post-workout meal.",
    stock: 15,
    reviews: [
      {
        id: 1,
        author: "Alice B.",
        rating: 5,
        date: "2023-09-15",
        comment:
          "The best granola I have ever had. The berries are so flavorful.",
      },
      {
        id: 2,
        author: "Tom H.",
        rating: 5,
        date: "2023-09-12",
        comment: "Perfect crunch and sweetness.",
      },
    ],
  },
  {
    id: 3,
    name: "Fruity Granola Bowl",
    description:
      "Packed with tropical fruits, toasted nuts, and our signature granola. This bowl is a vibrant and flavorful escape to paradise.",
    price: 380,
    imageUrl: "/images/gallery/products/Corn Flakes.webp",
    category: "Oats",
    ingredients: [
      "Granola",
      "Dried Mango",
      "Dried Pineapple",
      "Cashews",
      "Coconut Flakes",
    ],
    nutritionalInfo:
      "Serving Size: 60g. Calories: 250. Fat: 11g. Carbohydrates: 35g. Protein: 7g.",
    usageInstructions:
      "Serve with yogurt or milk. A great topping for smoothie bowls.",
    stock: 30,
    reviews: sampleReviews.slice(0, 2),
  },
  {
    id: 4,
    name: "Oats",
    description:
      "Simple, pure, and wholesome whole grain oats. A versatile pantry staple for oatmeal, baking, or adding texture to your favorite recipes.",
    price: 250,
    originalPrice: 300,
    imageUrl: "images/gallery/products/Granola.webp",
    category: "Snacks",
    ingredients: ["100% Whole Grain Rolled Oats"],
    nutritionalInfo:
      "Serving Size: 40g. Calories: 150. Fat: 2.5g. Carbohydrates: 27g. Protein: 5g.",
    usageInstructions:
      "Cook on the stovetop or in the microwave for a classic oatmeal breakfast.",
    stock: 0,
    reviews: [
      {
        id: 1,
        author: "Peter G.",
        rating: 5,
        date: "2023-08-05",
        comment: "A staple in my pantry. Always great quality.",
      },
    ],
  },
  {
    id: 5,
    name: "Classic Rolled Oats",
    description:
      "Our best-selling classic rolled oats provide a chewy texture and nutty flavor. Ideal for a traditional oatmeal breakfast or homemade granola bars.",
    price: 280,
    originalPrice: 320,
    imageUrl: "/images/gallery/products/Muesli.webp",
    category: "Berries",
    ingredients: ["Organic Rolled Oats"],
    nutritionalInfo:
      "Serving Size: 45g. Calories: 170. Fat: 3g. Carbohydrates: 31g. Protein: 6g.",
    usageInstructions:
      "Perfect for oatmeal, baking cookies, or making granola bars.",
    stock: 50,
    reviews: sampleReviews.slice(1, 3),
  },
  {
    id: 6,
    name: "Classic Rolled Oats",
    description:
      "Our best-selling classic rolled oats provide a chewy texture and nutty flavor. Ideal for a traditional oatmeal breakfast or homemade granola bars.",
    price: 300,
    originalPrice: 350,
    imageUrl: "/images/gallery/products/Almonds.webp",
    category: "Museli",
    ingredients: ["Premium Rolled Oats"],
    nutritionalInfo:
      "Serving Size: 45g. Calories: 170. Fat: 3g. Carbohydrates: 31g. Protein: 6g.",
    usageInstructions:
      "A versatile ingredient for all your breakfast and baking needs.",
    stock: 40,
    reviews: sampleReviews,
  },
  {
    id: 7,
    name: "Protein Power Bas Granola",
    description:
      "Fuel your day with this protein-packed granola, featuring a blend of nuts, seeds, and whole grains for sustained energy and muscle support.",
    price: 850,
    imageUrl: "/images/gallery/products/Corn Flakes.webp",
    category: "Museli",
    ingredients: [
      "Rolled Oats",
      "Whey Protein Isolate",
      "Almonds",
      "Pumpkin Seeds",
      "Chia Seeds",
      "Maple Syrup",
    ],
    nutritionalInfo:
      "Serving Size: 55g. Calories: 250. Fat: 12g. Carbohydrates: 25g. Protein: 15g.",
    usageInstructions:
      "Excellent as a breakfast cereal, a topping for yogurt, or a snack on its own.",
    stock: 0,
    reviews: [
      {
        id: 1,
        author: "Mike T.",
        rating: 5,
        date: "2023-07-21",
        comment: "Best protein granola on the market!",
      },
      {
        id: 2,
        author: "Sarah K.",
        rating: 4,
        date: "2023-07-19",
        comment: "A little sweet for me, but the protein content is fantastic.",
      },
    ],
  },
  {
    id: 8,
    name: "Toasted Coconut Granola",
    description:
      "A tropical delight with golden-toasted coconut flakes, crunchy almonds, and a hint of vanilla. Perfect for snacking or topping your favorite yogurt.",
    price: 650,
    imageUrl: "/images/gallery/products/Granola.webp",
    category: "Berries",
    ingredients: [
      "Rolled Oats",
      "Coconut Flakes",
      "Almonds",
      "Honey",
      "Vanilla Extract",
    ],
    nutritionalInfo:
      "Serving Size: 50g. Calories: 230. Fat: 10g. Carbohydrates: 32g. Protein: 5g.",
    usageInstructions:
      "Enjoy with milk or yogurt for a tropical breakfast experience.",
    stock: 18,
    reviews: sampleReviews.slice(0, 1),
  },
  {
    id: 9,
    name: "Date & Nut Energy Balls",
    description:
      "Naturally sweetened with dates and packed with nutritious nuts and seeds, these energy balls are the perfect on-the-go snack to beat the afternoon slump.",
    price: 480,
    imageUrl: "/images/gallery/products/Oats.webp",
    category: "Nuts",
    ingredients: ["Dates", "Almonds", "Walnuts", "Chia Seeds", "Cocoa Powder"],
    nutritionalInfo:
      "Serving Size: 2 balls (40g). Calories: 160. Fat: 9g. Carbohydrates: 18g. Protein: 4g.",
    usageInstructions:
      "A perfect pre-workout snack or a healthy treat to satisfy your sweet tooth.",
    stock: 35,
    reviews: sampleReviews,
  },
];

export const TIMELINE_DATA = [
  {
    step: "Step 1",
    title: "Harvest & Selection",
    description:
      "Carefully source fresh, high-quality fruits and vegetables. Inspect all produce to meet strict quality standards.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-1.webp",
  },
  {
    step: "Step 2",
    title: "Cleaning & Preparation",
    description:
      "Thoroughly wash, peel, and trim all produce. Cut into uniform sizes for even processing.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-2.webp",
  },
  {
    step: "Step 3",
    title: "Blanching & Pre-Treatment",
    description:
      "Blanch with steam or hot water to lock in color, texture, and nutrients. Use optional natural dips (e.g., lemon solution) to prevent browning.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-3.webp",
  },
  {
    step: "Step 4",
    title: "Drying Process",
    description:
      "Moisture is removed either through dehydration, which uses warm air to gently preserve flavor, or through freeze-drying, where produce is frozen and placed under vacuum so ice turns directly into vapor, keeping the structure intact.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-4.webp",
  },
  {
    step: "Step 5",
    title: "Quality Check",
    description:
      "Test moisture levels, taste, color, and texture. Ensure the product is safe, consistent, and delicious.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-5.webp",
  },
  {
    step: "Step 6",
    title: "Packaging",
    description:
      "Seal products in air-tight, moisture-proof packaging. Lock in freshness and extend shelf life.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-1.webp",
  },
  {
    step: "Step 7",
    title: "Ready to Enjoy",
    description:
      "Produce lightweight, shelf-stable, and nutrient-rich foods. Ready for consumers to enjoy worldwide.",
    imageUrl: "/images/gallery/thumbnails/thumbnail-2.webp",
  },
];

export const INDIA_COORDS = { lat: 20.5937, lng: 78.9629 };

export const EXPORT_DATA = [
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: 34.0522,
    endLng: -118.2437,
    country: "USA",
    value: 76100,
    color: "#34d399", // Green
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: 25.2048,
    endLng: 55.2708,
    country: "UAE",
    value: 43300,
    color: "#fbbf24", // Amber
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: 51.5074,
    endLng: -0.1278,
    country: "UK",
    value: 17500,
    color: "#60a5fa", // Blue
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: -33.8688,
    endLng: 151.2093,
    country: "Australia",
    value: 10200,
    color: "#f87171", // Red
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: 35.6895,
    endLng: 139.6917,
    country: "Japan",
    value: 6100,
    color: "#c084fc", // Purple
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: 55.7558,
    endLng: 37.6173,
    country: "Russia",
    value: 3200,
    color: "#818cf8", // Indigo
  },
  {
    startLat: INDIA_COORDS.lat,
    startLng: INDIA_COORDS.lng,
    endLat: -22.9068,
    endLng: -43.1729,
    country: "Brazil",
    value: 6500,
    color: "#f472b6", // Pink
  },
];
