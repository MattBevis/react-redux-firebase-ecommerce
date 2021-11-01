import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
