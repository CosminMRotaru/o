import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

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

const restaurantProducts = {
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

const restaurantDisplayNames = {
  jimmy: "Jimmy`s Dinner",
  pasta: "Mama`s Pasta",
  sushi: "Sushi Palace",
};

function RestaurantPage({ restaurant, addToCart, removeFromCart, cart, restaurantDisplayName }) {
  const products = restaurantProducts[restaurant] || [];
  const [showToast, setShowToast] = React.useState(false);

  const getProductKey = (p) => `${restaurant}-${p.id}`;

  const handleAdd = (product) => {
    addToCart(restaurant, product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1100);
  };

  const handleRemove = (product) => {
    removeFromCart(getProductKey(product));
  };

  return (
    <div className={`restaurant-bg ${restaurant}-theme`}>
      <div className="restaurant-container">
        <div className="restaurant-header-v2">
          <Link to="/" className="back-link-v2" aria-label="Back">
            <span className="back-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
                <path d="M14.5 4.5L8.5 10L14.5 15.5" stroke="#7e59ff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="back-label">BACK</span>
          </Link>
          <h2 className="restaurant-title-v2">
            {restaurantDisplayName || restaurantDisplayNames[restaurant] || restaurant}
          </h2>
        </div>
        <div className="product-list-v2">
          {products.map((p) => {
            const key = getProductKey(p);
            const qty = cart[key]?.qty || 0;
            return (
              <ProductCard
                key={p.id}
                product={p}
                qty={qty}
                onAdd={(prod) => handleAdd(prod)}
                onRemove={(prod) => handleRemove(prod)}
              />
            );
          })}
        </div>
        <div className={`toast-msg ${showToast ? "show" : ""}`}>Added to cart!</div>
      </div>
    </div>
  );
}

export default RestaurantPage;