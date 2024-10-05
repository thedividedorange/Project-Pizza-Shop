import React from "react";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import "./Promo.css";

export default function Promo() {
  const navigate = useNavigate();

  return (
    <section id="promo" className="container-fluid">
      <div className="container-xl">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
}
