import React from "react";
import HeadeOrderNow from "components/Header/HeaderOrderNow";
import PizzaData from "data/PizzaData";
import Button from "components/Button/Button";
import AvailablityBadge from "components/Menu/AvailabilityBadge";
import { useState } from "react";

import "./order-now.css";

export default function Page() {
  const pizzas = PizzaData;
  const hasPizzas = pizzas.length > 0;
  // Blank array to add items to cart
  const [cart, setCart] = useState([]);
  // Check if cart is open to toggle open and close
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <HeadeOrderNow />
      <FloatingCartButton toggleCart={toggleCart} />
      <CartPopupModal cart={cart} isCartOpen={isCartOpen} />

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-2">
        <h2 className="fw-bold mt-2 border border border-2 border-start-0 border-end-0 border-dark">
          Order from below..
        </h2>
        <p
          id="menuIntro"
          className="container-fluid d-flex justify-content-center text-center fs-5 mx-auto px-2 py-4"
        >
          Get your tastebuds active again, order now!!
        </p>
        {hasPizzas ? (
          <div className="container-lg d-flex flex-wrap justify-content-center gap-2 mx-auto">
            {pizzas.map((pizza, index) => {
              return (
                <OrderCard
                  key={index}
                  pizzaObj={pizza}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        ) : (
          <p>We are still working on our menu, please come back later!</p>
        )}
      </div>
    </>
  );
}

function OrderCard({ pizzaObj, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

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
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <ProductPrice quantity={quantity} price={pizzaObj.price} />
        </div>
        <Button
          btnID="btnAtc"
          btnclass="d-flex w-100 btn btn-dark btn-lg justify-content-center btn-outline-secondary text-white"
          btnType="button"
          disabled={pizzaObj.soldOut || undefined}
        >
          {pizzaObj.soldOut ? (
            <span>UNAVAILABLE</span>
          ) : (
            <span
              onClick={() => {
                const newCartItem = {
                  productCover: pizzaObj.photoName,
                  productTitle: pizzaObj.name,
                  productDesc: pizzaObj.ingredients,
                  productPrice: pizzaObj.price,
                };
                console.log([...cart, newCartItem]);
                return setCart((cart) => [...cart, newCartItem]);
              }}
            >
              ADD TO CART
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

function QuantityControl({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="d-flex justify-content-start mb-3">
      <div className="fs-4 d-flex align-items-center position-relative">
        <p
          className="incrementor border-dark-s200 me-2 mb-0"
          onClick={onIncrement}
        >
          +
        </p>
        {quantity > 1 && (
          <p
            className="decrementor border-dark-s200 me-2 mb-0"
            onClick={onDecrement}
          >
            -
          </p>
        )}
        <p className="quantity mb-0">{quantity}</p>
      </div>
    </div>
  );
}

function ProductPrice({ quantity, price }) {
  return <p className="price fs-4 mb-0">{`$${quantity * price}`}</p>;
}

function ProductCartLayout(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={props.productCover}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "65px" }}
              />
            </div>
            <div className="ms-3">
              <h5>{props.productTitle}</h5>
              <p className="small mb-0">{props.productDesc}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "50px" }}>
              <h5 className="fw-normal mb-0">{props.productQTY}</h5>
            </div>
            <div style={{ width: "80px" }}>
              <h5 className="mb-0">${props.productPrice}</h5>
            </div>
            <a href="#!" style={{ color: "#cecece" }}>
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartPopupModal({ cart, isCartOpen }) {
  return (
    <>
      <section
        id="cartPopup"
        className={isCartOpen ? "show" : "hide"}
        style={{ background: "#5b5b5bad" }}
      >
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="productWrapper">
                        {cart.map((item, index) => (
                          <ProductCartLayout
                            key={index}
                            productCover={item.productCover}
                            productTitle={item.productTitle}
                            productDesc={item.productDesc}
                            productPrice={item.productPrice}
                            productQTY={item.productQTY}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x"></i>
                          </a>

                          <form className="mt-4">
                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                size="17"
                                placeholder="1234 5678 9012 3457"
                                minLength="19"
                                maxLength="19"
                              />
                              <label className="form-label" htmlFor="typeText">
                                Card Number
                              </label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                    minLength="7"
                                    maxLength="7"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeExp"
                                  >
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minLength="3"
                                    maxLength="3"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeText"
                                  >
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <Button
                            btnType="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            btnClass="d-flex w-100 btn btn-dark btn-lg justify-content-center btn-outline-secondary text-white"
                          >
                            <div className="d-flex justify-content-between">
                              <span>$4818.00</span>
                              <span>
                                Checkout
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FloatingCartButton({ toggleCart }) {
  return (
    <>
      <Button id="floatingCartButton" btnOnClick={toggleCart}>
        Cart
      </Button>
    </>
  );
}
