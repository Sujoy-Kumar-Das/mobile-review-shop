import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";


const Header = () => {
  const { dark, setDark } = useContext(ThemContextProvider);

  const menuItems = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
      <li>
        <Link to={"/myreviews"}>My reviews</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>

      <li onChange={() => setDark(!dark)}>
        <p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={dark ? "checked" : ""}
          />
        </p>
      </li>
    </>
  );
  return (
    <div className=" sticky top-0 z-50 mb-5">
      <div
        className={`navbar ${
          dark ? "text-white bg-slate-950" : "text-black bg-white"
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                dark ? "bg-slate-950" : "bg-white"
              }`}
            >
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            Mobile Bazar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
         
          <Link className="btn btn-primary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
