import React from "react";
import "../styles/homePage.css";
import pic from "../media/mypic3.png";
import incomestrikers from "../media/incomestrikers.png";
import theartbridge from "../media/theartbridge.png";
import iraqiexpert from "../media/iraqiexpert.png";
import greenstar from "../media/greenstar.png";
import bubblefield from "../media/bubblefield.png";
import generalassembly from "../media/generalassembly.jpeg";
import wgu from "../media/wgu.jpeg";
import pattern from "../media/pattern.png";

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="hero">
        <div className="discription">
          <h3>ABOUT ME </h3>
          <p className="summary">
            I’m a highly motivated Full-Stack & Front-End Software Developer
            with expertise in the{" "}
            <strong>
              MERN stack, Python, and modern web development tools.
            </strong>{" "}
            <br /> <br />
            Let’s connect and build something amazing!
          </p>

          <h3>Former General Assembly bootcamp student</h3>
          <img src={generalassembly} alt="General Assembly's bootcamp logo" />
        </div>{" "}
        <div className="person">
          <img className="image" src={pic} />
          <h3 className="name">Omar S. Khalil</h3>
        </div>
      </div>
      <div className="skills" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="tech">
          <h3>Tech Stack </h3>
          <u>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Python</li>
          </u>
        </div>
        <div className="relevant">
          <h3>Relevant Skills </h3>
          <u>
            <li>Marketing</li>
            <li>Copywriting</li>
            <li>Entrepreneurship</li>
            <li>Graphic Design</li>
            <li>Research Skills</li>
            <li>Mathematics</li>
            <li>Geometry</li>
          </u>
        </div>
        <div className="characteristics">
          <h3>Characteristics </h3>
          <u>
            <li>Clear Communicator</li>
            <li>Sense of Responsibility</li>
            <li>Professionalism</li>
            <li>Interpersonal Skills</li>
            <li>Fast Pace Working Style</li>
            <li>Dedication</li>
            <li>Meticulousness</li>
          </u>
        </div>
      </div>
      <div className="portfolio" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="piece">
          <a href="https://incomestrikers.onrender.com/" target="_blank">
            <img src={incomestrikers} />
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
            <img src={theartbridge} />
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
            <img src={iraqiexpert} />
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
            <img src={greenstar} />
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
            <img src={bubblefield} />
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
