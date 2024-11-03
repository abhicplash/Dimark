import React from "react";
import "./ServiceList.css";
import { cardData } from "../../utils/processList";

const ServiceList = () => {
  return (
    <div className="ServiceList-container">
      <h1>Explore Our Services</h1>
      <div className="ServiceList-Details-wrapper">
        {cardData.map((list) => (
          <div className="ServiceList-card">
            <span className="serviceHead">{list.name}</span>
            <span className="servicePara">
              {list.desc}
            </span>
            <img src={list.image} alt="" className="serviceImg" />
            <button>more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
