import React from "react";

export default function AvailablityBadge({ item, stockMsg, OOSMsg }) {
  return (
    <>
      <span className={`badge ${item.soldOut ? "bg-danger" : "bg-success"}`}>
        {item.soldOut ? OOSMsg : stockMsg}
      </span>
    </>
  );
}
