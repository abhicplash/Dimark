import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logoimg" />
      </Link>
      {view
        ? <ul className="listmobile">
            <Link to={"/"}>
              <li className="item">home</li>
            </Link>
            <Link to={"/about"}>
              <li className="item">about us</li>
            </Link>
            <Link to={"/services"}>
              <li className="item">services</li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="item">portfolio</li>
            </Link>
            <Link to={"/contact"}>
              <li className="item">Contact us</li>
            </Link>
          </ul>
        : null}
      <div className="listLarger">
        <Link to={"/"}>
          <div className="item">home</div>
        </Link>
        <Link to={"/about"}>
          <div className="item">about </div>
        </Link>
        <Link to={"/services"}>
          <div className="item">services</div>
        </Link>
        <Link to={"/portfolio"}>
          <div className="item">portfolio</div>
        </Link>
        <Link to={"/contact"}>
          <div className="item">Contact </div>
        </Link>
      </div>
      <FaBars
        className="navIcon"
        onClick={() => {
          setView(!view);
        }}
      />
      <button className="navButton">
        Call
      </button>
    </div>
  );
};

export default Navbar;
