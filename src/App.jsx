import { useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Theater from "./Theater";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navbarDisplay, setNavbarDisplay] = useState(true);
  const navToggle = (navDis) => {
    setNavbarDisplay(!navDis);
    return navbarDisplay;
  };

  return (
    //      Inserting elements here in App.jsx after the Theater element might mess up. Refer Theater.jsx
    <div className="App">
      {navbarDisplay ? <Navbar /> : null}
      <Theater navbarDisplay={navToggle} />
    </div>
  );
}

export default App;
