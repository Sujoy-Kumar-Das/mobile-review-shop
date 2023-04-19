import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";

const JWT = () => {
    const {dark} = useContext(ThemContextProvider)
  return (
    <div>
      <h3
        className={` text-xl font-bold ${dark ? "text-white" : "text-black"}`}
      >
        Qustion : What is JWT, and how does it work?
      </h3>
      <p
        className={` mt-2 font-normal ${dark ? "text-white" : "text-black"}`}
      >
        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
      </p>
      <h3
        className={` text-xl mt-5 font-bold ${dark ? "text-white" : "text-black"}`}
      >
        Qustion : How does JWT work?
      </h3>
      <p
        className={` mt-2 font-normal ${dark ? "text-white" : "text-black"}`}
      >
        Basically when a user login or sing up by his/her email or any social media account.Then authentication server verifies the credentials and issues a jwt token.And stored that token in brower cookie or localstorage.Then when he/she try to login jwt get that token and get validate him/her for login.
      </p>
    </div>
  );
};

export default JWT;
