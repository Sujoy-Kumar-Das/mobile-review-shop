import React, { useContext, useEffect, useState } from "react";
import UseTitle from "../../../hooks/UseTitle";
import ProductCard from "./ProductCard";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";

const Products = () => {
  const {dark} = useContext(ThemContextProvider)
  UseTitle("products");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data)
        setProducts(data.data);
      });
  }, []);
  return (
    <div className={`my-5 w-4/5 lg:w-full mx-auto ${dark ? 'text-white':'text-black'}`}>
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Our products</h2>
      </div>
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn btn-primary">Show all</button>
      </div>
    </div>
  );
};

export default Products;
