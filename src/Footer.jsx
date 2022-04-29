import React from "react";

import "./styles/Footer.css";
import creamLogo from "../static/images/logo-cream.png";

function Footer() {
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
                            <div className="footer-menu-item">Miscellanea</div>
                            <div className="footer-menu-item">Contact </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-line my-3"></div>
                <div className="footer-credits pt-4 pb-5">
                    &copy; 2022 College of Engineering Trivandrum. All Rights Reserved. <br /> Designed and Developed by{" "}
                    <a href="">Film Society Web Team</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
