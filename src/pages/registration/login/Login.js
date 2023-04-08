import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { Link } from "react-router-dom";
import UseTitle from "../../../hooks/UseTitle";

const Login = () => {
  const {dark} = useContext(ThemContextProvider)
  UseTitle('login')
  return (
    <div className={` pt-44 w-4/5 mx-auto lg:w-full my-10 ${dark&&'text-white'}`}>
    <h2 className=" text-4xl text-center font-semibold mb-10">Login now !</h2>
    <form>
      

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            ${dark &&'text-white border-white-600 focus:border-blue-500  focus:ring-0'} focus:border-blue-600 peer focus:outline-none`} 
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${dark && "text-white peer-focus:text-blue-500"}`}
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
          ${dark &&'text-white border-white-600 focus:border-blue-500  focus:ring-0'} focus:border-blue-600 peer focus:outline-none`} 
          placeholder=" "
          required
        />
        <label
          for="floating_password"
          className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${dark && "text-white peer-focus:text-blue-500"}`}
        >
          Password
        </label>
      </div>
      
     
      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
          Login
        </button>

        <p className={`${dark ? 'text-white':'text-gray-500 '} mt-4 text-sm  sm:mt-0`}>
          Don't have account please?
          <Link
            to={"/singup"}
            className={` underline ${dark ? 'text-white':'text-gray-700'} `}
          >
            singup
          </Link>
          .
        </p>
      </div>
    </form>
  </div>
  );
};

export default Login;
