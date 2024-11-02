import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-logo">
          <img src={`${process.env.PUBLIC_URL}/H4Elogo3.png`} alt="Your Logo" />
        </div>
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Event planning needs, we have you covered. Find qualified local
            event set up and tear down staff. Hire for event connects event
            hosts with the best event material for any occasion big or small. At
            your own budget we allow you to enjoy your own event.
          </p>
          <p>South Africa</p>
        </div>
        <div className="footer-section links">
          <h2>Help</h2>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Add your material</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social meadia">
          <h2>Follow Us</h2>
          <FacebookIcon></FacebookIcon>
          <InstagramIcon></InstagramIcon>
          <WhatsAppIcon></WhatsAppIcon>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Hire for event | Created by Sello Mathobela
      </div>
    </footer>
  );
};

export default Footer;

//1025x683 image
//UMBRELLAS, CHAIRS, TABLES, FENCES, BARACADE, STAGES, CLEANERS, SECURITIES, VANS, Toilets, lights,
//TICKETS, POSTERS CREATION, PROMOTER, lights, sound AND TENTS, photographers, chefs(Good Food), planners, DJs
// event planning needs, we have you covered. Find qualified local event set up and tear down staff.

// MainPage.tsx

// import '../NavBar/Navbar.css';
