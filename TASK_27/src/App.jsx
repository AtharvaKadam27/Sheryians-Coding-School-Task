import React from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Horizon from "./components/horizon/Horizon";
import Cards from "./components/cards/Cards";
import Facts from "./components/facts/Facts";
import Service from "./components/services/Service";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Horizon />
      <Cards />
      <Facts />
      <Service />
    </>
  );
}

export default App;
