import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style.css";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid d-flex flex-column min-vh-100 px-0 body-bg-100">
        <Header />
        {children};
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
