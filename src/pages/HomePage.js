import React from "react";
import "../styles/homePage.css";
import pic from "../media/mypic.png";
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
          <p className="summary">
            I’m a highly motivated Computer Science student with expertise in
            the{" "}
            <strong>
              MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), Python, and
              modern web development tools.
            </strong>{" "}
            <br /> Let’s connect and build something amazing!
          </p>
          <img
            src={generalassembly}
            alt="General Assembly's bootcamp logo"
            width="233px"
          />

          <h3>former General Assembly bootcamp student</h3>
        </div>{" "}
        <div className="person">
          <img className="image" src={pic} />
          <h3 className="name">Omar S. Khalil</h3>
        </div>
      </div>
      <div className="portfolio">
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
