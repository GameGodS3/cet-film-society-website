import React, { useState } from "react";
import "./styles/Theater.css";

function Theater() {
  const [debugFlag, setDebugFlag] = useState(false);

  return (
    <div className="Theater">
      <button onClick={() => setDebugFlag(!debugFlag)}>Click Me</button>
      <div
        style={
          debugFlag
            ? { transform: "translate3d(700px, 0, -800px) rotateY(30deg)" }
            : {}
        }
        className="parallax-group"
      >
        <div className="parallax_layer screen"></div>
        <div className="parallax_layer seat-1"></div>
        <div className="parallax_layer seat-2"></div>
        <div className="parallax_layer seat-3"></div>
        <div className="parallax_layer hero-text">
          <h1>CET Film Society</h1>
        </div>
      </div>
      <div className="test parallax-group">Hello World</div>
    </div>
  );
}

export default Theater;
