import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid d-flex flex-column min-vh-100 px-0 bg-secondary-subtle">
        <Header />
        {children};
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
