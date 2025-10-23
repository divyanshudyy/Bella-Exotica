export const HERO = {
  imgUrl: "/images/hero/product-hero.webp",
  title: "Products",
  subtitle: "Our Collection",
};

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
      {
        id: 1,
        author: "Ananya Sharma",
        rating: 5,
        date: "2023-10-12",
        comment:
          "Excellent variety! My mornings have become so much healthier.",
      },
      {
        id: 2,
        author: "Rohit Mehta",
        rating: 4,
        date: "2023-10-10",
        comment: "Good oats collection, but the packaging could be better.",
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
        author: "Priya Singh",
        rating: 5,
        date: "2023-09-15",
        comment:
          "The berries are fresh and sweet. Love it with yogurt every morning.",
      },
      {
        id: 2,
        author: "Vikram Patel",
        rating: 4,
        date: "2023-09-12",
        comment: "Crunchy and tasty, but a bit expensive for daily use.",
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
    reviews: [
      {
        id: 1,
        author: "Neha Reddy",
        rating: 5,
        date: "2023-08-22",
        comment: "Love the tropical flavors! Makes breakfast exciting.",
      },
      {
        id: 2,
        author: "Siddharth Joshi",
        rating: 4,
        date: "2023-08-20",
        comment: "Great taste, slightly sweet but very enjoyable.",
      },
    ],
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
        author: "Aarav Iyer",
        rating: 5,
        date: "2023-08-05",
        comment: "Simple and pure. Perfect for my daily breakfast routine.",
      },
      {
        id: 2,
        author: "Meera Krishnan",
        rating: 4,
        date: "2023-08-01",
        comment: "Good quality oats, but wish the pack was bigger.",
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
    reviews: [
      {
        id: 1,
        author: "Ritika Sharma",
        rating: 5,
        date: "2023-07-20",
        comment: "Chewy and flavorful. Perfect for my homemade granola bars.",
      },
      {
        id: 2,
        author: "Kunal Desai",
        rating: 4,
        date: "2023-07-18",
        comment: "Great texture but could use a bit more flavor.",
      },
    ],
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
    reviews: [
      {
        id: 1,
        author: "Aditya Verma",
        rating: 5,
        date: "2023-07-15",
        comment:
          "Premium quality oats. Great for smoothies and breakfast bowls.",
      },
      {
        id: 2,
        author: "Shruti Rao",
        rating: 4,
        date: "2023-07-12",
        comment: "Good oats, texture is soft and perfect for baking.",
      },
    ],
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
        author: "Vikram Singh",
        rating: 5,
        date: "2023-06-21",
        comment: "Amazing protein content! Keeps me full for hours.",
      },
      {
        id: 2,
        author: "Nisha Kapoor",
        rating: 4,
        date: "2023-06-19",
        comment: "Tastes great, a bit sweet for my liking but very nutritious.",
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
    reviews: [
      {
        id: 1,
        author: "Tanvi Sharma",
        rating: 5,
        date: "2023-05-10",
        comment: "Loved the coconut flavor! Perfect with my morning yogurt.",
      },
      {
        id: 2,
        author: "Rahul Jain",
        rating: 4,
        date: "2023-05-08",
        comment: "Very tasty, but a little pricey for daily consumption.",
      },
    ],
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
    reviews: [
      {
        id: 1,
        author: "Sneha Nair",
        rating: 5,
        date: "2023-04-15",
        comment: "Perfect snack! Healthy and energizing.",
      },
      {
        id: 2,
        author: "Karthik Iyer",
        rating: 4,
        date: "2023-04-13",
        comment: "Tasty energy balls, but a bit small in size.",
      },
    ],
  },
];

export const PRODUCT_DRAWER = {
  labels: {
    sale: "Sale",
    outOfStock: "Out of Stock",
    reviewsSection: "Ratings & Reviews",
    basedOnReviews: "Based on {count} reviews",
    noReviews: "No reviews yet. Be the first to write one!",
    writeReview: "Write a Review",
    yourRating: "Your Rating",
    yourName: "Your Name",
    yourReview: "Your Review",
    relatedProducts: "You Might Also Like",
  },
  buttons: {
    submitReview: "Submit Review",
    visitAmazon: "Visit Amazon",
    visitFlipkart: "Visit Flipkart",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
  },
  placeholders: {
    name: "Type your name",
    review: "What did you like or dislike?",
  },
  messages: {
    thankYouReview: "Thank you for your review!",
  },
};
