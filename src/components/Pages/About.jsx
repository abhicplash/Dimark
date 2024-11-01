import React from "react";
import Layout from "../Layout/Layout";
import AboutBanner from "../Layout/AboutBanner";
import AboutIntro from "../Layout/AboutIntro";
import HomeServices from "../Layout/HomeServices";
import HomeAbout from "../Layout/HomeAbout";
import AboutWework from "../Layout/AboutWework";

const About = () => {
  return (
    <Layout>
      <AboutBanner/>
      <AboutIntro/>
      <AboutWework/>
      <HomeServices />
      <HomeAbout />
    </Layout>
  );
};

export default About;
