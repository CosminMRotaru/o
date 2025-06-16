import React from "react";
import { useNavigate } from "react-router-dom";

function FloatingCart({ cartCount = 0 }) {
  const navigate = useNavigate();

  if (!cartCount) return null;

  return (
    <button
      className="fab-cart-btn"
      onClick={() => navigate("/cart")}
      aria-label="View cart"
    >
      <span role="img" aria-label="cart">🛒</span>
      <span className="fab-cart-badge">{cartCount}</span>
    </button>
  );
}

export default FloatingCart;