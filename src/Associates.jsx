import React from "react";
import { Image } from "react-bootstrap";
import "./styles/Associates.css";
import image1 from "../static/images/associates/image1.png";
import image2 from "../static/images/associates/image2.png";
import image3 from "../static/images/associates/image3.png";
import image4 from "../static/images/associates/image4.png";

function Associates() {
  return (
    <div className="associates p-5">
      <div className="associates-heading mb-5">OUR ASSOCIATES</div>
      <div className="image-container d-flex justify-content-center align-items-center">
        <Image src={image1} />
        <Image src={image2} />
        <Image src={image3} />
        <Image src={image4} />
      </div>
    </div>
  );
}

export default Associates;
