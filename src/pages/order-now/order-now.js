import React from "react";
import { useState } from "react";
import HeadeOrderNow from "components/Header/HeaderOrderNow";
import PizzaData from "data/PizzaData";
import Cart from "components/Cart/Cart";
import PizzaList from "./PizzaList/PizzaList";

export default function OrderPage() {
  const pizzas = PizzaData;
  const hasPizzas = pizzas.length > 0;
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <HeadeOrderNow />
      <Cart cart={cart} isCartOpen={isCartOpen} toggleCart={toggleCart} />

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-2">
        <h2 className="fw-bold mt-2 border border border-2 border-start-0 border-end-0 border-dark">
          Order from below..
        </h2>
        <p
          id="menuIntro"
          className="container-fluid d-flex justify-content-center text-center fs-5 mx-auto px-2 py-4"
        >
          Get your tastebuds active again, order now!!
        </p>
        <PizzaList
          hasPizzas={hasPizzas}
          pizzas={pizzas}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
}
