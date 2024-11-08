import React, { useEffect, useState } from "react";
import "./SideIcons.css";
import { FaWhatsapp } from "react-icons/fa";
import { GiEnvelope } from "react-icons/gi";
import { RiPhoneFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const SideIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset  > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="icon-container">
      <div className="iconwrapper">
        <FaWhatsapp />
      </div>
      <div className="iconwrapper">
        <GiEnvelope />
      </div>
      <div className="iconwrapper">
        <RiPhoneFill />
      </div>
      <div className="iconwrapper">
        <MdOutlineKeyboardDoubleArrowUp onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default SideIcons;
