import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles/Credits.css";

function CreditsCard({ img, name, link }) {
  return (
    <a href={link} className="CreditsCard" target="_blank">
      <div className="credit-img">
        <img src={img} alt="" />
      </div>
      <div className="credit-name">{name}</div>
    </a>
  );
}

function Credits() {
  const credits = [
    {
      name: "Hrishikesh Thesserikaran",
      img: "https://avatars.githubusercontent.com/u/64085215",
      link: "https://github.com/hrishikeshts",
    },
    {
      name: "Aswin Manoj",
      img: "https://picsum.photos/200",
      link: "https://github.com",
    },
    {
      name: "Sudev Suresh Sreedevi",
      img: "https://avatars.githubusercontent.com/u/54617167",
      link: "https://github.com/GameGodS3",
    },
    {
      name: "Sourav Satheesh",
      img: "https://avatars.githubusercontent.com/u/56963819",
      link: "https://github.com/SouravSatheesh",
    },
    {
      name: "Devika B",
      img: "https://avatars.githubusercontent.com/u/92394193",
      link: "https://github.com/dev221b",
    },
  ];

  return (
    <div className="Credits">
      <Navbar />
      <div className="credit-content">
        <h1 className="section-title">Web Design and Development Team</h1>
        <div className="credit-container">
          {credits.map((credit) => {
            return (
              <CreditsCard
                name={credit.name}
                img={credit.img}
                link={credit.link}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Credits;
