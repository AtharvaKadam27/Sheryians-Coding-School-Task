import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-outer">
      <div className="div1 card">
        <i class="ri-ping-pong-line"></i>
        <h3>
          Professional hard courts{" "}
          <span>
            with tournament-grade lighting & climate control - play in{" "}
          </span>
          perfect conditions, in any season.
        </h3>
        <div className="radio">
          <div className="radio-btn">
            <input type="radio" name="radio" />
          </div>
          <p>Game Mode</p>
        </div>
      </div>
      <div className="div2 card">
        <button>Private & Group Lessons</button>
      </div>
      <div className="div3 card">
        <h1>
          100<i class="ri-add-line"></i>
        </h1>
        <h3>Pro Coaches</h3>
        <p>
          Certified Professionals ready to boost your game from first serve to
          tournament level.
        </p>
      </div>
    </div>
  );
};

export default Cards;
