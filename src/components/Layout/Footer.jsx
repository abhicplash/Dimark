import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <div className="footer-mainDetails">
          <img src={logo} alt="" className="footerImg" />
          <p>
            we blend industry insights with creativity to craft solutions that
            engage your audience and fuel growth.
          </p>
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
            <a href="">info@dimark.ae</a>
            {/* <Link to={"/services"}>
              <button className="learn-more">
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow" />
                </span>
                <span className="button-text">Contact us</span>
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="navbar-socio-Links">
        <a href="https://www.facebook.com/share/158CHpRx3o/">
          <FaFacebookSquare className="icon" />
        </a>
        <a href="https://www.instagram.com/dimark_marketing_management/">
          <FaInstagram className="icon" />
        </a>
        <a href="https://x.com/DimarkMM">
          <FaXTwitter className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/dimark-marketing-management-llc/">
          <FaLinkedin className="icon" />
        </a>
      </div> */}
      <p className="copyright">
      Copyright © 2024 Dimark.ae Powered by Dimark
      </p>
    </div>
  );
};

export default Footer;
