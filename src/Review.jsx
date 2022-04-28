import React from "react";
import { useLocation } from "react-router-dom";
import moviePoster from "../static/images/movieposter.png";
import reviewList from "./reviewsFile.json";
import ReviewCard from "./ReviewCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles/Review.css";

function Review() {
  // reviewId variable will contain the review ID for searching the review from the reviewFile JSON
  const reviewId = useLocation().search.slice(1);
  console.log(reviewId);
  const revLen = reviewList.reviews.length;
  let revSuggestionCount = 0;
  let revSuggest = 3;

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
            />
          </div>
          <div className="tag">Drama</div>
          <div className="tag">Romance</div>
          <div className="tag">Thriller</div>
        </div>
        <div className="review-details">
          {reviewList.reviews.map((review, index) => {
            if (reviewId == review.reviewId)
              return (
                <div key={index}>
                  <div className="review-details-text">
                    <h6 className="section-subtitle">
                      Review by {review.author}
                    </h6>
                    <hr />
                    <div className="review-movie-title-and-year">
                      <h1 className="section-title">{review.movieName}</h1>
                      <div className="review-movie-year">{review.year}</div>
                    </div>
                    <div className="section-subtitle">
                      Dir: {review.director}
                    </div>
                    <div className="section-subtitle">
                      <br />
                      <br />
                      <div className="review-text">{review.reviewText}</div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="review-suggested">
          {reviewList.reviews ? (
            <div className="section-subtitle">Explore More Reviews</div>
          ) : null}
          {reviewList.reviews?.map((review, index) => {
            if (
              review.reviewId !== reviewId
              // &&
              // revSuggestionCount < revSuggest
            ) {
              // const revIdTemp =
              //   index < 10
              //     ? "r0" + (index + 1).toString()
              //     : "r" + (index + 1).toString();
              // revSuggestionCount++;
              return <ReviewCard reviewId={review.reviewId} />;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Review;
