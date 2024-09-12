import React from "react";
import PizzaData from "data/PizzaData";
import PizzaLayout from "components/Layout/PizzaItem";
import "./Menu.css";

export default function Menu() {
  const pizzas = PizzaData;
  const hasPizzas = pizzas.length > 0;

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-2">
      <h2 className="fw-bold mt-2 border border border-2 border-start-0 border-end-0 border-dark">
        Our Menu
      </h2>
      <p
        id="menuIntro"
        className="container-fluid d-flex justify-content-center text-center fs-5 mx-auto px-2 py-4"
      >
        Browse our Authentic Italian cuisine & creative dishes to choose from.
        All from our stone oven, all Organic, all Delicious.
      </p>

      {hasPizzas ? (
        <div className="container-lg d-flex flex-wrap justify-content-center gap-2 mx-auto">
          {pizzas.map((pizza) => {
            return <PizzaLayout key={pizza.name} pizzaObj={pizza} />;
          })}
        </div>
      ) : (
        <p>We are still working on our menu, please come back later!</p>
      )}
    </div>
  );
}
