import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Review from "./Review";
import ReviewsPage from "./ReviewsPage";
import App from "./App";
import "./styles/index.css";
import About from "./About";
import Rangam from "./Rangam";
import Credits from "./Credits";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/reviews/review" element={<Review />} />
        <Route path="/about" element={<About />} />
        <Route path="/rangam" element={<Rangam />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
