import React from "react";
import { FaStar } from "react-icons/fa";

const Ratting = ({ ratting }) => {
  return (
    <div className=" text-lg ">
      {" "}
      {ratting === 5 ? (
        <div className="flex mt-1 mx-2 text-yellow-400">
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
        </div>
      ) : ratting === 4 ? (
        <div className="flex mt-1 mx-2 text-yellow-400">
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
        </div>
      ) : ratting === 3 ? (
        <div className="flex mt-1 mx-2 text-yellow-400">
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
          <p className="mx-1">
            <FaStar></FaStar>
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Ratting;
