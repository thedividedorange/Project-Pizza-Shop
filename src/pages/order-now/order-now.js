import React from "react";
import HeadeOrderNow from "components/Header/HeaderOrderNow";
import PizzaData from "data/PizzaData";
import PizzaList from "./PizzaList/PizzaList";
import { useCart } from "components/Cart/CartContext";
import CartContainer from "components/Cart/CartContainer";

export default function OrderPage() {
  const pizzas = PizzaData;
  const hasPizzas = pizzas.length > 0;
  const { cart, setCart } = useCart();

  return (
    <>
      <HeadeOrderNow />
      <CartContainer cart={cart} setCart={setCart} />

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-2 pb-5">
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
