import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import Home from "./Components/Home";
import Cards from "./Components/Card/Cards";
import Details from "./Components/Details";
import Deshboard from "./Components/Deshboard/Deshboard";
import WishList from './Components/Wish/WishList';
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Faq from "./Components/FAQ/Faq";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../AllData.json"),
          },

          {
            path: "/cards/:Category",
            element: <Cards></Cards>,
            loader: () => fetch("../AllData.json"),
          },
        ],
      },
      {
        path: "/deshboard",
        element: <Deshboard></Deshboard>,
        loader:()=>fetch('../AllData.json')
      },
      {
        path:'/FAQ',
        element:<Faq></Faq>
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/categories/:product_id",
        element: <Details></Details>,
        loader:() => fetch("../AllData.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
