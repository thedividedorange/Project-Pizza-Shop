import React from "react";
import CartPopupModal from "./CartPopupModal";
import FloatingCartButton from "./FloatingCartButton";
import { useCart } from "./CartContext";

export default function CartContainer() {
  const { cart, isCartOpen, toggleCart } = useCart();

  return (
    <>
      <CartPopupModal cart={cart} isCartOpen={isCartOpen} />
      <FloatingCartButton toggleCart={toggleCart} />
    </>
  );
}
