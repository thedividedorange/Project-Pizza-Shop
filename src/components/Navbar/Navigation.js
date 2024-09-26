import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="d-flex flex-row text-light list-unstyled gap-2 mb-0 fs-5">
      <li className="p-2">
        <Link to="/" className="text-light text-decoration-none">
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
