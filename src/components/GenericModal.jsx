import React from "react";

export default function GenericModal({
  show,
  onClose,
  title,
  fields = [],
  onSubmit,
  form = {},
  onInput,
  submitting = false,
  submitLabel = "Submit",
  children,
}) {
  if (!show) return null;
  return (
    <section className="payment-modal">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">{title}</h2>
        <form onSubmit={onSubmit}>
          {fields.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name] || ""}
              onChange={onInput}
              required={field.required}
              maxLength={field.maxLength}
              autoFocus={field.autoFocus}
            />
          ))}
          {children}
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Processing..." : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}