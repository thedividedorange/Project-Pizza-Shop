import React from "react";
import Header from "components/Header/Header";
import Menu from "./Menu/Menu";
import ShopMsg from "./ShopStatus/ShopMsg";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <ShopMsg />
    </>
  );
}
