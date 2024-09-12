import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column min-vh-100 px-0 body-bg-100">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
