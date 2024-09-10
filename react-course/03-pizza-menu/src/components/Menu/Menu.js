import React from "react";
import PizzaData from "data/PizzaData";
import PizzaLayout from "components/PizzaLayout/PizzaLayout";

export default function Menu() {
  const dataFetch = PizzaData();

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-2">
        <h2 className="fw-bold mt-2 border border border-2 border-start-0 border-end-0 border-dark">
          Our Menu
        </h2>
        <p className="container-fluid d-flex justify-content-center text-center fs-5 mx-auto px-2 py-4 w-50">
          Browse our Authentic Italian cuisine & creative dishes to choose from.
          All from our stone oven, all Organic, all Delicious.
        </p>
        <div className="container-lg d-flex flex-wrap justify-content-center gap-2 mx-auto">
          {dataFetch.map((p) => {
            return (
              <PizzaLayout
                name={p.name}
                ingredients={p.ingredients}
                picture={p.photoName}
                pictureAlt={p.alt}
                price={p.price}
                inStock={p.soldOut}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
