import { useState, useEffect } from "react";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart_v2");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_v2", JSON.stringify(cart));
    } catch {}
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

  return { cart, addToCart, removeFromCart, clearCart, cartCount };
}