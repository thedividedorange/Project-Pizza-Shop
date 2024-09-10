import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar />
      <header className="container-fluid mt-2 text-center fw-bold">
        <h1 className="fontSize38 mt-5">Pizza Menu</h1>
      </header>
    </>
  );
}
