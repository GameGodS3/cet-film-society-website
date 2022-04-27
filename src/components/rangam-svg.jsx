import React from "react";
import rangam1 from "../../static/images/rangam-old-logos/rangam-1.png";
import rangam2 from "../../static/images/rangam-old-logos/rangam-2.png";
import rangam3 from "../../static/images/rangam-old-logos/rangam-3.png";
import rangam4 from "../../static/images/rangam-old-logos/rangam-4.png";
import rangam5 from "../../static/images/rangam-old-logos/rangam-5.png";

export default function RangamSVG() {
    return (
        <svg viewBox="0 0 759 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_234_1213)">
                <rect
                    width="139.618"
                    height="139.618"
                    rx="13.9592"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 499.276 142.058)"
                    fill="white"
                />
                <rect
                    width="111.124"
                    height="75.0327"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 539.682 144.491)"
                    fill="url(#pattern5)"
                />
                <rect
                    width="120.022"
                    height="169.011"
                    rx="12"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 133.702 323.713)"
                    fill="white"
                />
                <rect
                    width="120.022"
                    height="129.004"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 158.451 333.102)"
                    fill="url(#pattern6)"
                />
                <rect
                    width="222.899"
                    height="88.1797"
                    rx="12"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 34 266.155)"
                    fill="white"
                />
                <rect
                    width="137.985"
                    height="48.9887"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 87.7401 254.725)"
                    fill="url(#pattern7)"
                />
                <rect
                    width="222.899"
                    height="88.1797"
                    rx="12"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 277.245 150.222)"
                    fill="white"
                />
                <rect
                    width="137.985"
                    height="55.5206"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 328.156 137.16)"
                    fill="url(#pattern8)"
                />
                <rect
                    width="207.386"
                    height="82.0426"
                    rx="11.1648"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 316.843 269.421)"
                    fill="white"
                />
                <rect
                    width="137.985"
                    height="40.8239"
                    transform="matrix(0.866044 -0.499967 0.866044 0.499967 364.926 262.073)"
                    fill="url(#pattern9)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_234_1213"
                    x="-6"
                    y="-8"
                    width="771.107"
                    height="472.213"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-8" dy="24" />
                    <feGaussianBlur stdDeviation="16" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.196078 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_234_1213" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_234_1213" result="shape" />
                </filter>
                <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rangam1" transform="translate(0 0.0665689) scale(0.00198413 0.00293852)" />
                </pattern>
                <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rangam2" transform="translate(-0.115646 -0.025974) scale(0.000612245)" />
                </pattern>
                <pattern id="pattern7" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rangam3" transform="translate(0.0480298) scale(0.00125897 0.0035461)" />
                </pattern>
                <pattern id="pattern8" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rangam4" transform="translate(0 0.0114378) scale(0.0014245 0.00354031)" />
                </pattern>
                <pattern id="pattern9" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rangam5" transform="translate(0 0.010936) scale(0.000659196 0.00222808)" />
                </pattern>
                <image id="rangam1" width="504" height="295" href={rangam3} />
                <image id="rangam2" width="2000" height="2000" href={rangam5} />
                <image id="rangam3" width="718" height="282" href={rangam1} />
                <image id="rangam4" width="702" height="276" href={rangam2} />
                <image id="rangam5" width="1517" height="439" href={rangam4} />
            </defs>
        </svg>
    );
}
