import React from "react";

function Button({
  btnID,
  btnClass,
  btnType,
  btnOnClick,
  btnStyle,
  disabled,
  children,
  ...rest
}) {
  return (
    <button
      id={btnID}
      className={btnClass}
      type={btnType}
      onClick={btnOnClick}
      style={btnStyle}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
