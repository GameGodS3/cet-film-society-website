import React from "react";
import { Image } from "react-bootstrap";
import "./styles/Associates.css";
import chalachithra from "../static/images/associates/chalachithra.png";
import ffsi from "../static/images/associates/ffsi.png";
import filmcompanion from "../static/images/associates/filmcompanion.png";
import ksfdc from "../static/images/associates/ksfdc.png";
import pkrosy from "../static/images/associates/pkrosy.png";
import potato from "../static/images/associates/potato.png";
import wcc from "../static/images/associates/wcc.png";

function Associates() {
    return (
        <div className="associates">
            <div className="container py-5 row p-0 align-items-center justify-content-center mx-auto">
                <div className="associates-heading mt-4 mb-4">OUR ASSOCIATES</div>
                <div className="image-container d-flex justify-content-center align-items-center pt-3 pb-5">
                    <Image src={chalachithra} />
                    <Image src={wcc} />
                    <Image src={ffsi} />
                    <Image src={filmcompanion} />
                    <Image src={ksfdc} />
                    <Image src={pkrosy} />
                    <Image src={potato} />
                </div>
            </div>
        </div>
    );
}

export default Associates;
