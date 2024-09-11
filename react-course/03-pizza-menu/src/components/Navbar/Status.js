import React from "react";
import "./Navbar.css";

export default function Status({ time }) {
  return (
    <>
      <div
        id="timerBox"
        className="bg-color-p500 border border-1 border-dark-s200"
      >
        <span className="timer">{time}</span>
      </div>
    </>
  );
}
