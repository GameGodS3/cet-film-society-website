import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Rangam.css";

function Rangam() {
  let moviePosters = [
    { name: "Sample Movie 1", poster: "http://via.placeholder.com/100.jpg" },
    { name: "Sample Movie 2", poster: "http://via.placeholder.com/200.jpg" },
    { name: "Sample Movie 3", poster: "http://via.placeholder.com/300.jpg" },
    { name: "Sample Movie 4", poster: "http://via.placeholder.com/400.jpg" },
    { name: "Sample Movie 5", poster: "http://via.placeholder.com/500.jpg" },
    { name: "Sample Movie 6", poster: "http://via.placeholder.com/600.jpg" },
    { name: "Sample Movie 7", poster: "http://via.placeholder.com/700.jpg" },
  ];
  let index = 5;

  useEffect(() => {
    document.querySelector(".rangam-movie-name").innerHTML =
      moviePosters[index - 2].name;
  }, [index]);

  const fetchNextImage = () => {
    const image = document.createElement("img");
    if (index >= moviePosters.length) {
      index = 0;
    }
    image.src = moviePosters[index].poster;
    image.className = "moviePoster";
    index++;
    return image;
  };
  const fetchPrevImage = () => {
    const image = document.createElement("img");
    if (index >= moviePosters.length) {
      index = 0;
    }
    image.src = moviePosters[index].poster;
    image.className = "moviePoster";
    index++;
    return image;
  };

  const nextCarouselImage = () => {
    let posters = document.querySelector(".carousel-container");
    const lastPoster = posters.lastChild;
    posters.removeChild(lastPoster);
    posters.prepend(fetchNextImage());
  };
  const prevCarouselImage = () => {
    let posters = document.querySelector(".carousel-container");
    const firstPoster = posters.firstChild;
    posters.removeChild(firstPoster);
    posters.appendChild(fetchPrevImage());
  };

  return (
    <div className="Rangam">
      <div className="rangam-carousel">
        <Navbar />{" "}
        <div className="section-title rangam-movie-name">
          Page Under Construction
        </div>
        <button onClick={prevCarouselImage}>
          {" "}
          <Icon icon="ic:baseline-arrow-back-ios" />
        </button>
        <div className="carousel-container">
          {moviePosters.slice(0, 5).map((movie) => {
            return (
              <img
                src={movie.poster}
                alt="Movie Poster"
                className="moviePoster"
              />
            );
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
