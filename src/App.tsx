import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import "./App.scss";
import Place from "./components/Place";

function App() {
  return (
    <>
      <Nav />
      <div className="main-container">
        <Hero />
        <Idea />
        <Place />
      </div>
    </>
  );
}

export default App;
