import React from "react";
import PizzaData from "data/PizzaData";

import "./Ads.css";

function MenuCards({ itemNames }) {
  const pizzas = PizzaData;
  const pizzasNames = itemNames.split(",").map((item) => item.trimStart());

  return (
    <>
      {pizzas
        .filter((pizza) => pizzasNames.includes(pizza.name))
        .map((item) => (
          <div
            className="card"
            style={{
              width: "22rem",
              height: "35rem",
              borderRadius: "18px",
              padding: "6px",
              backgroundColor: "#2B2B2B",
            }}
          >
            <img
              src={item.photoName}
              alt=""
              style={{
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",
                objectFit: "cover",
                height: "50%",
                width: "100%",
              }}
            />
            <div className="card-body text-center d-flex flex-column">
              <h3 className="card-title text-white fs-2 font-bold mb-1">
                {item.name}
              </h3>
              <span
                className="menu-ratings mb-4"
                style={{ fontSize: "1.5rem" }}
              >
                ⭐⭐⭐⭐⭐
              </span>
              <p
                class="card-text text-white mb-5"
                style={{ fontSize: "0.9rem" }}
              >
                {item.ingredients}
              </p>
              <p className="menu-price text-white fs-2">${item.price}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default function Ads() {
  return (
    <section id="popularDishes" className="container-fluid mb-5">
      <div className="container-xl">
        <div className="row">
          <div className="col pb-3">
            <h2>Popular Dishes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col pb-3">
            <h5 style={{ fontSize: "1.2rem" }}>Menu Cards</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-wrap gap-4 gap-lg-5 justify-content-center justify-content-lg-evenly">
              <MenuCards itemNames={"Margherita, Spinaci, Funghi"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
