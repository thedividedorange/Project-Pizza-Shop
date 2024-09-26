import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  // const bodyColor = document.getElementById("mainContainer");

  // function changeBackground(path) {
  //   bodyColor.setAttribute(
  //     "style",
  //     `background: url("${path}") no-repeat fixed center;background-size: cover;`
  //   );
  // }
  // console.log(bodyColor);
  return (
    <ul className="d-flex flex-row text-light list-unstyled gap-2 mb-0 fs-5">
      <li className="p-2">
        <Link
          to="/"
          className="text-light text-decoration-none"
          // onClick={() => changeBackground("assets/home-bg.png")}
        >
          Home
        </Link>
      </li>
      <li className="p-2">
        <Link to="/pricing" className="text-light text-decoration-none">
          Pricing
        </Link>
      </li>
      <li className="p-2">
        <Link to="/order-now" className="text-light text-decoration-none">
          Order Now
        </Link>
      </li>
      <li className="p-2">
        <Link to="/" className="text-light text-decoration-none">
          About Us
        </Link>
      </li>
    </ul>
  );
}
