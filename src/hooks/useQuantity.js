import { useState } from "react";

export default function useQuantity(maxStock) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < maxStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return {
    quantity,
    handleIncrement,
    handleDecrement,
    setQuantity,
  };
}
