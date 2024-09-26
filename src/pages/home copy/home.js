import React from "react";
import Header from "components/Header/Header";
import Menu from "./Menu/Menu";
import ShopMsg from "./ShopStatus/ShopMsg";

import CartContainer from "components/Cart/CartContainer";

export default function Home() {
  return (
    <>
      <Header />
      <CartContainer />
      <Menu />
      <ShopMsg />
    </>
  );
}
