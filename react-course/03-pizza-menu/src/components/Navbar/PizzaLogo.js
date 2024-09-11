import React from "react";

export default function PizzaLogo() {
  return (
    <div className="navbar-brand text-light">
      <img
        src="/assets/logo.png"
        className="d-block img-fluid"
        style={{ maxWidth: "100px", height: "auto" }}
        alt="Sams Pizzas"
      />
    </div>
  );
}
