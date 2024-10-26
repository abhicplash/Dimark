import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-mainDetails">
        <img src={logo} alt="" className="footerImg" />
        <p>
          Navigating the Ever-Changing Online Terrain, Delivering Unparalleled
          Success
        </p>
      </div>
      <div>
        <h2>Links</h2>
        <div className="footer-menulinks">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </div>
      </div>
      <div>
        <h2>Services</h2>
        <div className="footer-menulinks">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </div>
      </div>{" "}
      <div>
        <h2>Get in touch with us</h2>
        <div className="footer-menulinks">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
