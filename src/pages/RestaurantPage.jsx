import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { RESTAURANT_PRODUCTS } from "../data/restaurants";

function RestaurantPage({ restaurant, addToCart, removeFromCart, cart, restaurantDisplayName }) {
  const products = RESTAURANT_PRODUCTS[restaurant] || [];
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
            {restaurantDisplayName}
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