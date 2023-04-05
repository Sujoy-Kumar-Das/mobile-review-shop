import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemContextProvider } from "../../context/themContext/ThemContext";
import UseTitle from "../../hooks/UseTitle";
import ProductCard from "../Home/products/ProductCard";
import Spiner from "../shared/loader/Spiner";

const Products = () => {
  const { dark } = useContext(ThemContextProvider);
  UseTitle("products");
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data)
        setProducts(data.data);
        setLoader(false)
      });
  }, []);

  return (
    <div>
      {loader ? (
        <Spiner></Spiner>
      ) : (
        <div
          className={`my-5 w-4/5 lg:w-full mx-auto ${
            dark ? "text-white" : "text-black"
          }`}
        >
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Our products</h2>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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