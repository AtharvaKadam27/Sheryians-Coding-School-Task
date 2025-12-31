import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="main-card">
      <div className="card-nav">
        <h3>Continue Watching</h3>
        <p>See All</p>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
        <div className="card">
          <img src="https://imgcdn.kim/poster/341/80234304.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
