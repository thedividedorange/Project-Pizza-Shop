import React from "react";
import "../../ordernow.css";

export default function ProductPrice({ quantity, price }) {
  return (
    <p className="price fs-4 mb-0">{`$${
      quantity > 0 ? quantity * price : price
    }`}</p>
  );
}
