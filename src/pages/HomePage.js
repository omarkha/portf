import React from "react";
import "../styles/homePage.css";
import pic from "../media/profilepic.png";
import incomestrikers from "../media/incomestrikers.png";
import theartbridge from "../media/theartbridge.png";
import iraqiexpert from "../media/iraqiexpert.png";
import greenstar from "../media/greenstar.png";
import bubblefield from "../media/bubblefield.png";
import generalassembly from "../media/generalassembly.jpeg";
import coding from "../media/coding.png";
import avatar from "../media/avatar.png";
import bg from "../media/pattern2.png";
import insta from "../media/insta.png";
import linkedin from "../media/linkedin.png";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background_image" />
      <section className="hero">
        <div className="discription">
          <h3>ABOUT ME </h3>
          <h3 className="name">Omar S. Khalil</h3>
          <p className="summary">
            Empowering Entrepreneurs with Cutting-Edge Software Solutions
            <br />
          </p>
          <img src={generalassembly} alt="General Assembly's bootcamp logo" />
          <h4>Former student </h4>
        </div>{" "}
        <img className="image" src={pic} />
      </section>
      <h3 className="heading">Skills and Capabilities</h3>
      <section className="skills">
        <div className="tech">
          <img src={coding} />
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
        </div>{" "}
        <div className="characteristics">
          <img src={avatar} />
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
      </section>
      <h3 className="heading">Projects</h3>
      <section className="portfolio">
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
      </section>
      <h3 className="heading">
        Let's Turn Your Ideas into Impactful AI-Driven Products
      </h3>
      <section className="cta">
        <h3>
          Are You Ready to Talk? <br />
        </h3>
        <a
          className="button"
          href="https://www.linkedin.com/in/omar-khalil-34v/"
          target="_blank"
        >
          Let’s Build Something Exceptional
        </a>
      </section>
    </div>
  );
};

export default HomePage;
