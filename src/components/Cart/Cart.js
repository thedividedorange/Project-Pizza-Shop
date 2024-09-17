import React from "react";
import CartPopupModal from "./CartPopupModal";
import FloatingCartButton from "./FloatingCartButton";

export default function Cart({ cart, isCartOpen, toggleCart }) {
  return (
    <>
      <CartPopupModal cart={cart} isCartOpen={isCartOpen} />
      <FloatingCartButton toggleCart={toggleCart} />
    </>
  );
}
