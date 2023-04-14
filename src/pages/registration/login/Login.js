import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseTitle from "../../../hooks/UseTitle";
import SocialLogin from "../socialLogin/SocialLogin";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";
import { toast } from "react-hot-toast";

const Login = () => {
  const { dark } = useContext(ThemContextProvider);
  const { loginWithEmailAndPass } = useContext(AuthContextProvider);
  UseTitle("login");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          toast.success("Logged in successfully");
          form.reset();
          navigate(from,{replace:true})
          console.log(user);
        } else {
          toast.error("Please verify your email address");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      // style={{height:"418px"}}
      className={`  w-4/5 mx-auto lg:w-full mb-0 lg:mb-40 my-8 ${dark && "text-white"}`}
    >
      <h2 className=" text-4xl text-center font-semibold mb-10">Login now !</h2>
      <form onSubmit={handleLogin}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            ${
              dark &&
              "text-white border-white-600 focus:border-blue-500  focus:ring-0"
            } focus:border-blue-600 peer focus:outline-none`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
              dark && "text-white peer-focus:text-blue-500"
            }`}
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
          ${
            dark &&
            "text-white border-white-600 focus:border-blue-500  focus:ring-0"
          } focus:border-blue-600 peer focus:outline-none`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
              dark && "text-white peer-focus:text-blue-500"
            }`}
          >
            Password
          </label>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
            Login
          </button>
          <p
            className={`${
              dark ? "text-white" : "text-gray-500 "
            } mt-4 text-sm  sm:mt-0`}
          >
            Forgot password?
            <Link
              to={"/resetPassword"}
              className={` underline ${dark ? "text-white" : "text-gray-700"} `}
            >
              reset now
            </Link>
            .
          </p>
          <p
            className={`${
              dark ? "text-white" : "text-gray-500 "
            } mt-4 text-sm  sm:mt-0`}
          >
            Don't have account please?
            <Link
              to={"/singup"}
              className={` underline ${dark ? "text-white" : "text-gray-700"} `}
            >
              singup
            </Link>
            .
          </p>
        </div>
      </form>
      <SocialLogin value={"Login"}></SocialLogin>
    </div>
  );
};

export default Login;
