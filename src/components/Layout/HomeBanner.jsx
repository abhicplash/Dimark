import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <h2 className="welcome">Welcome to NEW </h2>
      <span className="headbnr">
        We believe in <br />
        turning <span className="potential"> your </span>
        <br />
        vision <br />
        into action
      </span>
      {/* <span className="headbnr">
        Unlock Your <br /> Digital
        <span className="potential"> Potential,</span>
        <br /> Achieve <br /> Excellence.
      </span> */}
      <div className="bnrDetails">
        <button className="learn-more">
          <span aria-hidden="true" className="circle">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Learn More</span>
        </button>
        <div className="detailpara">
          we blend industry insights with creativity to craft solutions that
          engage your audience and fuel growth.
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
