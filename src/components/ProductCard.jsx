import React from "react";

function ProductCard({ product, onAdd, qty = 0, onRemove }) {
  return (
    <div className="product-card-v2">
      <div className="product-img-v2">{product.emoji}</div>
      <div className="product-info-v2">
        <div className="product-title-v2">{product.name}</div>
        <div className="product-weight-v2">{product.weight}g</div>
        <ul className="product-ingredients-v2">
          {product.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
      {/* AICI, fix deasupra cart-actions-v2 */}
      <div className="product-card-bottom-zone">
        <div className="product-price-v2" style={{ marginBottom: "0.5em", marginTop: 0 }}>
          €{product.price.toFixed(2)}
        </div>
        {typeof onAdd === "function" && (
          <div className="cart-actions-v2">
            {typeof onRemove === "function" && (
              <button
                className="cart-btn-v2"
                aria-label="Remove one from cart"
                disabled={qty === 0}
                onClick={() => onRemove(product)}
                tabIndex={0}
              >
                -
              </button>
            )}
            <span className="cart-qty-v2">{qty}</span>
            <button
              className="cart-btn-v2"
              aria-label="Add to cart"
              onClick={() => onAdd(product)}
              tabIndex={0}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;