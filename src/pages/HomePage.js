import React from "react";
import "../styles/homePage.css";
import pic from "../media/pic.png";
import incomestrikers from "../media/incomestrikers.png";
import theartbridge from "../media/theartbridge.png";
import iraqiexpert from "../media/iraqiexpert.png";
import greenstar from "../media/greenstar.png";
import bubblefield from "../media/bubblefield.png";
import generalassembly from "../media/generalassembly.jpeg";
import wgu from "../media/wgu.jpeg";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="discription">
          <h3 className="name">Omar S. Khalil</h3>
          <p className="summary">
            Results-driven and highly motivated computer science student with a
            strong background in JavaScript, ReactJS, Redux, MongoDB, ExpressJS,
            NodeJS, CSS, and Python. A graduate of General Assembly’s Full Stack
            Engineering Bootcamp, demonstrating a commitment to continuous
            learning and staying up-to-date with industry trends. With a strong
            foundation in computer science and a desire to push boundaries, I am
            eager to contribute to the development of intelligent systems and
            solutions. Committed to lifelong learning, I am dedicated to staying
            at the forefront of emerging technologies in AI and ML.
          </p>
          <img
            src={generalassembly}
            alt="General Assembly's bootcamp logo"
            width="233px"
          />
          <img
            src={wgu}
            alt="Western Governors University logo"
            width="155px"
          />
          <h3>Computer Science student at WGU</h3>
          <h3>General Assembly's former student</h3>
        </div>{" "}
        <div className="image" style={{ backgroundImage: `url(${pic})` }} />
      </div>
      <div className="portfolio">
        {" "}
        <h1>Portfolio</h1>
        <div className="piece">
          <a href="https://incomestrikers.onrender.com/" target="_blank">
            <img src={incomestrikers} width="377px" />
          </a>
          <div className="content">
            <a href="https://incomestrikers.onrender.com/" target="_blank">
              {" "}
              <h3>IncomeStrikers - Fullstack app</h3>
            </a>
            <p>SaaS website for aspiring entrepreneurs.</p>
          </div>
          <div className="links">
            <a href="https://incomestrikers.onrender.com/" target="_blank">
              Preview
            </a>
            <a
              href="https://github.com/omarkha/nonfictionincome"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="piece">
          <a href="https://artbridgetobaghdad.onrender.com/" target="_blank">
            <img src={theartbridge} width="377px" />
          </a>
          <div className="content">
            <a href="https://artbridgetobaghdad.onrender.com/" target="_blank">
              <h3>TheArtBridge - Fullstack app</h3>
            </a>
            <p>eCommerce website for artwork.</p>
          </div>
          <div className="links">
            <a href="https://artbridgetobaghdad.onrender.com/" target="_blank">
              Preview
            </a>
            <a
              href="https://github.com/omarkha/ArtBridgeToBaghdad"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="piece">
          <a href="https://iraqiexpert.onrender.com/" target="_blank">
            <img src={iraqiexpert} width="377px" />
          </a>
          <div className="content">
            <a href="https://iraqiexpert.onrender.com/" target="_blank">
              {" "}
              <h3>IraqiExpert - Fullstack app</h3>
            </a>
            <p>Networking website for Iraqi Professionals.</p>
          </div>
          <div className="links">
            <a href="https://iraqiexpert.onrender.com/" target="_blank">
              Preview
            </a>
            <a href="https://github.com/omarkha/IQLink" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="piece">
          <a href="https://soccerleagues.onrender.com/" target="_blank">
            <img src={greenstar} width="377px" />
          </a>
          <div className="content">
            <a href="https://soccerleagues.onrender.com/" target="_blank">
              <h3>NYGreenStars - Fullstack app</h3>
            </a>
            <p>Web Application to manage soccer leagues across New York.</p>
          </div>
          <div className="links">
            <a href="https://soccerleagues.onrender.com/" target="_blank">
              Preview
            </a>
            <a href="https://github.com/omarkha/NYSoccerLeague" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="piece">
          <a href="https://bubblefield.netlify.app/" target="_blank">
            <img src={bubblefield} width="377px" />
          </a>
          <div className="content">
            <a href="https://bubblefield.netlify.app/" target="_blank">
              {" "}
              <h3>BubbleField</h3>
            </a>
            <p>A humble JavaScript game resembling CubeField.</p>
          </div>
          <div className="links">
            <a href="https://bubblefield.netlify.app/" target="_blank">
              Preview
            </a>
            <a href="https://github.com/omarkha/2D-Cube-Field" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
