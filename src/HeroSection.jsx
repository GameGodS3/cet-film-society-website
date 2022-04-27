import React from "react";
import "./styles/HeroSection.css";
// import heroimg from "../static/images/hero-placeholder.png";
import HeroSVG from "./components/hero-svg.jsx";

import { Icon } from "@iconify/react";

function HeroSection() {
    return (
        <div className="container HeroSection">
            <div className="hero-details">
                <div className="hero-details-text">
                    <h1 className="section-title">CET Film Society, for the cinephiles and connoisseurs inside you</h1>
                    <div className="section-subtitle mt-3 mb-5">
                        CET Film Society is a community aimed at celebrating the art of cinema. Initatied by a group of
                        film enthusiastiic students, the club aims at providing a platform for attention and
                        appreciation to movies, primarily independent, be it Indian or foreign.
                    </div>
                </div>
                <div className="cta">
                    Explore More <Icon icon="ic:baseline-arrow-forward" />
                </div>
            </div>
            <div className="hero-img mt-5">
                <HeroSVG />
                {/* <img src={heroimg} alt="Hero Image" /> */}
            </div>
        </div>
    );
}

export default HeroSection;
