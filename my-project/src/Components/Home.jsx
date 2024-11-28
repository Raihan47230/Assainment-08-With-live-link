import React from "react";
import ReuseCompo from "./ReuseCompo";
import MainPart from "./Categories/MainPart";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const categoriesData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <ReuseCompo title={"Explore Cutting-Edge Gadgets"}></ReuseCompo>
      <div className="flex  flex-col lg:flex-row gap-5 w-11/12 mx-auto">
        <MainPart categoriesData={categoriesData}></MainPart>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
