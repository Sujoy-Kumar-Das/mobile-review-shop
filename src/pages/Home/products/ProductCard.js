import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // console.log(product);
  const {dark} = useContext(ThemContextProvider)
  const { _id,name, img, detail } = product;
  return (
    <div className={`card ${dark?'bg-gray-900':'bg-white'} shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10`}>
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={`${name} pic`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        {detail.length>100?<p>{detail.slice(0,100)+'read more...'}</p>:<p>{detail}</p>}
        <div className="card-actions">
          <Link to={`/products/${_id}`} className="btn btn-primary">Show Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
