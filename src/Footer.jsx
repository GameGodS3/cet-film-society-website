import React from "react";

import "./styles/Footer.css";
import accentLogo from "../static/images/logo-white.png";

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-content">
                <img src={accentLogo} alt="CET Film Society Logo" />
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
            <div className="footer-line"></div>
            <div className="footer-credits">
                &copy; 2022 College of Engineering Trivandrum. All Rights Reserved. <br /> Designed and Developed by{" "}
                <a href="">Film Society Web Team</a>
            </div>
        </div>
    );
}

export default Footer;
