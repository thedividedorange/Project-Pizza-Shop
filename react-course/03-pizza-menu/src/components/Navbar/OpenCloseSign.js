import React from "react";

export default function OpenCloseSign() {
  return (
    <div class="container-sign">
      <label for="kubilay">
        <div class="top">
          <div class="pin">
            <div class="rope left"></div>
            <div class="rope right"></div>
          </div>
        </div>
        <div class="bottom">
          <div class="side front">Open</div>
          <div class="side back">Closed</div>
        </div>
      </label>
    </div>
  );
}
