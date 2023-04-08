import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../../../hooks/UseTitle";
import ProductCard from "./ProductCard";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import { Link } from "react-router-dom";
import Spiner from "../../shared/loader/Spiner";

const Products = () => {
  const { dark } = useContext(ThemContextProvider);
  const [loader, setLoader] = useState(true);
  UseTitle("products");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data)
        setProducts(data.data);
        setLoader(false);
      });
  }, []);

  return (
    <div>
      {loader ? (
        <Spiner></Spiner>
      ) : (
        <div
          className={` w-4/5 lg:w-full mx-auto my-20 ${
            loader ? "hidden" : "block"
          } ${dark ? "text-white" : "text-black"}`}
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our products</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
          <div className="flex justify-center my-5">
            <Link to={"/products"} className="btn btn-primary">
              Show all
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
