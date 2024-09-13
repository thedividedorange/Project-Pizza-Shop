import React from "react";
import HeaderPricing from "components/Header/HeaderPricing";
import PizzaPricingCard from "components/Layout/PizzaPricingCard";
import pizzaData from "../../data/PizzaData";

import "./pricing.css";

export default function Pricing() {
  const pizzas = pizzaData;
  const hasPizzas = pizzas.length > 0;
  return (
    <>
      <HeaderPricing />
      <div className="container py-5">
        <div className="list-container">
          <ul id="pricingList" className="list-group border-dark-s200">
            {hasPizzas ? (
              pizzas.map((pizza) => (
                <PizzaPricingCard key={pizza.name} pizzaObj={pizza} />
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
