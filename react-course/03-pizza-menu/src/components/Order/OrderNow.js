import React from "react";

export default function OrderNow(props) {
  return (
    <>
      <p className="d-flex justify-content-center fs-5">{props.msg}</p>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className={`btn btn-dark btn-lg btn-outline-secondary text-white w-50 ${props.class}`}
          style={{ maxWidth: "20em" }}
        >
          Order Now
        </button>
      </div>
    </>
  );
}
