import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeServices from "../Layout/HomeServices";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeAbout/>
      <HomeServices/>
    </Layout>
  );
};

export default Home;
