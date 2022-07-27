import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import "./App.scss";
import Place from "./components/Place";
import JoinEvent from "./components/JoinEvent";

function App() {
  return (
    <>
      <Nav />
      <div className="main-container">
        <Hero />
        <Idea />
        <Place />
        <JoinEvent />
      </div>
    </>
  );
}

export default App;
