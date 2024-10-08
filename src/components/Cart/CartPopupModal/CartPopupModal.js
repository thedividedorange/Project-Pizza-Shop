import React from "react";
import ProductCartLayout from "../ProductCartLayout/ProductCartLayout";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";

import "./CartPopupModal.css";

export default function CartPopupModal({ cart, isCartOpen, toggleCart }) {
  const subTotal = () =>
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.productTotalPrice,
      0
    );

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
                        <Link
                          to="/order-now"
                          className="text-body"
                          onClick={toggleCart}
                        >
                          Continue Shopping
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                        </Link>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            {cart.length === 0
                              ? "Your Cart is Empty."
                              : `You have ${cart.length} item(s) in your cart`}
                          </p>
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
                            productPrice={item.productTotalPrice}
                            productQTY={item.productQty}
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
                          <div id="ccLogos d-flex">
                            <p className="small mb-2">Card type</p>
                            <img
                              src="/assets/cc-logos.png"
                              alt="card logos"
                              className="img-fluid"
                              style={{ maxWidth: "80%" }}
                            />
                          </div>

                          <form className="mt-4">
                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                size="17"
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
                            <p className="mb-2">${subTotal()}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$5.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${subTotal() + 5.0}</p>
                          </div>

                          <Button
                            btnType="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            btnClass="d-flex w-100 btn btn-dark btn-lg justify-content-center btn-outline-secondary text-white"
                          >
                            <div className="d-flex justify-content-between">
                              <span>${subTotal() + 5.0}</span>
                              <span>
                                &nbsp;Checkout
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
