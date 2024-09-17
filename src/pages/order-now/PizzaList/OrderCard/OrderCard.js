import React from "react";
import { useState } from "react";
import AvailablityBadge from "components/AvailabilityBadge/AvailabilityBadge";
import QuantityControl from "./QuantityControl";
import ProductPrice from "./ProductPrice";
import Button from "components/Button/Button";

import "../../ordernow.css";

export default function OrderCard({ pizzaObj, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div
      id="orderCard"
      className="card position-relative"
      style={{ width: "24em" }}
    >
      <img
        className={`card-img-top ${pizzaObj.soldOut ? "out-of-stock" : ""}`}
        src={pizzaObj.photoName}
        alt={pizzaObj.alt}
        style={{ objectFit: "contain" }}
      />
      <div id="badgeContainer">
        <AvailablityBadge
          item={pizzaObj}
          stockMsg="In Stock"
          OOSMsg="Out of Stock"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{pizzaObj.name}</h4>
        <p className="card-text">{pizzaObj.ingredients}</p>
        <div className="d-flex justify-content-between">
          <QuantityControl
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <ProductPrice quantity={quantity} price={pizzaObj.price} />
        </div>
        <Button
          btnID="btnAtc"
          btnClass="d-flex w-100 btn btn-dark btn-lg justify-content-center btn-outline-secondary text-white"
          btnType="button"
          disabled={pizzaObj.soldOut || undefined}
          btnOnClick={
            !pizzaObj.soldOut
              ? () => {
                  const newCartItem = {
                    productCover: pizzaObj.photoName,
                    productTitle: pizzaObj.name,
                    productDesc: pizzaObj.ingredients,
                    productPrice: pizzaObj.price,
                  };

                  return setCart((cart) => [...cart, newCartItem]);
                }
              : undefined
          }
        >
          {pizzaObj.soldOut ? (
            <span>UNAVAILABLE</span>
          ) : (
            <span>ADD TO CART</span>
          )}
        </Button>
      </div>
    </div>
  );
}
