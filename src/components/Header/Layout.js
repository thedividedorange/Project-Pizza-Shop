import React from "react";

export default function page({ children }) {
  return (
    <header className="container-lg d-flex justify-content-center align-items-baseline mt-5 text-center fw-bold">
      {children}
    </header>
  );
}
