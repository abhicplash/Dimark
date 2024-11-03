import React from "react";
import Layout from "../Layout/Layout";
import "./SingleService.css";
import single from "../../assets/singleService/desiging.jpg";
import { singleServiceList } from "../../utils/SingleService";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className="SingleService-container">
        {singleServiceList
          .filter((item) => item.id == id)
          .map((list) => (
            <div>
              <div className="PageTop">
                <h1 className="singleserviceName">{list.ServiceName}</h1>
                <span className="servicesubText">{list.ServiceSubText}</span>
              </div>
              <div className="SingleServiceDetailsWrapper">
                <img
                  src={list.serviceImg}
                  alt="desiging"
                  className="singleServiceImage"
                />
                <span className="SingleServiceDetailsText">
                  {list.serviceDesc}
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
