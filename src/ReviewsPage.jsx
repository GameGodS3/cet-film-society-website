import React from "react";
import {Link, useLocation } from "react-router-dom";
import moviePoster from "../static/images/movieposter.png";
import reviewList from "./reviewsFile.json";
import ReviewCard from "./ReviewCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/ReviewsPage.css";

function ReviewsPage() {
  // reviewId variable will contain the review ID for searching the review from the reviewFile JSON
  const reviewId = useLocation().search.slice(1);
  console.log(reviewId);
  const revLen = reviewList.reviews.length;
  let revSuggestionCount = 0;
  let revSuggest = 3;
  // let count = 3;

  return (
    <div className="ReviewsPage">
        <Navbar />{" "}
        <div className="review-section-head-text">
          <h2 className="section-title">Film Reviews</h2>
        </div>

        <div className="review-cards">

        <div className="review-cards-col">
        {reviewList.reviews?.map((review, index) => {
           if (index % 3 == 0) return <ReviewCard reviewId={review.reviewId} />;          
        })}
        </div>
       
        <div className="review-cards-col">
        {reviewList.reviews?.map((review, index) => {
          if (index % 3 == 1) return <ReviewCard reviewId={review.reviewId} />;          
        })}
        </div>
    
        <div className="review-cards-col">
        {reviewList.reviews?.map((review, index) => {
          if (index % 3 == 2) return <ReviewCard reviewId={review.reviewId} />;          
        })}
        </div>

        </div>
        

        <Footer />
    </div>
  );
}

export default ReviewsPage;
