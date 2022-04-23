import React from "react";
import { Icon } from "@iconify/react";
import ReviewCard from "./ReviewCard";

import "./styles/ReviewSection.css";

function ReviewSection() {
  return (
    <div className="ReviewSection">
      <div className="review-section-header">
        <div className="review-section-head-text">
          <h2 className="section-title">Popular Reviews of the week</h2>
          <div className="section-subtitle mb-3">
            Explore well curated film reviews from our community
          </div>
        </div>
        <div className="review-section-header-outlink">
          View All
          <Icon icon="ic:baseline-arrow-forward-ios" />
        </div>
      </div>
      <div className="review-cards">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default ReviewSection;
