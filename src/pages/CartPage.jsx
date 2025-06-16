import React, { useState } from "react";
import GenericModal from "../components/GenericModal";

function CartPage({ cart, removeFromCart, clearCart, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const cartItems = Object.entries(cart || {}).map(([key, item]) => ({
    key,
    ...item,
  }));

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 0),
    0
  );

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true, autoFocus: true },
    { name: "address", type: "text", placeholder: "Address", required: true },
    { name: "phone", type: "tel", placeholder: "Phone", required: true }
  ];

  function handleInput(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowModal(false);
      setOrderConfirmed(true);
      clearCart();
      setForm({ name: "", address: "", phone: "" });
    }, 600); // fake async
  }

  function ConfirmationMessage() {
    return (
      <div className="confirmation-message">
        <h3>Thank you for your order!</h3>
        <p>Your order was placed successfully.<br />
          We will contact you soon to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-bg">
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {orderConfirmed ? (
          <ConfirmationMessage />
        ) : cartItems.length === 0 ? (
          <div className="empty-cart">Cart is empty.</div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map(item => (
                <li key={item.key} className="cart-item">
                  <span className="cart-svg">{item.emoji}</span>
                  <span className="cart-name">{item.name}</span>
                  <div className="cart-qty-controls">
                    <button
                      className="cart-btn-v2 cart-btn-small"
                      aria-label="Decrease quantity"
                      onClick={() => removeFromCart(item.key)}
                    >-</button>
                    <span className="cart-qty">x{item.qty}</span>
                    <button
                      className="cart-btn-v2 cart-btn-small"
                      aria-label="Increase quantity"
                      onClick={() => addToCart(item.restaurant, item)}
                    >+</button>
                  </div>
                  <span className="cart-price">
                    €{(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    className="remove-btn"
                    aria-label="Remove product"
                    onClick={() => {
                      for (let i = 0; i < item.qty; i++) removeFromCart(item.key);
                    }}
                  >✕</button>
                </li>
              ))}
            </ul>
            <div className="cart-total-row">
              <span className="cart-total-label">Total:</span>
              <span className="cart-total">€{total.toFixed(2)}</span>
            </div>
            <div className="cart-actions-row">
              <button className="cart-action-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button
                className="cart-action-btn"
                onClick={() => setShowModal(true)}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
      <GenericModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Place Order"
        fields={fields}
        onSubmit={handleSubmit}
        form={form}
        onInput={handleInput}
        submitting={submitting}
        submitLabel="Confirm Order"
      />
    </div>
  );
}

export default CartPage;