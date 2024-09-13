import React from "react";
import { useState } from "react";
import Button from "components/Button/Button";
import "./Floater.css";

function Floater() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        btnClass={`sidebar-toggle ${isOpen ? "active" : ""}`}
        btnOnClick={toggleSidebar}
        btnExtras={
          <img
            id="toggleIcon"
            src="assets/bars-svg.svg"
            style={{ width: "30px" }}
            alt="hamburger Icon"
          />
        }
      />

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-content">
          <p>
            Designed by&nbsp;
            <a
              href="https://github.com/TheDividedOrange"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheDividedOrange&nbsp;
            </a>
            on GitHub
          </p>
        </div>
      </div>
    </>
  );
}

export default Floater;
