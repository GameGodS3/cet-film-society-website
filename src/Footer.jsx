import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./styles/Footer.css";
import creamLogo from "../static/images/logo-cream.png";
import Credits from "./Credits";

function Footer() {
  const [showCredits, setShowCredits] = useState(false);
  const endBottom = useRef();
  const toggleCredits = () => {
    setShowCredits(!showCredits);
    endBottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Footer">
      <div className="footer-vector" />
      <div className="footer-content">
        <div className="container footer-main pb-4">
          <img src={creamLogo} alt="CET Film Society" className="logo-cream" />
          <div className="footer-links">
            <div className="footer-social">
              <a
                href="https://instagram.com/cetfilmsociety"
                className="footer-social-icon insta"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://facebook.com/cetfilmsociety"
                className="footer-social-icon facebook"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://t.me/cetfilmsociety"
                className="footer-social-icon telegram"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="mailto:cetfilmsociety@gmail.com"
                className="footer-social-icon mail"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
            <div className="footer-menu">
              <div className="footer-menu-item">About</div>
              <div className="footer-menu-item">Activities</div>
              <div className="footer-menu-item">Contact </div>
            </div>
          </div>
        </div>
        <div className="container footer-line my-3"></div>
        <div className="footer-credits pt-4 pb-5">
          &copy; 2022 College of Engineering Trivandrum. All Rights Reserved.{" "}
          <br /> Designed and Developed by{" "}
          <a
            style={{
              color: "var(--brown10)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={toggleCredits}
          >
            Film Society Web Team
          </a>
        </div>
      </div>
      {showCredits ? <Credits /> : null}
      <div ref={endBottom}></div>
    </div>
  );
}

export default Footer;
