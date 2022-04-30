import React from "react";

import "./styles/RangamSection.css";
import RangamSVG from "./components/rangam-svg.jsx";
// import rangamImg from "../static/images/rangam.png";

function RangamSection() {
    return (
        <div className="rangam-section">
            <div className="container row p-md-0 align-items-center justify-content-center mx-auto">
                <div className="rangam-section-left col-12 col-md-6 text-center text-md-start align-items-center align-items-md-start hero-details">
                    <div className="section-title mt-4">
                        Rangam Film Festival, an indulgence into the art of watching movies
                    </div>
                    <div className="section-subtitle mt-3 mb-4 mb-lg-5">
                        “A celebration of the independent soul of cinema, and a tribute to the evergreen platform”
                    </div>
                    <div className="cta mb-4">
                        <div className="btn-text">Explore More</div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.25 10.0001C1.25 9.8343 1.31585 9.67533 1.43306 9.55812C1.55027 9.44091 1.70924 9.37506 1.875 9.37506H16.6163L12.6825 5.44256C12.5651 5.3252 12.4992 5.16603 12.4992 5.00006C12.4992 4.83409 12.5651 4.67492 12.6825 4.55756C12.7999 4.4402 12.959 4.37427 13.125 4.37427C13.291 4.37427 13.4501 4.4402 13.5675 4.55756L18.5675 9.55756C18.6257 9.61561 18.6719 9.68458 18.7034 9.76052C18.7349 9.83645 18.7511 9.91785 18.7511 10.0001C18.7511 10.0823 18.7349 10.1637 18.7034 10.2396C18.6719 10.3155 18.6257 10.3845 18.5675 10.4426L13.5675 15.4426C13.4501 15.5599 13.291 15.6258 13.125 15.6258C12.959 15.6258 12.7999 15.5599 12.6825 15.4426C12.5651 15.3252 12.4992 15.166 12.4992 15.0001C12.4992 14.8341 12.5651 14.6749 12.6825 14.5576L16.6163 10.6251H1.875C1.70924 10.6251 1.55027 10.5592 1.43306 10.442C1.31585 10.3248 1.25 10.1658 1.25 10.0001V10.0001Z"
                                fill="#8E3200"
                            />
                        </svg>
                    </div>
                </div>
                <div className="rangam-section-right col-12 col-md-6">
                    {/* <Image src={rangamImg} /> */}
                    <RangamSVG />
                </div>
            </div>
        </div>
    );
}

export default RangamSection;
