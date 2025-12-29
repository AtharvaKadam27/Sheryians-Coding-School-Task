import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <h1>
          Unleash your inner champion today. <br /> All in one place.
        </h1>
        <p>
          join the ultimate tennis experience - where passion meets performance,
          and every swing brings you closer to victory.
        </p>
        <button>Start your own journey</button>
      </div>
      <div className="bottom">
        <div className="statement">
          <p>
            Train with real professionals.
            <br />
            Get the real result.
          </p>
          <div className="img-grp">
            <img
              src="https://adarshbhukele.github.io/ReactTask-2/profile1.jpg"
              alt=""
            />
            <img
              src="https://adarshbhukele.github.io/ReactTask-2/profile2.jpg"
              alt=""
            />
            <img
              src="https://adarshbhukele.github.io/ReactTask-2/profile3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="social-links">
          <a href="">
            Instagram <i className="ri-arrow-right-up-line"></i>
          </a>
          <a href="">
            Facebook <i className="ri-arrow-right-up-line"></i>
          </a>
          <a href="">
            TikTok <i className="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
