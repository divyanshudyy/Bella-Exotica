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
    imageUrl: "/images/productspage/Almonds.png",
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
    imageUrl: "/images/productspage/Oats.png",
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
    imageUrl: "/images/productspage/Corn Flakes.png",
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
    imageUrl: "images/productspage/Granola.png",
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
    imageUrl: "/images/productspage/Muesli.png",
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
    imageUrl: "/images/productspage/Almonds.png",
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
    imageUrl: "/images/productspage/Corn Flakes.png",
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
    imageUrl: "/images/productspage/Granola.png",
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
    imageUrl: "/images/productspage/Oats.png",
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
    imageUrl: "https://picsum.photos/seed/harvest/400/400",
  },
  {
    step: "Step 2",
    title: "Cleaning & Preparation",
    description:
      "Thoroughly wash, peel, and trim all produce. Cut into uniform sizes for even processing.",
    imageUrl: "https://picsum.photos/seed/preparation/400/400",
  },
  {
    step: "Step 3",
    title: "Blanching & Pre-Treatment",
    description:
      "Blanch with steam or hot water to lock in color, texture, and nutrients. Use optional natural dips (e.g., lemon solution) to prevent browning.",
    imageUrl: "https://picsum.photos/seed/blanching/400/400",
  },
  {
    step: "Step 4",
    title: "Drying Process",
    description:
      "Moisture is removed either through dehydration, which uses warm air to gently preserve flavor, or through freeze-drying, where produce is frozen and placed under vacuum so ice turns directly into vapor, keeping the structure intact.",
    imageUrl: "https://picsum.photos/seed/drying/400/400",
  },
  {
    step: "Step 5",
    title: "Quality Check",
    description:
      "Test moisture levels, taste, color, and texture. Ensure the product is safe, consistent, and delicious.",
    imageUrl: "https://picsum.photos/seed/quality/400/400",
  },
  {
    step: "Step 6",
    title: "Packaging",
    description:
      "Seal products in air-tight, moisture-proof packaging. Lock in freshness and extend shelf life.",
    imageUrl: "https://picsum.photos/seed/packaging/400/400",
  },
  {
    step: "Step 7",
    title: "Ready to Enjoy",
    description:
      "Produce lightweight, shelf-stable, and nutrient-rich foods. Ready for consumers to enjoy worldwide.",
    imageUrl: "https://picsum.photos/seed/enjoy/400/400",
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
