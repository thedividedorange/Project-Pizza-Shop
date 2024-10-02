import React from "react";
import Search from "./Search/Search";
import Basket from "./Basket/Basket";
import LoginButton from "./LoginButton/LoginButton";

import "./NavRight.css";

export default function NavRight() {
  return (
    <div className="d-flex align-items-center group">
      <Search />
      <Basket />
      <LoginButton name="Login" />
    </div>
  );
}
