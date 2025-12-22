import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src="./AKLogo-removebg-preview.png" alt="" />
        </div>
        <div className="links">
          <a href="">About Me</a>
          <a href="">Portfolio</a>
          <a href="">Services</a>
          <a href="">Blog</a>
        </div>
      </div>
      <div className="right">
        <a href="">Book A Call</a>
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};
