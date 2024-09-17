import React from "react";
import OrderCard from "./OrderCard/OrderCard";

export default function PizzaList({ hasPizzas, pizzas, cart, setCart }) {
  return (
    <>
      {hasPizzas ? (
        <div className="container-lg d-flex flex-wrap justify-content-center gap-2 mx-auto">
          {pizzas.map((pizza, index) => {
            return (
              <OrderCard
                key={index}
                pizzaObj={pizza}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
      ) : (
        <p>We are still working on our menu, please come back later!</p>
      )}
    </>
  );
}
