import React, { useState } from "react";

function CartPage({ cart, removeFromCart, clearCart, addToCart }) {
  const [showModal, setShowModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const cartItems = Object.entries(cart || {}).map(([key, item]) => ({
    key,
    ...item,
  }));

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.qty || 0),
    0
  );

  // Modal for order
  function OrderModal({ onClose, onSuccess }) {
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        onSuccess();
      }, 600); // fake async
    }

    return (
      <div className="payment-modal">
        <div className="modal-content">
          <button className="close-modal-btn" aria-label="Close" onClick={onClose}>×</button>
          <div className="modal-title">Place Order</div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Address" required />
            <input type="tel" placeholder="Phone" required />
            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Processing..." : "Confirm Order"}
            </button>
          </form>
        </div>
      </div>
    );
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

  // IMPORTANT: afișează mesajul de confirmare dacă orderConfirmed este true
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
                  <span className="cart-price">€{(item.price * item.qty).toFixed(2)}</span>
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
      {showModal && (
        <OrderModal
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setShowModal(false);
            setOrderConfirmed(true); // setăm TRUE aici!
            clearCart(); // goleşte coșul după plasarea comenzii
          }}
        />
      )}
    </div>
  );
}

export default CartPage;