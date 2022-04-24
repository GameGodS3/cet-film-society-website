import React from "react";
import { useLocation } from "react-router-dom";

function Review() {
  // reviewId variable will contain the review ID for searching the review from the reviewFile JSON
  const reviewId = useLocation().search.slice(1);
  console.log(reviewId);

  return <div className="Review">Review Page</div>;
}

export default Review;
