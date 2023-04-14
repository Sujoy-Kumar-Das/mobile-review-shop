import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ThemContextProvider } from "../../context/themContext/ThemContext";

const ReviewRow = ({ review }) => {
  const {dark} = useContext(ThemContextProvider)
  const handleDelete = (id) => {
    const promot = window.confirm(`Are you sure you want to delete review`);

    if (promot) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`Succesfully deleted `);
        });
    } else {
      toast.error("You canceld the deleteation");
    }
  };
  
  return (
    <tr>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        {review.productName}
      </td>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        {review.comment}
      </td>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        {review.date.slice(0, 21)}
      </td>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        <Link
          to={`/product/detail/${review.productId}`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </Link>
      </td>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        <Link
          to={`/update/review/${review._id}`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Edit
        </Link>
      </td>
      <td className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${dark && 'text-white'}`}>
        <Link
          onClick={() => handleDelete(review._id)}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default ReviewRow;