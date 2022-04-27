import React, { createRef, useState, useEffect } from "react";

import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection";
import RangamSection from "./RangamSection";
import Associates from "./Associates";
import Footer from "./Footer";

import "./styles/Theater.css";
import logo from "../static/images/CET Film Society logo 1.svg";
import downArrow from "../static/images/downArrow.svg";

function Theater(props) {
  let initPosition;

  useEffect(() => {
    initPosition = document
      .querySelector(".HeroSection")
      .getBoundingClientRect().top;
    console.log("Init Position:" + initPosition);
  }, []);

  useEffect(() => {
    const handleWheel = () => {
      document.querySelector(".hero-text").style.transform = "scale(.4)";
      document.querySelector(".Theater").style.overflowY = "scroll";
      console.log();
      let herotop = document
        .querySelector(".HeroSection")
        .getBoundingClientRect().top;
      if (herotop < 50) {
        props.navbarDisplay(true);
      } else if (herotop === initPosition) {
        document.querySelector(".hero-text").style.transform = "scale(1)";
        props.navbarDisplay(false);
      } else {
        props.navbarDisplay(false);
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="Theater" style={{ overflowY: "hidden" }}>
      <div className="parallax-group">
        <div className="parallax_layer screen"></div>
        <div className="parallax_layer seat-1"></div>
        <div className="parallax_layer seat-2"></div>
        <div className="parallax_layer seat-3"></div>

        <div
          className="parallax_layer hero-text"
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
      <div className="content parallax-group">
        <Footer />
      </div>
    </div>
  );
}

export default Theater;
