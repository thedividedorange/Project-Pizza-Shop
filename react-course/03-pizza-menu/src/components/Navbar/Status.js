import React from "react";
import "./Navbar.css";

export default function Status({ time }) {
  return (
    <>
      <div className="bg-color-p500 timerBox border border-1 border-dark-s200">
        <span className="timer">{time}</span>
      </div>
    </>
  );
}
