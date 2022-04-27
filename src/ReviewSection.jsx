import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import ReviewCard from "./ReviewCard";

import "./styles/ReviewSection.css";

function ReviewSection() {
    return (
        <div className="ReviewSection">
            <div className="container py-5 row p-0 align-items-center justify-content-center mx-auto">
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
                <div className="review-cards my-4">
                    <Link to={{ pathname: "/reviews", search: "?r01" }}>
                        <ReviewCard />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;
