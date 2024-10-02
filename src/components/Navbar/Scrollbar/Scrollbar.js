import React from "react";
import useShopStatus from "hooks/useShopStatus";
import "./Scrollbar.css";

export default function Scrollbar() {
  const shopStat = useShopStatus();

  return (
    <div
      id="scrollContainer"
      className="container-fluid d-flex bg-black text-white overflow-hidden"
      style={{ height: "40px" }}
    >
      <span className="scroll p-2">{shopStat}</span>
    </div>
  );
}
