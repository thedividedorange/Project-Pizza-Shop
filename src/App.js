import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layout";
import Home from "pages/Home";
import Pricing from "pages/Pricing/pricing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
