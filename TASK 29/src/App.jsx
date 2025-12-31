import React from "react";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Card from "./components/moviecard/Card";

function App() {
  return (
    <>
      <Sidebar />
      <div className="home">
        <Navbar />
        <Banner />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
