import React from "react";
import useShopStatus from "hooks/useShopStatus";
import "./Navbar.css";

export default function Navbar() {
  const { time, shopStat } = useShopStatus();

  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <div className="navLeft d-flex flex-row align-items-center">
          <div
            className="navbar-brand text-light"
            // style={{ marginBottom: "-12px" }}
          >
            <img
              src="/assets/logo.png"
              className="d-block img-fluid"
              style={{ maxWidth: "100px", height: "auto" }}
              alt="Sams Pizzas"
            />
          </div>
          <div className="d-flex align-items-baseline text-light">
            <div className="w-fixed">{time}</div>
            <span className="fs-6 px-2">We are {shopStat}</span>
          </div>
        </div>
        <div className="navRight d-flex align-items-center">
          <ul className="list-unstyled d-flex flex-row text-light gap-4 mb-0">
            <li className="">Home</li>
            <li className="">Pricing</li>
            <li className="">Order Now</li>
            <li className="">About Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
