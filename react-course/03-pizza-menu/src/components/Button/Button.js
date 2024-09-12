import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.btnClass}
      type={props.btnType}
      onClick={props.btnOnClick}
      style={props.btnStyle}
    >
      {props.btnName}
      {props.btnExtras}
    </button>
  );
};

export default Button;
