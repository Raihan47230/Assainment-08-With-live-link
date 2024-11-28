import React from "react";

const Footer = () => {
  return (
  <div className="mt-28 bg-neutral">
    <div className="text-center text-white pt-10">
    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
    <p className="text-lg font-semibold text-gray-200">Leading the way in cutting-edge technology and innovation.</p>
    </div>
       <footer className=" ">
    <div className="flex justify-between text-white w-8/12 mx-auto pt-20 pb-10">

    <nav className="flex flex-col">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </div>
    </footer>
  </div>
  );
};

export default Footer;
