import { React } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Floater from "components/Floater/Floater";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <div
        id="mainContainer"
        className="container-fluid d-flex flex-column min-vh-100 px-0 bg-black"
      >
        <Floater />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
