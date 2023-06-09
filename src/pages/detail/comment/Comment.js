import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { AuthContextProvider } from "../../../context/AuthContext/AuthContex";
import { toast } from "react-hot-toast";

const Comment = ({ data }) => {
  const { dark } = useContext(ThemContextProvider);
  const { user } = useContext(AuthContextProvider);
  const { _id, name, img, price, ratting } = data;
  const handleReview = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const review = {
      productId: _id,
      productName: name,
      img: img,
      price: price,
      ratting: ratting,
      comment: comment,
      date: Date(),

      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
    };
    fetch(
      `https://mobile-dokan-server-steel.vercel.app/review?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("Access_Token")}`,
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          event.target.reset();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleReview} className="my-5 w-full">
        <div
          className={`lg:w-full w-4/5 mx-auto  mb-4 border  rounded-lg ${
            dark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className={`bg-white rounded-t-lg ${dark && "bg-gray-800"}`}>
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              className={`w-full  text-sm  border-0 px-4 pt-2
              ${
                dark
                  ? "bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                  : "text-gray-900 bg-white"
              }
               `}
              placeholder="Write a review..."
              required
            ></textarea>
          </div>
          <div
            className={`flex items-center justify-between px-3 py-2 border-t ${
              dark && "border-gray-600"
            }`}
          >
            <button
              type="submit"
              className={`${
                dark && "hover:bg-blue-800 focus:ring-blue-900"
              }inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200`}
            >
              Add Review
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Set location</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Upload image</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
