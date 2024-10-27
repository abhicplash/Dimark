import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeServices from "../Layout/HomeServices";
import HomeAccordion from "../Layout/HomeAccordion";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeAbout/>
      <HomeServices/>
      <HomeAccordion/>
    </Layout>
  );
};

export default Home;
