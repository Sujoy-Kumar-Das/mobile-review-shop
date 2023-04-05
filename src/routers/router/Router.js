import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/home/Home";
import Error from "../../pages/404/Error";
import AllProducts from "../../pages/allProduct/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {path:'/products',element:<AllProducts></AllProducts>},
      { path: "*", element: <Error></Error> },
    ],
  },
]);
