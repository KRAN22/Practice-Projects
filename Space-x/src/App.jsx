import React from "react";
import { Header } from "./Component/Header/Header";
import "./styles.css";
import Launches from "./Component/launches/Launches";

function App() {
  return (
    <div className="App">
      <Header />
      <Launches />
    </div>
  );
}

export default App;
