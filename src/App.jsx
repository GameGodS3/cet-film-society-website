import { useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Theater from "./Theater";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
//      Inserting elements here in App.jsx after the Theater element might mess up. Refer Theater.jsx
    <div className="App">
      <Navbar />
      <Theater />
    </div>
  );
}

export default App;
