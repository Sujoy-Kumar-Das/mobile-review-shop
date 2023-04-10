import React from "react";
import Ratting from "../ratting/Ratting";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
  console.log(review)
  const {_id,productName,comment,userInfo} = review
  const handleEdit = ()=>{
    fetch(`http://localhost:5000/review/edit/${_id}`,{

    })
  }
  return (
    <div className="mx-auto w-4/5 lg:w-full my-5 border border-gray-200 rounded-lg p-5">
      <figure>
        {/* <Ratting ratting={ratting}></Ratting> */}
        <blockquote>
        <p className="text-2xl font-semibold ">
            {productName}
          </p>
          <p className="text-2xl font-semibold ">
            "{comment}"
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3">
          <img
            alt=""
            className="w-6 h-6 rounded-full"
            src={userInfo.photo}
          />
          <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium">
              {userInfo.userName}
            </cite>
            <cite onClick={handleEdit} className="pr-3 font-medium cursor-default hover:underline">
              <Link to={`/update/review`}>Edit</Link>
              
            </cite>
            <cite className="pr-3 font-medium cursor-default hover:underline	">
                Delete
            </cite>
            
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Review;
