import React from "react";
import Layout from "./Layout";
import Button from "components/Button/Button";

import "./Header.css";

export default function Header() {
  return (
    <Layout>
      <div id="HomeHeaderContainer" class="container-fluid">
        <div id="headerHome" className="container-xl">
          <div className="row">
            <div className="col">
              <div className="customerRatings d-flex flex-row align-items-center gap-3">
                <img
                  className="img-fluid flex-shrink-1"
                  src="assets/happycust.svg"
                  alt="Happy customers"
                  style={{ filter: "brightness(120%)" }}
                />
                <p className="mb-0 text-light fw-normal">
                  Over 2500 Happy Customers ⭐⭐⭐⭐⭐
                </p>
              </div>
              <div className="row">
                <div className="col">
                  <div className="homeTitle d-flex">
                    <h1>
                      The Best <span className="text-danger">Takeaway</span> in
                      <img
                        src="assets/ireland.svg"
                        alt="Ireland Flag"
                        style={{ padding: "0px 6px" }}
                      />
                      Ireland
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="homeIntro ">
                    <p className="fw-normal text-white">
                      Voted The Best Pizza, The Best Takeaway in Dublin and The
                      Best Takeaway in Ireland winning the National Takeaway
                      awards 2024
                    </p>
                  </div>
                </div>
              </div>
              <div id="introButtonsWrapper" className="row  gap-1">
                <div className="col col-lg-3">
                  <div className="introButtons d-flex">
                    <Button btnClass="getYourPizza btn btn-danger d-flex rounded-pill px-4">
                      Get Your Pizza
                    </Button>
                  </div>
                </div>
                <div className="col col-lg-3">
                  <div className="introButtons d-flex">
                    <Button btnClass="discover btn btn-dark d-flex rounded-pill gap-3 px-3">
                      Discover Our Pricing{" "}
                      <img src="/assets/right-arrow.svg" alt="right arrow" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
