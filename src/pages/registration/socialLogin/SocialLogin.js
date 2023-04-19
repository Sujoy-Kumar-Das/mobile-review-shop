import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ value }) => {
  const { googleSingIn } = useContext(AuthContextProvider);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        const userEmail = { email: user.email };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmail),
        })
        .then(res => res.json())
        .then(data=> {
          // console.log(data)
          localStorage.setItem("Access_Token",data.token)
          toast.success(`${value} successfull`);
          navigate(from,{replace:true})
        })
       
        // console.log(user)
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
    <div className="flex justify-center">
      <div>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <p className="w-4 h-4 mr-2 -ml-1 mt-1">
            <FaGoogle></FaGoogle>
          </p>
          {value} with Google
        </button>
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <p className="w-4 h-4 mr-2 -ml-1 mt-1">
            <FaGithub></FaGithub>
          </p>
          {value} with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
