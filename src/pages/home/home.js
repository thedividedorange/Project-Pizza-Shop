import React from "react";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import CartContainer from "components/Cart/CartContainer";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <CartContainer />

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
                              padding: "0",
                              margin: "0",
                              width: "100%",
                              maxWidth: "250px",
                              minWidth: "150px",
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
                  <div className="col-md-4 order-1 order-md-2">
                    <img
                      src="assets/pizza-art1.png"
                      alt="pizza art"
                      className="img-fluid mb-4"
                      style={{ minWidth: "100px", width: "100%" }}
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
                  <div className="col-md-4 order-1">
                    <img
                      src="assets/pizza-art1.png"
                      alt="pizza art"
                      className="img-fluid mb-4"
                      style={{ minWidth: "100px", width: "100%" }}
                    />
                  </div>
                  <div className="col-md-8 order-2">
                    <div className="d-flex flex-column align-items-center align-items-md-start justify-content-evenly">
                      <h2 className="fs-2 text-white">ORDER ONLINE</h2>
                      <p className="text-white text-md-start">
                        To find out about the latest special offers, sign up for
                        our newsletter.
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
      <section
        id="testimonials"
        className="container-fluid"
        style={{
          background: `url("assets/BG-pat.jpg") repeat`,
          padding: "1em",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src="assets/pizza-top.png"
                alt="pizza art"
                className="img-fluid"
                style={{ minWidth: "100px", width: "70%" }}
              />
            </div>
            <div className="col-md-8">
              <div
                id="quoteText"
                className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start border-dark-s200 pt-lg-4"
              >
                <h2 className="fs-1">Freshly Baked from The Oven</h2>
                <p style={{ fontSize: "1.8rem", color: "#fff" }}>
                  All our pizzas are hot, fresh and good to go! Order online
                  now!
                </p>
                <Button
                  btnClass={`btn btn-dark btn-lg btn-outline-secondary text-white w-50`}
                  btnType="button"
                  btnStyle={{ maxWidth: "16em" }}
                  btnOnClick={() => navigate("/order-now")}
                >
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="promo" className="container-fluid">
        <div className="container py-5 px-2">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div id="promoBox" className="p-4 text-center">
                <h2>DARE TO BE DIFFERENT!</h2>
                <button className="btn btn-dark btn-lg btn-outline-secondary text-white w-full">
                  ORDER ONLINE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
