//   return (
//     <div className="navbar  container mx-auto bg-violet-700">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul

//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <NavLink to={'/'} className="text-white font-semibold text-lg">Home</NavLink>
//             <NavLink className="text-white font-semibold text-lg">Statistics</NavLink>
//             <NavLink to={'/deshboard'} className="text-white font-semibold text-lg">Dashboard</NavLink>
//           </ul>
//         </div>
//         <NavLink to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="flex space-x-6">
//           <NavLink to={'/'} className="text-white font-semibold text-lg">Home</NavLink>
//           <NavLink className="text-white font-semibold text-lg"> Statistics</NavLink>
//           <NavLink to={'/deshboard'} className="text-white font-semibold text-lg">Dashboard</NavLink>
//         </ul>
//       </div>
//       <div className="navbar-end gap-4">
//       <span class="badge badge-sm indicator-item">8</span>
//         <div className="bg-imgTwo h-5 w-6  p-4 rounded-full"></div>
//       </div>
//     </div>
//   );
// };
// export default Header;
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { addCard, getAllData } from "../LocalHost";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const data = getAllData();
  // const hendleClickBtn=()=>{
  //   addCard()
  // }
  return (
    <div
      className={`${
        pathname === "/"
          ? "bg-violet-700 text-white"
          : " text-gray-950 bg-zinc-100"
      }`}
    >
      <div className="flex justify-between items-center ">
        <div>
          <div className="">
            <NavLink to={"/"} className=" p-3 lg:text-xl  font-bold">
            
              Gadget Heaven
            </NavLink>
          </div>
        </div>

        <div>
          <div className="flex lg:gap-8 ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500  px-10 rounded-xl font-bold"
                    : "lg:text-lg font-semibold"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/deshboard"}
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500  px-10 rounded-xl font-bold"
                    : " lg:text-lg font-semibold"
                }`
              }
            >
              Deshboard
            </NavLink>
            <NavLink
              to={"/FAQ"}
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500  px-10 rounded-xl font-bold"
                    : "lg:text-lg font-semibold"
                }`
              }
            >
              FAQ
            </NavLink>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <MdOutlineShoppingCart className="h-8 w-8" />

                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <GiSelfLove className="h-8 w-8" />

                    <span className="badge badge-sm indicator-item">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
