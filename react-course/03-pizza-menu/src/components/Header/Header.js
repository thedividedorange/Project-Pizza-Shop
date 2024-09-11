import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar />
      <header className="container-lg d-flex justify-content-center align-items-baseline mt-2 text-center fw-bold">
        <h1 className="display-1 text-uppercase m-2">Pizza Menu</h1>
      </header>
    </>
  );
}
