import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./styles/RangamSection.css";
import RangamSVG from "./components/rangam-svg.jsx";
// import rangamImg from "../static/images/rangam.png";

function RangamSection() {
    return (
        <div className="rangam-section">
            <div className="container row p-md-0 align-items-center justify-content-center mx-auto">
                <div className="rangam-section-left col-12 col-md-6 text-center text-md-start align-items-center align-items-md-start">
                    <div className="section-title">
                        Rangam Film Festival, an indulgence into the art of watching movies
                    </div>
                    <div className="section-subtitle mt-3 mb-5">
                        “A celebration of the independent soul of cinema, and a tribute to the
                        <br />
                        evergreen platform”
                    </div>
                    <div className="cta mb-4">
                        EXPLORE MORE <Icon icon="ic:baseline-arrow-forward" />
                    </div>
                </div>
                <div className="rangam-section-right col-12 col-md-6">
                    {/* <Image src={rangamImg} /> */}
                    <RangamSVG />
                </div>
            </div>
        </div>
    );
}

export default RangamSection;
