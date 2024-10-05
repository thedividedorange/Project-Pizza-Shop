import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="container-fluid">
      <div
        id="testimonials"
        className="container-xl"
        style={{ height: "700px", clear: "both", marginBottom: "8em" }}
      >
        <div className="row">
          <div className="col" style={{ paddingBottom: "4em" }}>
            <h2>Why You Need to Eat Here</h2>
          </div>
        </div>
        <div
          className="row d-flex flex-nowrap"
          style={{ height: "45%", width: "100%" }}
        >
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/chicken.svg"
                  alt="chicken logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white  text-center">
                Clean Food
              </p>
            </div>
          </div>
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/internet.svg"
                  alt="internet logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white text-center">
                Easy Online Ordering
              </p>
            </div>
          </div>
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/Delivery.svg"
                  alt="Delivery logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white  text-center">
                Fast Delivery
              </p>
            </div>
          </div>
        </div>
        <div
          className="row d-flex flex-nowrap"
          style={{ height: "45%", width: "100%" }}
        >
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/Secure.svg"
                  alt="Secure logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white  text-center">
                Secure Payments
              </p>
            </div>
          </div>
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/Heart.svg"
                  alt="Heart logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white text-center">
                Health & Safety Certifications
              </p>
            </div>
          </div>
          <div className="col d-flex" style={{ flexGrow: 1, flexShrink: 1 }}>
            <div
              className="wrapper d-flex flex-column justify-content-start align-items-center"
              style={{ flexGrow: 1, flexShrink: 1 }}
            >
              <div
                className="box bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "30%",
                  minWidth: "100px",
                  aspectRatio: "1/1",
                }}
              >
                <img
                  src="assets/dish 3.svg"
                  alt="dish logo"
                  className="img-fluid w-50 h-50"
                />
              </div>
              <p className="pt-4 mb-0 fs-3 fw-semibold text-white  text-center">
                Unique Dishes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
