import React from "react";
import CartPopupModal from "./CartPopupModal/CartPopupModal";
import FloatingCartButton from "./FloatingCartButton/FloatingCartButton";
import { useCart } from "./CartContext";

export default function CartContainer() {
  const { cart, isCartOpen, toggleCart } = useCart();

  return (
    <>
      <CartPopupModal
        cart={cart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      <FloatingCartButton cart={cart} toggleCart={toggleCart} />
    </>
  );
}
