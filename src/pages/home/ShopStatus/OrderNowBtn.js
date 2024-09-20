import React from "react";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function OrderNow({ msg, buttonClass }) {
  const navigate = useNavigate();
  return (
    <>
      <p className="d-flex justify-content-center fs-5">{msg}</p>
      <div className="d-flex justify-content-center">
        <Button
          btnClass={`btn btn-dark btn-lg btn-outline-secondary text-white w-50 mb-5  ${buttonClass}`}
          btnType="button"
          btnStyle={{ maxWidth: "20em" }}
          btnOnClick={() => navigate("/order-now")}
        >
          Order Now
        </Button>
      </div>
    </>
  );
}
