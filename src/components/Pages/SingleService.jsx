import React from "react";
import Layout from "../Layout/Layout";
import "./SingleService.css";
import single from "../../assets/singleService/desiging.jpg";
import { singleServiceList } from "../../utils/SingleService";

const SingleService = () => {
  return (
    <Layout>
      <div className="SingleService-container">
        {singleServiceList.map((list) => (
          <div>
            <div className="PageTop">
              <h1 className="singleserviceName">{list.ServiceName}</h1>
              <span className="servicesubText">{list.ServiceSubText}</span>
            </div>
            <div className="SingleServiceDetailsWrapper">
              <img src={single} alt="desiging" className="singleServiceImage" />
              <span className="SingleServiceDetailsText">
                Our design services are tailored to make your brand stand out.
                We focus on delivering engaging, modern designs that reflect
                your unique identity
              </span>
            </div>

            <div className="moreServiceswrapper">
              <h1 className="singleserviceName">
                Check Out Our {list.ServiceName}
              </h1>
              <div className="SingleServiceItems-container">
                {list.items.map((listItems) => (
                  <div className="singleServiceList-card">
                    <div className="singleServiceDetails">
                      <span className="singleServiceHead">
                        {listItems.name}
                      </span>
                      <span className="singleServicePara">
                        {listItems.desc}
                      </span>
                    </div>
                    <img
                      src={listItems.image}
                      alt=""
                      className="singleServiceImg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SingleService;
