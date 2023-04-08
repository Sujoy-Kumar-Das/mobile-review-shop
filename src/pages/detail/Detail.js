import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemContextProvider } from "../../context/themContext/ThemContext";
import Error from "../404/Error";
import Review from "./reviews/Review";
import Comment from "./comment/Comment";
import Ratting from "./ratting/Ratting";

const Detail = () => {
  const { dark } = useContext(ThemContextProvider);
  const data = useLoaderData();
  const { _id, name, img, price, ratting, detail } = data.data;

  return (
    <div>
      {data.success ? (
        <div className={`my-5 ${
          dark ? "bg-gray-900 text-white" : "bg-white"
        }`}>
          <div
            className={`card  shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10`}
          >
            <figure className="px-10 pt-10">
              <img src={img} alt={`${name} pic`} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p className=" font-semibold text-lg">Price : {price} Tk</p>

              <p className=" text-lg">{detail}</p>

              <p className="flex">
                {" "}
                Ratting : <Ratting ratting={ratting}></Ratting>
              </p>
            </div>
          </div>
          <div className=" mt-20">
            <h2 className="text-4xl text-center">Reviews</h2>
            <Review ratting={ratting}></Review>
            <h2 className="text-4xl text-center">Add Review</h2>
            <Comment></Comment>
          </div>
        </div>
      ) : (
        <Error></Error>
      )}
    </div>
  );
};

export default Detail;
