import pizzaData from "data/PizzaData";

export default function UpdatePizzaData(pizzaName, OrderQty) {
  const index = pizzaData.findIndex((item) => item.name === pizzaName);
  if (index !== -1) {
    pizzaData[index].qty = Math.max(pizzaData[index].qty - OrderQty, 0);

    if (pizzaData[index].qty === 0) {
      pizzaData[index].soldOut = true;
    }
  }
}
