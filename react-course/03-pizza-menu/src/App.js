import React from "react";
import Header from "components/Header/Header";
import Menu from "./components/Menu/Menu";
import Order from "components/Order/Order";
import PageLayout from "./layout";

function App() {
  return (
    <>
      <PageLayout>
        <Header />
        <Menu />
        <Order />
      </PageLayout>
    </>
  );
}

export default App;
