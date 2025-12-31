import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="trend">🔥Now Trending</div>
      <div className="banner-content">
        <div className="genre">
          <p className="trend">Drama</p>
          <p className="trend">Fantasy</p>
        </div>
        <h1>Money Heist</h1>
        <h4>
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </h4>
      </div>
      <div className="watch-now-button">
        <button>
          <i class="ri-play-mini-fill"></i> Watch Now
        </button>
        <i class="ri-download-2-line"></i>
        <i class="ri-more-2-fill"></i>
      </div>
    </div>
  );
};

export default Banner;
