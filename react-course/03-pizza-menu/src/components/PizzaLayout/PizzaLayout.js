import React from "react";

export default function PizzaLayout(props) {
  return props.pizzaObj.soldOut ? null : (
    <div className="d-flex p-2 gap-3" style={{ width: "26em" }}>
      <div className="d-flex flex-shrink-0">
        <img
          src={props.pizzaObj.photoName}
          className="img-fluid rounded"
          style={{ width: "13em", objectFit: "contain" }}
          alt={props.pictureAlt}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-start flex-grow-1"
        style={{ maxWidth: "calc(100% - 170px)", flexBasis: 0 }}
      >
        <h2 className="fs-3 fw-bold">{props.pizzaObj.name}</h2>
        <p className="fs-5">{props.pizzaObj.ingredients}</p>
        <span className="mt-auto fs-4 fw-bold">${props.pizzaObj.price}</span>
      </div>
    </div>
  );
}
