import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ReviewsPage from "./ReviewsPage";
import ReviewCard from "./ReviewCard";
import reviewList from "./reviewsFile.json";

import "./styles/ReviewSection.css";

function ReviewSection() {
  return (
    <div className="ReviewSection">
      <div className="container py-5 row p-0 align-items-center justify-content-center mx-auto">
        <div className="review-section-header">
          <div>
            <h2 className="section-title">Popular Reviews of the week</h2>
            <div className="section-subtitle mb-3">
              Explore well curated film reviews from our community
            </div>
          </div>
          <div className="review-section-header-outlink">
            <Link to={"/reviews"}>
              View All
              <Icon icon="ic:baseline-arrow-forward-ios" />
            </Link>
          </div>
        </div>
        <div className="review-section-header-outlink"></div>
        <div className="review-cards">
          {reviewList.reviews?.map((review, index) => {
            if (index <= 2) return <ReviewCard reviewId={review.reviewId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
