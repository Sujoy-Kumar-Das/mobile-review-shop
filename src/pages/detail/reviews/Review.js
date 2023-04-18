import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import UpdateField from "../updateField/UpdateField";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";

const Review = ({ review }) => {
  const {user} = useContext(AuthContextProvider);
  const { _id, productName, comment, userPhoto, userName } = review;
  const [show, setShow] = useState(false);
  // console.log(userPhoto)
  const handleDelete = (id) => {
    const promot = window.confirm(
      `Are you sure you want to delete ${productName} review`
    );

    if (promot) {
      fetch(`http://localhost:5000/review?id=${id}&&email=${user.email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Access_Token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(
            `Succesfully deleted ${userName} review in ${productName}`
          );
        });
    } else {
      toast.error("You canceld the deleteation");
    }
  };
  return (
    <div className="mx-auto w-4/5 lg:w-full my-5 border border-gray-200 rounded-lg p-5">
      <figure>
        {/* <Ratting ratting={ratting}></Ratting> */}
        <blockquote>
          <p className="text-2xl font-semibold ">{productName}</p>
          <p className="text-2xl font-semibold ">"{comment}"</p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3">
          <img alt="" className="w-6 h-6 rounded-full" src={userPhoto} />
          <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium">{userName}</cite>

            <cite
              onClick={() => setShow(!show)}
              className="pr-3 font-medium cursor-default hover:underline"
            >
              Edit
            </cite>
            <cite
              onClick={() => {
                handleDelete(_id);
              }}
              className="pr-3 font-medium cursor-default hover:underline	"
            >
              Delete
            </cite>
            {review?.date?.length > 25 ? (
              <cite className="pr-3 font-medium">
                {review.date.slice(0, 25)}
              </cite>
            ) : (
              ""
            )}
          </div>
        </figcaption>
      </figure>
      <div className={`${show ? "block" : "hidden"}`}>
        <UpdateField review={review}></UpdateField>
      </div>
    </div>
  );
};

export default Review;
