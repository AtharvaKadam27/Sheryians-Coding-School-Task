import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-container">
        <div className="logo">
          <h1>Drameeo</h1>
          <i class="ri-menu-unfold-4-line"></i>
        </div>
        <div className="links">
          <div className="link">
            <i class="ri-home-4-line"></i>
            <p>Home</p>
          </div>
          <div className="link">
            <i class="ri-compass-line"></i>
            <p>Explore</p>
          </div>
          <div className="link">
            <i class="ri-shape-2-fill"></i>
            <p>Genre</p>
          </div>
          <div className="link">
            <i class="ri-shining-2-line"></i>
            <p>Favourite</p>
          </div>
        </div>
        <div className="links">
          <div className="link">
            <i class="ri-video-on-line"></i>
            <p>Continue Watching</p>
          </div>
          <div className="link">
            <i class="ri-time-line"></i>
            <p>Recently Watched</p>
          </div>
          <div className="link">
            <i class="ri-time-line"></i>
            <p>Recently Watched</p>
          </div>
          <div className="link">
            <i class="ri-folders-line"></i>
            <p>My Collections</p>
          </div>
          <div className="link">
            <i class="ri-download-2-line"></i>
            <p>Downloads</p>
          </div>
        </div>
        <div className="links">
          <div className="link">
            <i class="ri-settings-3-line"></i>
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="logout">
        <i class="ri-logout-box-r-line"></i>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
