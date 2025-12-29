import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Horizon Courts</h1>
      <div className="links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#coaches">Coaches</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
        <div className="anchor-tag"></div>
      </div>
      <button>
        Book now <i className="ri-arrow-right-up-line"></i>
      </button>
    </div>
  );
};

export default Navbar;
