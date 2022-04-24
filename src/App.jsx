import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Theater from "./Theater";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  const navToggle = (navDis) => {
    setNavbarDisplay(!navDis);
    return navbarDisplay;
  };

  return (
    <div className="App">
      {navbarDisplay ? <Navbar /> : null}
      <Theater navbarDisplay={setNavbarDisplay} />
    </div>
  );
}

export default App;
