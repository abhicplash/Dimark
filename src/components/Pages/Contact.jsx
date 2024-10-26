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
        <iframe
          className="mapContact"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.129695322447!2d55.380971!3d25.2662222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fc5663586722f51%3A0x8c6df0cef1bc2813!2sDimark%20Marketing%20Management%20LLC!5e0!3m2!1sen!2sin!4v1729964610097!5m2!1sen!2sin"
          title="mapContact"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Layout>
  );
};

export default Contact;
