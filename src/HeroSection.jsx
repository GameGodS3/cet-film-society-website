import React from "react";
import "./styles/HeroSection.css";
// import heroimg from "../static/images/hero-placeholder.png";
import HeroSVG from "./components/hero-svg.jsx";

import { Icon } from "@iconify/react";

function HeroSection() {
    return (
        <div className="HeroSection">
            <div className="container row p-md-0 align-items-center justify-content-center mx-auto">
                <div className="hero-details col-12 col-md-6 col-lg-7 text-center text-md-start align-items-center align-items-md-start">
                    <div className="hero-details-text">
                        <h1 className="section-title">
                            CET Film Society, for the cinephiles and connoisseurs inside you
                        </h1>
                        <div className="section-subtitle mt-3 mb-4 mb-lg-5">
                            CET Film Society is a community aimed at celebrating the art of cinema. Initatied by a group
                            of film enthusiastiic students, the club aims at providing a platform for attention and
                            appreciation to movies, primarily independent, be it Indian or foreign.
                        </div>
                    </div>
                    <div className="cta mb-4">
                        Explore More <Icon icon="ic:baseline-arrow-forward" />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 hero-img pt-4 pt-md-5 mt-auto">
                    <HeroSVG />
                    {/* <img src={heroimg} alt="Hero Image" /> */}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
