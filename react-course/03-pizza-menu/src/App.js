import React from "react";

import Menu from "./components/Menu/Menu";
import Order from "components/Order/Order";
import PageLayout from "./layout";
// import PizzaData from "./components/PizzaData";

function App() {
  return (
    <>
      <PageLayout>
        <Menu />
        <Order />
      </PageLayout>
    </>
  );
}

export default App;
