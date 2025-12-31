import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="inpt">
        <i class="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search for films, directors, or actors..."
        />
      </div>
      <div className="user">
        <i class="ri-notification-2-line"></i>
        <img
          src="https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
