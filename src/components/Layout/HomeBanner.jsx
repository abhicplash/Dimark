import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <h2 className="welcome">Welcome to NEW </h2>
      <span className="headbnr">
        Unlock Your <br /> Digital
        <span className="potential"> Potential,</span>
        <br /> Achieve <br /> Excellence.
      </span>
      <div className="bnrDetails">
        <button class="learn-more">
          <span aria-hidden="true" class="circle">
            <span class="icon arrow" />
          </span>
          <span class="button-text">Learn More</span>
        </button>
        <div className="detailpara">
          Navigating the Ever-Changing Online Terrain, Delivering Unparalleled
          Success
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
