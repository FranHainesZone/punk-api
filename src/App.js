import React from "react";

import { Header } from "./components/header";
import { AccordionList } from "./components/accordionList";
import { Carousel } from "./components/carousel";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <AccordionList />
    </div>
  );
};

export default App;
