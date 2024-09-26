import React from "react";

export default function page({ children }) {
  return (
    <header className="container-lg d-flex flex-column justify-content-center align-items-center mt-4 fw-bold">
      {children}
    </header>
  );
}
