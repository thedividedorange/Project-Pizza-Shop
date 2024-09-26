import React from "react";

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-center align-items-center mt-auto border-4 border-dark-s200"
      style={{ backgroundColor: "var(--color-surface-300)" }}
    >
      <p
        className="text-light"
        style={{
          padding: "1em",
          marginBottom: "0",
          fontWeight: "700",
        }}
      >
        Designed By TheDividedOrange
      </p>
    </footer>
  );
}
