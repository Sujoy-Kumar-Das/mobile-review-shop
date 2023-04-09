import React, { useContext } from "react";
import UseTitle from "../../../hooks/UseTitle";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";
import { toast } from "react-hot-toast";

const PasswordReset = () => {
    const {dark} = useContext(ThemContextProvider)
    const {passwordReset} = useContext(AuthContextProvider)
  UseTitle("password reset");
  const handleFogotPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    passwordReset(email)
    .then(()=>{
        toast.success('Password reset email sent!')
        event.target.reset();
})
    .catch(error=>{
        const message = error.message
        toast.error(message.replace(
            "Firebase: Error (auth/user-not-found)",
            "This email had no account"
          ))
    })
    
  };
  
  return (
    <div className="my-20">
      <form onSubmit={handleFogotPassword}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            name="email"
            className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${dark && "bg-gray-700 border-gray-600 focus:ring-blue-500 placeholder-gray-400 text-white focus:border-blue-500"}`}
            placeholder="Enter your email address here"
            required
          />
          <button
            type="submit"
            className={`text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${dark && "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "} `}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
