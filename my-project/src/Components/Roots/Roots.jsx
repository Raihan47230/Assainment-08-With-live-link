import React from "react";
import Header from "../Header/Header";
// import Banner from '../Banner';
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import  { Toaster } from "react-hot-toast";

const Roots = () => {
  return (
    <div>
      <div>
        <div className="bg-violet-700">
          <Header></Header>
          {/* <Banner></Banner> */}
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Roots;
