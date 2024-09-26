import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";

import "./Ads.css";

export default function Ads() {
  const navigate = useNavigate();

  return (
    <section id="ads" className="container-fluid text-center py-5">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div
              className="adsWrapperLeft rounded p-3 h-100"
              style={{
                background:
                  'url("/assets/adbar-BG-right.png") no-repeat fixed center',
                backgroundSize: "cover",
              }}
            >
              <div className="row h-100">
                <div className="col-md-8 order-2 order-md-1">
                  <div className="d-flex flex-column align-items-center align-items-md-end justify-content-evenly">
                    <h2 className="fs-2 text-white">SPECIAL OFFERS</h2>
                    <p className="text-white text-md-end">
                      To find out about the latest special offers, sign up for
                      our newsletter.
                    </p>
                    <form
                      className="row needs-validation"
                      noValidate
                      style={{ margin: "0" }}
                    >
                      <div className="col d-flex">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                          style={{
                            width: "100%",
                            maxWidth: "250px",
                          }}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Email.
                        </div>
                        <Button
                          btnClass={`btn btn-dark btn-lg btn-outline-secondary text-white ms-1`}
                          btnType="submit"
                          btnStyle={{ maxWidth: "20em" }}
                        >
                          GO!
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center order-1 order-md-2">
                  <img
                    src="assets/delicious-italian-pizza.png"
                    alt="pizza art"
                    className="img-fluid mb-4"
                    style={{ minWidth: "120px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="adsWrapperRight rounded p-3 h-100"
              style={{
                background:
                  'url("/assets/adbar-BG-right.png") no-repeat fixed center',
                backgroundSize: "cover",
              }}
            >
              <div className="row h-100">
                <div className="col-md-4 d-flex align-items-center justify-content-center order-1">
                  <img
                    src="assets/slicePizza.png"
                    alt="pizza art"
                    className="img-fluid mb-4"
                    style={{ minWidth: "120px", width: "100%" }}
                  />
                </div>
                <div className="col-md-8 order-2">
                  <div className="d-flex flex-column align-items-center align-items-md-start justify-content-evenly">
                    <h2 className="fs-2 text-white">ORDER ONLINE</h2>
                    <p className="text-white text-md-start">
                      Now it's even easier to get your hands on the very best
                      Pizza in all of Dublin.
                    </p>
                    <Button
                      btnClass={`btn btn-dark btn-lg btn-outline-secondary text-white`}
                      btnType="button"
                      btnStyle={{ maxWidth: "20em" }}
                      btnOnClick={() => navigate("/order-now")}
                    >
                      ORDER NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
