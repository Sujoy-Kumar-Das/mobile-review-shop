import React from "react";
import UseTitle from "../../../hooks/UseTitle";
import Banner from "./banner/Banner";
import Products from "../products/Products";
import About from "../about/About";
import UpComing from "../../upComingProducts/UpComing";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <UpComing></UpComing>
      <About></About>
    </div>
  );
};

export default Home;
