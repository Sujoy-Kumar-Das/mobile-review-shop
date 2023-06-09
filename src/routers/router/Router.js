import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/home/Home";
import Error from "../../pages/404/Error";
import AllProducts from "../../pages/allProduct/AllProducts";
import Detail from "../../pages/detail/Detail";
import Login from "../../pages/registration/login/Login";
import Singup from "../../pages/registration/singup/Singup";
import PasswordReset from "../../pages/registration/passwordReset/PasswordReset";
import MyReview from "../../pages/myReview/MyReview";
import EditReview from "../../pages/myReview/EditReview/EditReview";
import PrivetRouter from "../privetRouter/PrivetRouter";
import Blog from "../../pages/blogs/Blog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/product/detail/:id",
        loader: ({ params }) => {
          return fetch(
            `https://mobile-dokan-server-steel.vercel.app/product/detail/${params.id}`
          );
        },
        element: (
          <PrivetRouter>
            <Detail></Detail>
          </PrivetRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
      {
        path: "/resetPassword",
        element: <PasswordReset></PasswordReset>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivetRouter>
            <MyReview></MyReview>
          </PrivetRouter>
        ),
      },
      {
        path: "/update/review/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) => {
          return fetch(
            `https://mobile-dokan-server-steel.vercel.app/update/review/${params.id}`
          );
        },
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
