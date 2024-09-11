import React from "react";
import useShopStatus from "hooks/useShopStatus";
import useCurrentTime from "hooks/useCurrentTime";
import PizzaLogo from "./PizzaLogo";
import Status from "./Status";
import Navigation from "./Navigation";
import OpenCloseSign from "./OpenCloseSign";

import "./Navbar.css";

export default function Navbar() {
  const shopStat = useShopStatus();
  const [time, getHour] = useCurrentTime();
  const isOpen = getHour >= 9 && getHour <= 16 ? "open" : "closed";

  return (
    <nav
      id="pizzaNav"
      className="navbar border-bottom border-4 border-dark-s200 py-0"
    >
      <div className="container-fluid px-4">
        <div className="navLeft d-flex flex-row align-items-center">
          <PizzaLogo />
          <div className="d-flex align-items-center text-light position-relative">
            <Status time={time} />
            <span id="shopStatText" className="fs-6 px-2">
              {shopStat}
            </span>
            <OpenCloseSign status={isOpen} />
          </div>
        </div>
        <div className="navRight d-flex align-items-center">
          <Navigation />
        </div>
      </div>
    </nav>
  );
}
