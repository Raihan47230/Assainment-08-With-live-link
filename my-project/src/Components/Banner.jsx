import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate=useNavigate()
  const hendleNavigate=()=>{
    navigate('/')
  }
  return (
    <div className="text-center  text-zinc-300 font-bold bg-violet-700  pb-56 mb-2 ">
      <h1 className="font-bold text-4xl py-6">
        Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
      </h1>
      <p className="font-semibold text-2xl">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to <br /> the coolest accessories, we have it
        all!
      </p>
      <button onClick={hendleNavigate} className="bg-white px-6 py-3 rounded-xl mt-8 text-violet-700 font-bold">
        Shop Now
      </button>
    </div>
  );
};

export default Banner;
