import React, { useState } from "react";
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`menu ${isActive ? "active" : ""}`}>
      <div className="container flex">
        <div
          className={`hamburgerbtn ${isActive ? "active" : "not-active"}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/H4Elogo3.png`} alt="" />
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#why-us">About</a>
          </li>
          <li className="nav-item">
            <a href="#explore">Explore</a>
          </li>
          {/* <li className="nav-item"><a href="#">dark/light theme</a></li> */}
          <li className="nav-item">
              <button>
            <a href="#" >Contact Us</a>
            </button>
          </li>
        </ul>

        {/* <a href="#" className="btn">
          Hire Cart
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
