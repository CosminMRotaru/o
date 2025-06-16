import React from 'react';

function PaymentModal({ show, onClose, onSubmit, form = {}, onInput }) {
  if (!show) return null;
  return (
    <section className="payment-modal">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Enter card details</h2>
        <form onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name || ""}
            onChange={onInput}
            required
            autoFocus
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email || ""}
            onChange={onInput}
            required
          />
          <input
            name="card"
            type="text"
            placeholder="Enter card number"
            maxLength={19}
            value={form.card || ""}
            onChange={onInput}
            required
          />
          <button type="submit" className="submit-btn">Pay</button>
        </form>
      </div>
    </section>
  );
}

export default PaymentModal;