import React from "react";

export default function OpenCloseSign({ status }) {
  return (
    <div id="openCloseContainer" className="container-sign">
      <label htmlFor="kubilay">
        <div className="top">
          <div className="pin">
            <div className="rope left"></div>
            <div className="rope right"></div>
          </div>
        </div>
        <div className="bottom">
          <div className={`side ${status === "open" ? "front" : "back"}`}>
            {status === "open" ? "Open" : "Closed"}
          </div>
        </div>
      </label>
    </div>
  );
}
