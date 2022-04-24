import React from "react";
import { useLocation } from "react-router-dom";
import moviePoster from "../static/images/movieposter.png";

import Navbar from "./Navbar";

import "./styles/Review.css";

function Review() {
  // reviewId variable will contain the review ID for searching the review from the reviewFile JSON
  const reviewId = useLocation().search.slice(1);
  console.log(reviewId);

  return (
    <div className="Review">
      <Navbar />{" "}
      {/*Don't Worry about this. Just implement the review page below this Navbar element */}
      Review Page Layout
      {/* This is how you insert images in React */}
      <img src={moviePoster} alt="Movie Poster" />
      {/* Footer will go here. Leave blank */}
    </div>
  );
}

export default Review;
