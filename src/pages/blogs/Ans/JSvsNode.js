import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";

const JSvsNode = () => {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div>
      <h3
        className={`mt-5 text-xl font-bold ${dark ? "text-white" : "text-black"}`}
      >
        Qustion : What is the difference between javascript and NodeJS?
      </h3>
      <p
        className={` mt-2 font-normal ${dark ? "text-white" : "text-black"}`}
      >
        <span className=" font-semibold underline">Javascript</span> : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
      </p>
      <p
        className={` mt-2 font-normal ${dark ? "text-white" : "text-black"}`}
      >
        <span className=" font-semibold underline">NodeJs</span> : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.


      </p>
      <div className="overflow-x-auto mt-5 mb-10" >
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Javascrit</th>
              <th>NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th>1</th>
              <td>Javascript is a programming language that is used for writing scripts on the website.</td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Javascript can only be run in the browsers.</td>
              <td>We can run Javascript outside the browser with the help of NodeJS.</td>
            </tr>
            <tr>
              <th>3</th>
              <td>It is basically used on the client-side.</td>
              <td>It is mostly used on the server-side.</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Javascript is capable enough to add HTML and play with the DOM. </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
              <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default JSvsNode;
