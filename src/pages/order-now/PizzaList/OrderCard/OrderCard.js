import React from "react";
import { useEffect } from "react";
import useQuantity from "hooks/useQuantity";
import AvailablityBadge from "components/AvailabilityBadge/AvailabilityBadge";
import QuantityControl from "./QuantityControl";
import ProductPrice from "./ProductPrice";
import Button from "components/Button/Button";
import UpdatePizzaData from "./updatePizzaData";

import "../../ordernow.css";

export default function OrderCard({ pizzaObj, cart, setCart }) {
  const { quantity, handleIncrement, handleDecrement, setQuantity } =
    useQuantity(pizzaObj.qty);

  useEffect(() => {
    if (quantity > pizzaObj.qty) {
      setQuantity(pizzaObj.qty);
    }
  }, [pizzaObj.qty, quantity, setQuantity]);

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
            maxStock={pizzaObj.qty}
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
          btnOnClick={() => AddToCart(pizzaObj, cart, setCart, quantity)}
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

function AddToCart(pizzaObj, cart, setCart, quantity) {
  if (pizzaObj.soldOut) return undefined;

  const newCartItem = {
    productCover: pizzaObj.photoName,
    productTitle: pizzaObj.name,
    productDesc: pizzaObj.ingredients,
    productPrice: pizzaObj.price,
    productQty: quantity,
    productTotalPrice:
      quantity > 1 ? pizzaObj.price * quantity : pizzaObj.price,
  };

  UpdatePizzaData(pizzaObj.name, quantity);

  const findPizza = cart.findIndex(
    (PizzaItem) => PizzaItem.productTitle === newCartItem.productTitle
  );

  return findPizza === -1
    ? setCart((cart) => [...cart, newCartItem])
    : setCart((cart) =>
        cart.map((item, index) =>
          index === findPizza
            ? {
                ...item,
                productQty: item.productQty + newCartItem.productQty,
                productTotalPrice:
                  item.productTotalPrice + newCartItem.productTotalPrice,
              }
            : item
        )
      );
}
