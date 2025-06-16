import React from "react";
import GenericModal from "./GenericModal";

function PaymentModal({ show, onClose, onSubmit, form = {}, onInput, submitting = false }) {
  const fields = [
    { name: "name", type: "text", placeholder: "Enter your name", required: true, autoFocus: true },
    { name: "email", type: "email", placeholder: "Enter your email", required: true },
    { name: "card", type: "text", placeholder: "Enter card number", required: true, maxLength: 19 }
  ];
  return (
    <GenericModal
      show={show}
      onClose={onClose}
      title="Enter card details"
      fields={fields}
      onSubmit={onSubmit}
      form={form}
      onInput={onInput}
      submitting={submitting}
      submitLabel="Pay"
    />
  );
}

export default PaymentModal;