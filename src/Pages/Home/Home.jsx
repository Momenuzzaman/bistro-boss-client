import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";
import BistroBoss from "./BistroBoss/BistroBoss";
import Contract from "./Contract/Contract";
// dynamic title
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBoss />
      <PopularMenu />
      <Contract />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
