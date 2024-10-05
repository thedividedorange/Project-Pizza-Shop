import React from "react";

export default function page({ children }) {
  return (
    <header className="container-fluid d-flex flex-column justify-content-center align-items-center mt-5 fw-bold overflow-hidden">
      {children}
    </header>
  );
}
