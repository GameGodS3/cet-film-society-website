import React, { createRef, useState } from "react";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection";

import "./styles/Theater.css";
import logo from "../static/images/CET Film Society logo 1.svg";
import downArrow from "../static/images/downArrow.svg";
import RangamSection from "./RangamSection";
import Associates from "./Associates";

function Theater(props) {
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  const zoomFlag = true;

  const scrollRef = createRef();
  const zoomRef = createRef();
  let zoom = 1;
  const zoomSpeed = 0.05;
  document.addEventListener("wheel", (e) => {
    if (zoomFlag && zoom > 0.5) {
      if (e.deltaY > 0) {
        scrollRef.current.style.transform = `scale(${(zoom -= zoomSpeed)})`;
      } else {
        scrollRef.current.style.transform = `scale(${(zoom += zoomSpeed)})`;
      }
    } else {
      zoomRef.current.style.overflowY = "scroll";
    }
  });

  // Add newer elements in a div with className parallax-group here.
  return (
    <div className="Theater" ref={zoomRef} style={{ overflowY: "hidden" }}>
      <div className="parallax-group">
        <div className="parallax_layer screen"></div>
        <div className="parallax_layer seat-1"></div>
        <div className="parallax_layer seat-2"></div>
        <div className="parallax_layer seat-3"></div>

        <div
          className="parallax_layer hero-text"
          ref={scrollRef}
          style={{ transition: "all 0.5s" }}
        >
          <div className="landing-cover">
            <img src={logo} alt="CET Film Society Logo" />
            <h1 className="club-title">CET Film Society</h1>
            <h2 className="club-subtitle">
              The official film club of College of Engineering Trivandrum
            </h2>
          </div>

          <img
            src={downArrow}
            className="scroll-explore"
            alt="Scroll to Explore"
            onClick={() => {
              props.navbarDisplay(navbarDisplay);
              setNavbarDisplay(!navbarDisplay);
            }}
          />
        </div>
      </div>
      <div className="content parallax-group">
        <HeroSection />
      </div>
      <div className="content parallax-group">
        <ReviewSection />
      </div>
      <div className="content parallax-group">
        <RangamSection />
      </div>
      <div className="content parallax-group">
        <Associates />
      </div>
      <div className="content parallax-group">Footer Section</div>
    </div>
  );
}

export default Theater;
