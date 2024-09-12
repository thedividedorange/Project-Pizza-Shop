import React from "react";
import { useState } from "react";
import Button from "components/Button/Button";

import "./Floater.css";

function Floater() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(Button);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <img
          id="toggleIcon"
          src="assets/bars-svg.svg"
          style={{ width: "30px" }}
          alt="hamburger Icon"
        />
      </button>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-content">
          <p>
            Designed by{" "}
            <a
              href="https://github.com/TheDividedOrange"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheDividedOrange
            </a>{" "}
            on GitHub
          </p>
        </div>
      </div>
    </>
  );
}

export default Floater;
