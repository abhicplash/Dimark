import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="PageTop-wrapper">
          <h1>Contact us</h1>
          <p>
            Start a conversation with us to build a good relationship and
            business together.
          </p>
        </div>
        <div className="contact-main-wrapper">
          <div className="contact-information-wrapper">
            <div className="contact-address-card">
              <div className="contactIcon">
                <FaEnvelope />
              </div>
              <span className="contact-info-head">Mail To Us</span>
              <span className="contact-info-para">info@dimark.ae</span>
            </div>
            <hr />
            <div className="contact-address-card">
              <div className="contactIcon">
                <MdPhoneInTalk />
              </div>
              <span className="contact-info-head">Fell Free To Call</span>
              <span className="contact-info-para">+971 54 279 1548</span>
            </div>
            <hr />
            <div className="contact-address-card">
              <div className="contactIcon">
                <FaAddressCard />
              </div>
              <span className="contact-info-head">Address</span>
              <span className="contact-info-para">
                Dimark Marketing Management LLC, Dubai, United Arab Emirates.
              </span>
            </div>
          </div>
          <div className="contact-details-container">
            <h2>Get in Touch</h2>
            <div className="contactform-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company" />
            </div>
            <div className="contactform-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </div>

            <input
              type="text"
              placeholder="Contact Number"
              className="contact-number"
            />
            <textarea placeholder="Message" />
            <button className="contact-btn">send message</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
