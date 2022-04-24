import React from "react";
import { useLocation } from "react-router-dom";
import moviePoster from "../static/images/movieposter.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Review.css";

function Review() {
  // reviewId variable will contain the review ID for searching the review from the reviewFile JSON
  const reviewId = useLocation().search.slice(1);
  console.log(reviewId);

  return (
    <div className="Review">
      <Navbar />{" "}
      <div className="review-body">
        <div className="side-content">
          <div className="image">
            <img
              src={moviePoster}
              alt="Movie Poster"
              style={{
                maxWidth: "100%",
              }}
              height={250}
            />
          </div>
          <div class="tag">Drama</div>
          <div class="tag">Romance</div>
          <div class="tag">Thriller</div>
        </div>
        <div className="review-details">
          <div className="review-details-text">
            <h6 className="section-subtitle">Review by</h6>
            <hr />
            <h1 className="section-title">Cinema Paradiso</h1>
            <div className="section-subtitle">
              Dir:
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse voluptas, eaque, repellat excepturi nostrum
              deleniti eveniet eligendi aut, nemo rem veniam tempore nulla!
              Fugiat veniam quasi nihil saepe nulla.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Review;
