import React from "react";
import HeaderPricing from "components/Header/HeaderPricing";
import PizzaPricingLayout from "components/Menu/PizzaPricingLayout/PizzaPricingLayout";
import pizzaData from "../../data/PizzaData";

import "./pricing.css";

export default function Pricing() {
  const pizzas = pizzaData;
  const hasPizzas = pizzas.length > 0;
  return (
    <>
      <HeaderPricing />
      <div id="pricingList" className="container py-5">
        <div className="list-container">
          <ul className="list-group border-dark-s200">
            {hasPizzas ? (
              pizzas.map((pizza) => (
                <PizzaPricingLayout key={pizza.name} pizzaObj={pizza} />
              ))
            ) : (
              <li className="list-group-item border-dark-s200">
                No pizzas available
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
