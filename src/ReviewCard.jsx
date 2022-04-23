import React from "react";
import "./styles/ReviewCard.css";

import movieposter from "../static/images/movieposter.png";

function ReviewCard() {
  return (
    <div className="ReviewCard">
      <div className="review-card-poster">
        <img src={movieposter} alt="Movie Poster" />
      </div>
      <div className="review-card-details">
        <div className="review-card-synopsis">
          <div className="review-card-movie">Cinema Paradiso</div>
          <div className="review-card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quisquam expedita reiciendis inventore animi accusamus aspernatur
            recusandae laudantium similique iure.
          </div>
        </div>
        <div className="review-card-author">by Jacob Koshy</div>
      </div>
    </div>
  );
}

export default ReviewCard;
