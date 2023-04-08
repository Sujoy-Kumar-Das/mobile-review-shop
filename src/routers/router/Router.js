import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/home/Home";
import Error from "../../pages/404/Error";
import AllProducts from "../../pages/allProduct/AllProducts";
import Detail from "../../pages/detail/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: "/", element: <Home></Home> },
      {path: "/home", element: <Home></Home> },
      {path:'/products',element:<AllProducts></AllProducts>},
      {path:'/product/detail/:id',
      loader:({params})=>{return fetch(`http://localhost:5000/product/detail/${params.id}`)},
      element:<Detail></Detail>},
      {path: "*", element: <Error></Error> },
    ],
  },
]);
