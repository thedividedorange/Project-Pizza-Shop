import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layout";
import Home from "pages/home/home";
import Pricing from "pages/pricing/pricing";
import OrderNow from "pages/order-now/order-now.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/order-now" element={<OrderNow />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
