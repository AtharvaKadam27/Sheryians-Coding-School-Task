import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main-section">
      <div className="left-main">
        <p>Product designer</p>
        <div className="left-main-line"></div>
        <p>2024</p>
      </div>
      <div className="right-main">
        <div className="right-main-top">
          <div className="stats">
            <div className="plus">
              <i class="ri-add-large-line"></i>
            </div>
            <div className="project">
              <h1>200</h1>
              <p>Project completed</p>
            </div>
          </div>
          <div className="stats">
            <div className="plus">
              <i class="ri-add-large-line"></i>
            </div>
            <div className="project">
              <h1>50</h1>
              <p>Startup raised</p>
            </div>
          </div>
        </div>
        <div className="right-main-middle">
          <h1>Hello</h1>
          <p>
            <i class="ri-subtract-fill"></i>I'm Atharva, a design wizard
          </p>
        </div>
        <div className="right-main-bottom">
          Scroll down
          <i class="ri-arrow-down-line"></i>
        </div>
      </div>
      <div className="img-main">
        <img
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
};
