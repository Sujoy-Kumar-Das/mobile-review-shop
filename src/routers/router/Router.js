import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/home/Home";
import Products from "../../pages/Home/products/Products";
import Error from "../../pages/404/Error";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/products',element:<Products></Products>},
        {path:'*',element:<Error></Error>}
    ]
}])