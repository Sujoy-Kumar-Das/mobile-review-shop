import React, { useContext, useState } from "react";
import UseTitle from "../../../hooks/UseTitle";
import { Link, useNavigate } from "react-router-dom";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import SocialLogin from "../socialLogin/SocialLogin";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";
import { toast } from "react-hot-toast";

const Singup = () => {
  const { dark } = useContext(ThemContextProvider);
  const { singUpWithEmailAndPass, updateUser, verifyEmail } =
    useContext(AuthContextProvider);
  UseTitle("singup");
  const Navigate = useNavigate();
  const [checked, setChecked] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const fullName = `${firstName} ${lastName}`;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrim_password.value;
    const userInfo = {
      displayName: fullName,
    };

    if (password !== confrimPassword) {
      toast.error("Password and confrim password should be same");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Your password should have a upper case letter");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Your password should have a lower case letter");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      toast.error("Your password should have a digit");
      return;
    }
    if (!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)) {
      toast.error("Your password should have a spacial charecter");
      return;
    }
    if (password.length < 8) {
      toast.error("Your password should have 8 charecters");
      return;
    }
    singUpWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        verifyEmail()
          .then((result) => {
            toast.success("Please check your email and verify");
            Navigate("/login");
            form.reset();
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(user);
        updateUser(userInfo)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        toast.error(
          message.replace(
            "Firebase: Error (auth/email-already-in-use).",
            "This email already had an accound please login"
          )
        );
      });
  };

  return (
    <div  className={` max-h-screen my-5 w-4/5 mx-auto lg:w-full ${dark && "text-white"}`}>
      <h2 className=" my-5 text-4xl text-center font-semibold ">
        Singup now !
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
              ${
                dark &&
                "text-white border-white-600 focus:border-blue-500  focus:ring-0"
              } focus:border-blue-600 peer focus:outline-none`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                dark && "text-white peer-focus:text-blue-500"
              }`}
            >
              First name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
              ${
                dark &&
                "text-white border-white-600 focus:border-blue-500  focus:ring-0"
              } focus:border-blue-600 peer focus:outline-none`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                dark && "text-white peer-focus:text-blue-500"
              }`}
            >
              Last name
            </label>
          </div>
        </div>

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
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="confrim_password"
            id="floating_repeat_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            ${
              dark &&
              "text-white border-white-600 focus:border-blue-500  focus:ring-0"
            } focus:border-blue-600 peer focus:outline-none`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className={` peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
              dark && "text-white peer-focus:text-blue-500"
            }`}
          >
            Confirm password
          </label>
        </div>

        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <input
              onClick={() => {
                setChecked(!checked);
              }}
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className={`h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm 
              ${
                dark && "border-gray-700 bg-gray-800 focus:ring-offset-gray-900"
              }`}
            />

            <span
              className={`text-sm  ${dark ? "text-white" : "text-gray-700"}`}
            >
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </div>
        <div className="col-span-6 mb-3">
          <p className={`text-sm  ${dark ? "text-white" : "text-gray-500"}`}>
            By creating an account, you agree to our
            <Link
              className={` underline ${dark ? "text-white" : "text-gray-700"} `}
            >
              terms and conditions
            </Link>
            and
            <Link
              className={` underline ${dark ? "text-white" : "text-gray-700"} `}
            >
              privacy policy{" "}
            </Link>
            .
          </p>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            disabled={checked}
            className={`${
              checked
                ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                : "inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
            }`}
          >
            Create an account
          </button>

          <p
            className={`${
              dark ? "text-white" : "text-gray-500 "
            } mt-4 text-sm  sm:mt-0`}
          >
            Already have an account?
            <Link
              to={"/login"}
              className={` underline ${dark ? "text-white" : "text-gray-700"} `}
            >
              Log in
            </Link>
            .
          </p>
        </div>
      </form>
      <SocialLogin value={"Singup"}></SocialLogin>
    </div>
  );
};

export default Singup;
