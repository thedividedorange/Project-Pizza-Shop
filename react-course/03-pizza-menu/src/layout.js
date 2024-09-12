import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Floater from "components/Floater/Floater";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column min-vh-100 px-0 body-bg-100">
        <Floater />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
