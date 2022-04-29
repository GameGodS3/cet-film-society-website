import React from "react";
import { Link } from "react-router-dom";
import "./styles/ReviewCard.css";

import movieposter from "../static/images/movieposter.png";
import reviewList from "./reviewsFile.json";

function ReviewCard(props) {
  const reviewId = props.reviewId;

  return (
    <Link
      to={{
        pathname: "/reviews/review",
        search: `?${reviewId}`,
      }}
      className="ReviewCard"
    >
      {reviewList.reviews?.map((review, index) => {
        if (reviewId == review.reviewId)
          return (
            <>
              <div className="review-card-poster">
                <img src={movieposter} alt="Movie Poster" />
              </div>
              <div className="review-card-details">
                <div className="review-card-synopsis">
                  <div className="review-card-movie">{review.movieName}</div>
                  <div className="review-card-content">{review.reviewText}</div>
                </div>
                <div className="review-card-author">by {review.author}</div>
              </div>
            </>
          );
      })}
    </Link>
  );
}

export default ReviewCard;
