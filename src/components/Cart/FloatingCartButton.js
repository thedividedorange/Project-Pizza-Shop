import React from "react";
import Button from "components/Button/Button";
import "./Cart.css";

export default function FloatingCartButton({ toggleCart }) {
  return (
    <>
      <Button id="floatingCartButton" btnOnClick={toggleCart}>
        <img
          id="toggleIcon"
          src="assets/cart.svg"
          style={{ width: "30px" }}
          alt="hamburger Icon"
        />
      </Button>
    </>
  );
}
