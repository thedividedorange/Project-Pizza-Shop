import { React, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useBackgroundImage from "hooks/useChangeBackground";
import Navbar from "components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Floater from "components/Floater/Floater";

const PageLayout = () => {
  const location = useLocation();
  const bodyColor = useRef(null);

  useBackgroundImage(location, bodyColor);

  return (
    <>
      <Navbar />
      <div
        id="mainContainer"
        className="container-fluid d-flex flex-column min-vh-100 px-0 bgColor"
        ref={bodyColor}
      >
        <Floater />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
