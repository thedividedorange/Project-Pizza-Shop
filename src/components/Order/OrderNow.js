import React from "react";
import Button from "components/Button/Button";

export default function OrderNow({ msg, buttonClass }) {
  return (
    <>
      <p className="d-flex justify-content-center fs-5">{msg}</p>
      <div className="d-flex justify-content-center">
        <Button
          btnClass={`btn btn-dark btn-lg btn-outline-secondary text-white w-50 mb-5 ${buttonClass}`}
          btnType="button"
          btnStyle={{ maxWidth: "20em" }}
          btnName="Order Now"
        />
      </div>
    </>
  );
}
