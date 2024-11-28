import React from "react";

const ReuseCompo = ({ title,sub }) => {
  return (
    <div className=" text-center text-3xl font-bold -mt-44 mb-9 ">
      <div className="pb-10 ">
        {/* <img
          className="h-[500px] w-[1100px] object-cover border border-gray-600 p-3 rounded-xl bg-gray-50 ml-96"
          src="/"
          alt=""
        /> */}
        <img className="mx-auto h-[500px] w-[1100px] bject-cover border border-gray-600 p-3 rounded-xl bg-gray-50"
         src="https://i.ibb.co.com/txMSMgG/banner.jpg" />
      </div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  );
};

export default ReuseCompo;
