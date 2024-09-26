import React from "react";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const navigate = useNavigate();

  return (
    <section
      id="testimonials"
      className="container-fluid"
      style={{
        background: `url("assets/BG-pat.jpg") repeat`,
        padding: "1em",
        border: "2px dashed #fff",
      }}
    >
      <div className="container py-3">
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
                All our pizzas are hot, fresh and good to go! Order online now!
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
  );
}
