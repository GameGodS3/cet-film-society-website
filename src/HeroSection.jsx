import React from "react";
import "./styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="hero-details">
        <h1 className="hero-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          pariatur?
        </h1>
        <div className="hero-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ullam
          placeat laudantium facilis vero laborum rerum sequi magnam molestiae,
          recusandae quisquam esse repellat, mollitia et provident. Inventore
          consequatur cum consequuntur!
        </div>
        <div className="cta">Explore More</div>
      </div>
      <div className="hero-img">
        <div className="img-block"></div>
      </div>
    </div>
  );
}

export default HeroSection;
