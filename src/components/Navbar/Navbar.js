import React from "react";
import useCurrentTime from "hooks/useCurrentTime";
import PizzaLogo from "./PizzaLogo";
import Status from "./Status";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavRight from "./NavRight/NavRight";
import Basket from "./NavRight/Basket/Basket";
import Search from "./NavRight/Search/Search";
import Scrollbar from "./Scrollbar/Scrollbar";
import OpenCloseSign from "./OpenCloseSign";

import "./Navbar.css";

export default function Navbar() {
  const [time, getHour] = useCurrentTime();
  const isOpen = getHour >= 9 && getHour <= 16 ? "open" : "closed";

  return (
    <>
      <nav
        id="pizzaNav"
        className="navbar border-bottom border-4 border-dark-s200 py-0"
      >
        <div className="container-fluid justify-content-between px-4">
          <div className="navLeft d-flex flex-row align-items-center">
            <PizzaLogo />
            <div className="d-flex align-items-center text-light position-relative">
              <Status time={time} />
              <OpenCloseSign status={isOpen} />
            </div>
          </div>
          <div className="navMid d-flex flex-row shrink-0 gap-3 justify-content-center align-items-center">
            <Search />
            <Basket />
            <NavigationLinks />
          </div>
          <div className="navRight">
            <NavRight />
          </div>
        </div>
      </nav>
      <Scrollbar />
    </>
  );
}
