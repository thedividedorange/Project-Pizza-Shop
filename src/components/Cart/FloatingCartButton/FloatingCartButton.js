import React from "react";
import Button from "components/Button/Button";
import "./FloatingCartButton.css";

export default function FloatingCartButton({ cart, toggleCart }) {
  return (
    <>
      <Button
        id="floatingCartButton"
        btnOnClick={toggleCart}
        btnClass={`${cart.length >= 1 ? "shake" : ""}`}
      >
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
