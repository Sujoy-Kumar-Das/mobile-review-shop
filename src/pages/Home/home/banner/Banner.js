import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(https://i.ibb.co/CMyXTXh/banner.jpg)",
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'600px'
        
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            We provide latest smart phone's and verious electronic products.Let's start shoping with us.
          </p>
          <Link to={'/products'} className="btn btn-primary">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
