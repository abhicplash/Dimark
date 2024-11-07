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
    <div className="footer-container">
      <div className="footer-mainDetails">
        <img src={logo} alt="" className="footerImg" />
        <div className="footer-socio-Links">
          <FaFacebookSquare className="icon" />
          <FaInstagram className="icon" />
          <FaXTwitter className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>

      <div className="footer-rightWrapper">
        <div className="footer-right">
          <span className="footHead">Quick Links</span>
          <div className="footerDetails">
            <Link className="footLink">Home</Link>
            <Link className="footLink">About Us</Link>
            <Link className="footLink">Services</Link>
            <Link className="footLink">Portfolio</Link>
            <Link className="footLink">Contact Us</Link>
          </div>
        </div>
        <div className="footer-right">
          <span className="footHead">Services</span>
          <div className="footerDetails">
            <Link className="footLink">Terms</Link>
            <Link className="footLink">Policies</Link>
            <Link className="footLink">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
