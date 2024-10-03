import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "components/Button/Button";
import LoginButton from "../NavRight/LoginButton/LoginButton";

import "./NavigationLinks.css";

export default function NavigationLinks() {
  const [dropdown, toggleDropDown] = useState(false);

  const mobileNavItems = [
    { label: "Home", link: "/" },
    { label: "Price", link: "/" },
    { label: "Order Now", link: "/" },
    { label: "Login", link: "/" },
  ];

  return (
    <>
      <ul
        id="navDesktop"
        className=" d-flex flex-row text-light list-unstyled gap-3 mb-0 fs-6"
      >
        <li className="p-2 flex-grow-1 flex-shrink-1">
          <Link
            to="/"
            className="text-light text-danger-hover text-decoration-none"
          >
            Home
          </Link>
        </li>
        <li className="p-2 flex-grow-1 flex-shrink-1">
          <Link
            to="/pricing"
            className="text-light hover:text-danger text-decoration-none"
          >
            Pricing
          </Link>
        </li>
        <li className="p-2 flex-grow-1 flex-shrink-1 ">
          <Link
            to="/order-now"
            className="text-light hover:text-danger text-decoration-none"
          >
            Order Now
          </Link>
        </li>
        <li className="p-2 flex-grow-1 flex-shrink-1">
          <Link
            to="/"
            className="text-light hover:text-danger text-decoration-none"
          >
            About Us
          </Link>
        </li>
      </ul>

      <div id="navMobile" className="dropdown m-1">
        <Button
          btnID="burger"
          btnClass="btn btn-outline-light px-2 py-1"
          btnType="button"
          data-toggle="dropdown"
          btnOnClick={() => toggleDropDown(!dropdown)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            width="24px"
            height="24px"
            className="dropdown-icon"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18L20 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M4 6L20 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </Button>
        <ul
          className={`dropdown-menu bg-transparent ${
            dropdown ? "show" : "hide"
          }`}
        >
          {mobileNavItems.map((item, index) => {
            const navEnd =
              item.label === "Login" ? (
                <div className="d-flex justify-content-center pt-2">
                  <LoginButton name="Login" />
                </div>
              ) : (
                <>
                  <Link
                    to={item.link}
                    className="text-white hover-text-danger text-decoration-none px-1"
                  >
                    {item.label}
                  </Link>
                  <span className="border border-bottom border-secondary"></span>
                </>
              );

            return (
              <li
                key={index}
                className="dropdown-item d-flex flex-column gap-2 bg-black"
                style={{
                  transformOrigin: "top-center",
                  animation: "rotateX 300ms ease-in-out forwards",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {navEnd}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
