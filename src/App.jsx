import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingCart from "./components/FloatingCart";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import CartPage from "./pages/CartPage";

const RESTAURANT_DISPLAY_NAMES = {
  jimmy: "Jimmy`s Dinner",
  pasta: "Mama`s Pasta",
  sushi: "Sushi Palace",
};

function NavbarConditional() {
  const location = useLocation();
  const showNavbar = /^\/(jimmy|pasta|sushi|cart)/.test(location.pathname);
  return showNavbar ? <Navbar /> : null;
}

function FloatingCartConditional({ cartCount }) {
  const location = useLocation();
  const show = !/^\/cart/.test(location.pathname);
  return show ? <FloatingCart cartCount={cartCount} /> : null;
}

function App() {
  // Cart: { key: { qty, ...product, restaurant } }
  const [cart, setCart] = useState(() => {
    // Read from localStorage at init
    try {
      const stored = localStorage.getItem("cart_v2");
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  // Save to localStorage on change
  React.useEffect(() => {
    try {
      localStorage.setItem("cart_v2", JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const addToCart = (restaurant, product) => {
    const key = `${restaurant}-${product.id}`;
    setCart((prev) => ({
      ...prev,
      [key]: prev[key]
        ? { ...prev[key], qty: prev[key].qty + 1 }
        : { ...product, qty: 1, restaurant },
    }));
  };

  const removeFromCart = (key) => {
    setCart((prev) => {
      if (!prev[key]) return prev;
      if (prev[key].qty > 1) {
        return {
          ...prev,
          [key]: { ...prev[key], qty: prev[key].qty - 1 },
        };
      } else {
        const newCart = { ...prev };
        delete newCart[key];
        return newCart;
      }
    });
  };

  const clearCart = () => setCart({});

  const cartCount = Object.values(cart).reduce((a, item) => a + (item.qty || 0), 0);

  return (
    <BrowserRouter>
      <NavbarConditional />
      <FloatingCartConditional cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={<HomePage restaurantNames={RESTAURANT_DISPLAY_NAMES} />}
        />
        <Route
          path="/jimmy"
          element={
            <RestaurantPage
              restaurant="jimmy"
              restaurantDisplayName={RESTAURANT_DISPLAY_NAMES.jimmy}
              addToCart={addToCart}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/pasta"
          element={
            <RestaurantPage
              restaurant="pasta"
              restaurantDisplayName={RESTAURANT_DISPLAY_NAMES.pasta}
              addToCart={addToCart}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/sushi"
          element={
            <RestaurantPage
              restaurant="sushi"
              restaurantDisplayName={RESTAURANT_DISPLAY_NAMES.sushi}
              addToCart={addToCart}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              addToCart={addToCart}
              restaurantNames={RESTAURANT_DISPLAY_NAMES}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;