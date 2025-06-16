export const RESTAURANT_DISPLAY_NAMES = {
  jimmy: "Jimmy`s Dinner",
  pasta: "Mama`s Pasta",
  sushi: "Sushi Palace",
};

export const RESTAURANT_THEMES = {
  jimmy: "jimmy-theme",
  pasta: "pasta-theme",
  sushi: "sushi-theme",
};

export const RESTAURANTS = [
  { key: "jimmy", name: RESTAURANT_DISPLAY_NAMES.jimmy, theme: RESTAURANT_THEMES.jimmy },
  { key: "pasta", name: RESTAURANT_DISPLAY_NAMES.pasta, theme: RESTAURANT_THEMES.pasta },
  { key: "sushi", name: RESTAURANT_DISPLAY_NAMES.sushi, theme: RESTAURANT_THEMES.sushi },
];

const emoji = {
  burger: "🍔",
  fries: "🍟",
  sos: "🥫",
  pasta: "🍝",
  lasagna: "🥧",
  tiramisu: "🍰",
  maki: "🍣",
  nigiri: "🍤",
  wasabi: "🌶️",
};

export const RESTAURANT_PRODUCTS = {
  jimmy: [
    {
      id: 1,
      name: "Burger",
      price: 6.50,
      emoji: emoji.burger,
      weight: 230,
      ingredients: [
        "Brioche bun",
        "Beef patty",
        "Cheddar cheese",
        "Lettuce",
        "Tomato",
        "Onion",
        "Pickles",
        "House sauce"
      ]
    },
    {
      id: 2,
      name: "Fries",
      price: 2.80,
      emoji: emoji.fries,
      weight: 150,
      ingredients: [
        "Potatoes",
        "Vegetable oil",
        "Sea salt"
      ]
    },
    {
      id: 3,
      name: "Special Sauce",
      price: 1.50,
      emoji: emoji.sos,
      weight: 60,
      ingredients: [
        "Mayonnaise",
        "Ketchup",
        "Dijon mustard",
        "Garlic powder",
        "Paprika",
        "Pickle relish"
      ]
    },
  ],
  pasta: [
    {
      id: 1,
      name: "Pasta",
      price: 5.50,
      emoji: emoji.pasta,
      weight: 350,
      ingredients: [
        "Spaghetti",
        "Tomato sauce",
        "Parmesan cheese",
        "Olive oil",
        "Basil"
      ]
    },
    {
      id: 2,
      name: "Lasagna",
      price: 7.20,
      emoji: emoji.lasagna,
      weight: 400,
      ingredients: [
        "Lasagna sheets",
        "Beef ragù",
        "Mozzarella",
        "Parmesan",
        "Béchamel sauce",
        "Tomato sauce"
      ]
    },
    {
      id: 3,
      name: "Tiramisu",
      price: 4.00,
      emoji: emoji.tiramisu,
      weight: 180,
      ingredients: [
        "Ladyfingers",
        "Mascarpone",
        "Coffee",
        "Cocoa powder",
        "Eggs",
        "Sugar"
      ]
    },
  ],
  sushi: [
    {
      id: 1,
      name: "Maki",
      price: 8.00,
      emoji: emoji.maki,
      weight: 180,
      ingredients: [
        "Rice",
        "Nori",
        "Cucumber",
        "Salmon",
        "Avocado",
        "Sesame seeds"
      ]
    },
    {
      id: 2,
      name: "Nigiri",
      price: 9.00,
      emoji: emoji.nigiri,
      weight: 120,
      ingredients: [
        "Rice",
        "Salmon",
        "Wasabi"
      ]
    },
    {
      id: 3,
      name: "Wasabi",
      price: 1.00,
      emoji: emoji.wasabi,
      weight: 16,
      ingredients: [
        "Fresh wasabi root"
      ]
    },
  ],
};