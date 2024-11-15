import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <div className="footer-mainDetails">
          <img src={logo} alt="" className="footerImg" />
          <p>Elevating Your Brand with Creativity, Strategy, and Results.</p>
        </div>

        <div className="NavigationFooter">
          <h2>Navigation Links</h2>
          <div className="navLinks">
            <Link to={"/"}>home</Link>
            <Link to={"/about"}>about us</Link>
            <Link to={"/services"}>services</Link>
            <Link to={"/contact"}>contact us</Link>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Information</h2>
          <div className="navLinks">
            <span>
              Dimark Marketing Management LLC
              <br /> Dubai , United Arab Emirates.
            </span>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Contact</h2>
          <div className="navLinks">
            <span>+971-54 279 1548</span>
            <a className="mailid" href="mailto:info@dimark.ae">info@dimark.ae</a>
          </div>
        </div>
      </div>
      <hr />

      <p className="copyright">
        Copyright @ Dimark.ae |Dimark Marketing Management LLC
      </p>
    </div>
  );
};

export default Footer;
