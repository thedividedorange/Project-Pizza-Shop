import React from "react";
import Layout from "./Layout";

export default function Header() {
  return (
    <Layout>
      <img
        src="assets\hero-BG-orderonline.png"
        className="img-fluid"
        style={{ maxWidth: "500px", minWidth: "150px", width: "100%" }}
        alt="Pizza"
      />
      <img
        src="assets\maneating.png"
        className="img-fluid"
        style={{ maxWidth: "500px", minWidth: "150px", width: "100%" }}
        alt="Pizza"
      />
      <div
        className="container-md text-center mb-4 p-0"
        style={{ maxWidth: "800px" }}
      >
        <p
          className="p-2"
          style={{
            color: "#fff",
            backgroundColor: "#333",
            fontSize: "1.8rem",
            fontWeight: "300",
          }}
        >
          Voted The Best Pizza, The Best Takeaway in Dublin and The Best
          Takeaway in Ireland vat the National Takeaway Awards 2018
        </p>
      </div>
    </Layout>
  );
}
