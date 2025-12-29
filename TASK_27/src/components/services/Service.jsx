import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="cards-outer">
      <div className="ser1 card">
        <button>Services</button>
        <h3>
          Explore our full range of coaching, training, and tennis experiences.
          From first serve to match point - we've got the right program for you.
        </h3>
        <button>
          Explore More<i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className="ser2 card">
        <button>Trainnig Programs</button>
        <div className="abi">
          <p>
            Programs designed for <br /> all ages and abilities.
          </p>
          <i class="ri-arrow-right-up-line"></i>
        </div>
      </div>
      <div className="ser3 card">
        <div className="upper">
          <button>Court Access</button>
          <h3>Hourly Court Rental</h3>
        </div>
        <p>
          Step into a space built for players - to grow, compete and thrive.
        </p>
        <div className="lf-btn">
          <i class="ri-arrow-left-line"></i>
          <i class="ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Service;
