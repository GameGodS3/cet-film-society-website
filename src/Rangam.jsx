import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Rangam.css";

function Rangam() {
  const catImagesArray = [
    "http://placekitten.com/200/300",
    "http://placekitten.com/100/200",
    "http://placekitten.com/400/600",
    "http://placekitten.com/500/800",
    "http://placekitten.com/60/100",
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
      <Navbar />
      <div className="carousel-container">
        {catImagesArray.map((cat) => {
          return <img src={cat} alt="Movie Poster" className="moviePoster" />;
        })}
      </div>
      <button onClick={prevCarouselImage}>Previous</button>
      <button onClick={nextCarouselImage}>Next</button>
      <Footer />
    </div>
  );
}

export default Rangam;
