import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const navbarItems = [
    {
      name: "Home",
      path: "/",
      exact: true,
    },
    {
      name: "About",
      path: "/about",
      exact: true,
    },
    {
      name: "Articles",
      path: "/articles",
      exact: true,
    },
    {
      name: "Rangam",
      path: "/rangam",
      exact: true,
    },
    {
      name: "Activities",
      path: "/activities",
      exact: true,
    },
    {
      name: "Contact",
      path: "/contact",
      exact: true,
    },
  ];

  return (
    <div className="Navbar d-flex justify-content-end pe-5">
      <div className="navbar-links d-flex">
        {navbarItems.map((item,index) => {
          console.log(path  )
          return (
            <div className={`navbar-link ${item.path === path ? "active-nav" : ""}`} key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
