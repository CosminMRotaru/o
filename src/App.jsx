import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingCart from "./components/FloatingCart";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";
import { RESTAURANT_DISPLAY_NAMES, RESTAURANTS } from "./data/restaurants";

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
  const { cart, addToCart, removeFromCart, clearCart, cartCount } = useCart();

  return (
    <BrowserRouter>
      <NavbarConditional />
      <FloatingCartConditional cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={<HomePage restaurantNames={RESTAURANT_DISPLAY_NAMES} />}
        />
        {RESTAURANTS.map((r) => (
          <Route
            key={r.key}
            path={`/${r.key}`}
            element={
              <RestaurantPage
                restaurant={r.key}
                restaurantDisplayName={r.name}
                addToCart={addToCart}
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        ))}
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