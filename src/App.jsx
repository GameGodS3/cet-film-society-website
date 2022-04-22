import { useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Theater from "./Theater";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Theater />
    </div>
  );
}

export default App;
