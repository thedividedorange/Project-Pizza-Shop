import React from "react";
import "./Promo.css";

export default function promo() {
  return (
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
  );
}
