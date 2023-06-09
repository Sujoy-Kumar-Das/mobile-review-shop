import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../../hooks/UseTitle";
import { ThemContextProvider } from "../../context/themContext/ThemContext";
import { AuthContextProvider } from "../../context/AuthContext/AuthContex";
import { Link } from "react-router-dom";
import ReviewRow from "./ReviewRow";
import Spiner from "../shared/loader/Spiner";

const MyReview = () => {
  UseTitle("my-reviews");
  const { dark } = useContext(ThemContextProvider);
  const { user, logOut } = useContext(AuthContextProvider);
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://mobile-dokan-server-steel.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Access_Token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setRefresh(!refresh);
        setLoader(false);
        setMyReviews(data.data);
      });
  }, [user?.email, refresh, logOut]);

  return (
    <div>
      {loader ? (
        <Spiner></Spiner>
      ) : (
        <div>
          <h2
            className={`text-4xl text-center mt-16 mb-10 ${
              dark && "text-white"
            }`}
          >
            {user?.displayName}'s Reviews
          </h2>
          {myReviews?.length === 0 ? (
            <div className=" mb-80">
              <h2 className={`text-2xl mb-10 ${dark && "text-white"}`}>
                Currently you don't have any review.
                <Link className=" btn-link  " to={`/products`}>
                  See products
                </Link>
              </h2>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table
                className={`  mb-80 min-w-full divide-y-2 divide-gray-200 text-sm ${
                  dark && "divide-gray-700 bg-inherit"
                } `}
              >
                <thead>
                  <th
                    className={`${
                      dark
                        ? "text-white"
                        : "whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    }`}
                  >
                    Image
                  </th>
                  <th
                    className={`${
                      dark
                        ? "text-white"
                        : "whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    }`}
                  >
                    Product Name
                  </th>
                  <th
                    className={`${
                      dark
                        ? "text-white"
                        : "whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    }`}
                  >
                    Review
                  </th>
                  <th
                    className={`${
                      dark
                        ? "text-white"
                        : "whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    }`}
                  >
                    Date
                  </th>
                  <th
                    className={`${
                      dark
                        ? "text-white"
                        : "whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    }`}
                  ></th>
                </thead>

                <tbody
                  className={` mb-5 divide-y divide-gray-200 ${
                    dark && "divide-gray-700"
                  }`}
                >
                  {myReviews?.map((review) => (
                    <ReviewRow key={review._id} review={review}></ReviewRow>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyReview;
