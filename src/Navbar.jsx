import React from "react";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar d-flex justify-content-end pe-5">
      <div className="navbar-links d-flex">
        <div className="navbar-link active-nav">Home</div>
        <div className="navbar-link">About</div>
        <div className="navbar-link">Film Reviews</div>
        <div className="navbar-link">Rangam</div>
        <div className="navbar-link">Activities</div>
        <div className="navbar-link">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
