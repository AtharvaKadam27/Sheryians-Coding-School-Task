import React from "react";
import "./Facts.css";

const Facts = () => {
  return (
    <div className="facts">
      <h1>A few more facts about us in numbers</h1>
      <div className="fact-no">
        <div className="fact-card">
          <h1>
            12000<i class="ri-add-line"></i>
          </h1>
          <p>Hours of play annually</p>
        </div>
        <div className="fact-card">
          <h1>89%</h1>
          <p>Player Retention Rate</p>
        </div>
        <div className="fact-card">
          <h1>
            1200<i class="ri-add-line"></i>
          </h1>
          <p>Active Members</p>
        </div>
        <div className="fact-card">
          <h1>
            125<i class="ri-add-line"></i>
          </h1>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
