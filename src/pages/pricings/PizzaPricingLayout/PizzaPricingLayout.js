import React from "react";

export default function PizzaPricingLayout({ pizzaObj }) {
  return (
    <li
      id="listRow"
      className="list-group-item d-flex align-items-center px-3 py-2"
    >
      <div className="d-flex align-items-center">
        <img src={pizzaObj.photoName} className="me-3" alt={pizzaObj.alt} />
        <div>
          <h5 className="mb-1">{pizzaObj.name}</h5>
          <p className="mb-0">{pizzaObj.ingredients}</p>
        </div>
      </div>
      <div className="ms-auto text-end">
        <h5 className="mb-1">${pizzaObj.price}</h5>
      </div>
    </li>
  );
}
