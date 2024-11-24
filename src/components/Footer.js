import React from "react";
import "../styles/components.css";
const Footer = () => {
  return (
    <footer>
      <p className="msg">
        Thanks for the visit :)
        <br />
        <br />
        <span>contact me at:</span>
        <br /> omareldagestany@outlook.com
        <br />
        <br />
        <span>or on linkedin:</span> <br />
        <a href="https://www.linkedin.com/in/omar-khalil-34v/" target="_blank">
          {" "}
          https://www.linkedin.com/in/omar-khalil-34v/
        </a>
      </p>
    </footer>
  );
};

export default Footer;
