import React from "react";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import "./Promo.css";

export default function Promo() {
  const navigate = useNavigate();

  return (
    <section id="promo" className="container-fluid">
      <div className="container py-5 px-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div id="promoBox" className="p-4 text-center">
              <h2>DARE TO BE DIFFERENT!</h2>
              <Button
                btnClass={
                  "btn btn-dark btn-lg btn-outline-secondary text-white w-full"
                }
                btnType="button"
                btnOnClick={() => navigate("/order-now")}
              >
                ORDER ONLINE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
