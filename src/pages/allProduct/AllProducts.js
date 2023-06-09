import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemContextProvider } from "../../context/themContext/ThemContext";
import UseTitle from "../../hooks/UseTitle";
import ProductCard from "../Home/products/ProductCard";
import Spiner from "../shared/loader/Spiner";
import SearchProduct from "./searcProduct/SearchProduct";

const Products = () => {
  const { dark } = useContext(ThemContextProvider);
  UseTitle("products");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://mobile-dokan-server-steel.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data)
        if (data.success) {
          setProducts(data.data);
          setLoader(false);
        } else {
          navigate("*");
          setLoader(false);
        }
      });
  }, [navigate]);

  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.searchName.value;
    fetch(`https://mobile-dokan-server-steel.vercel.app/products/${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
          // console.log(data.data);
        } else {
          navigate("*");
        }
      });
  };

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
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Products</h2>
          </div>

          <SearchProduct handleSearch={handleSearch}></SearchProduct>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
          <div
            className={`flex justify-center my-5 ${
              loader === false ? "hidden" : "block"
            }`}
          >
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
