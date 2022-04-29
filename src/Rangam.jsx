import React from "react";
import { Icon } from "@iconify/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Rangam.css";

function Rangam() {
  const catImagesArray = [
    "http://picsum.photos/200/300",
    "http://picsum.photos/100/200",
    "http://picsum.photos/400/600",
    "http://picsum.photos/500/800",
    "http://picsum.photos/60/100",
  ];

  const nextCarouselImage = () => {
    let posters = document.querySelector(".carousel-container");
    const lastPoster = posters.lastChild;
    posters.removeChild(lastPoster);
    posters.prepend(lastPoster);
  };
  const prevCarouselImage = () => {
    let posters = document.querySelector(".carousel-container");
    const firstPoster = posters.firstChild;
    posters.removeChild(firstPoster);
    posters.appendChild(firstPoster);
  };

  return (
    <div className="Rangam">
      <Navbar />{" "}
      <div className="rangam-carousel">
        <button onClick={prevCarouselImage}>
          {" "}
          <Icon icon="ic:baseline-arrow-back-ios" />
        </button>
        <div className="carousel-container">
          {catImagesArray.map((cat) => {
            return <img src={cat} alt="Movie Poster" className="moviePoster" />;
          })}
        </div>
        <button onClick={nextCarouselImage}>
          {" "}
          <Icon icon="ic:baseline-arrow-forward-ios" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Rangam;
