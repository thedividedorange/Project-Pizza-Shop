import React from "react";
import "../../ordernow.css";

export default function QuantityControl({
  maxStock,
  quantity,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="d-flex justify-content-start mb-3">
      <div className="fs-4 d-flex align-items-center position-relative">
        <p
          className={`incrementor border-dark-s200 me-2 mb-0 ${
            quantity === maxStock && "disabled"
          }`}
          onClick={onIncrement}
        >
          +
        </p>
        {quantity > 1 && (
          <p
            className="decrementor border-dark-s200 me-2 mb-0"
            onClick={onDecrement}
          >
            -
          </p>
        )}
        <p className="quantity mb-0">{quantity}</p>
      </div>
    </div>
  );
}
