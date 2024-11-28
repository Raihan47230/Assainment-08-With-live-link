import React from "react";
import { NavLink } from "react-router-dom";

const MainPart = ({ categoriesData }) => {
  return (
    <div className=" lg:w-1/4 pb-10 lg:pr-20 shadow-lg">
      <div
        role="tablist"
        className="  text-center flex  lg:flex-col flex-row-reverse   font-bold lg:text-4xl lg:space-y-10 mt-10 bg-gray-50 ml-20"
      >
        {categoriesData.map((category) => (
          <NavLink
            to={`/cards/${category.category}`}
            key={category.category}
            role="tab"
            className={({ isActive }) =>
              `tab ${
                isActive
                  ? " bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500  text-xs   lg:px-10 rounded-xl"
                  : "bg-gray-200  rounded-xl"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MainPart;
