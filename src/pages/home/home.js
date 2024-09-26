import React from "react";
import Header from "components/Header/Header";
import CartContainer from "components/Cart/CartContainer";
import Testimonials from "./Testimonials/Testimonials";
import Promo from "./Promo/Promo";
import Ads from "./Ads/Ads";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <CartContainer />
      <Ads />
      <Testimonials />
      <Promo />
    </>
  );
}
