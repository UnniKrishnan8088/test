import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import CardContainer from "./components/cards/CardContainer";
import Contribution from "./components/contribution/Contribution";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <CardContainer />
      <Contribution />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
