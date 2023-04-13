import React, { useContext } from "react";
import { ThemContextProvider } from "../../context/themContext/ThemContext";
import { Link } from "react-router-dom";
import img1 from "../../assets/mobile1.jpg";
import img2 from "../../assets/mobile2.jpg";
import img3 from "../../assets/mobile3.jpg";

const UpComing = () => {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div
      className={`my-5 w-4/5 lg:w-full mx-auto ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Upcoming Phones</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          className={`card ${
            dark ? "bg-gray-800" : "bg-white"
          } shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10`}
        >
          <figure className="px-10 pt-10">
            <img src={img1} alt={`mobile1 pic`} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xaomi 12 ultra</h2>
            <p>Status : Upcomming</p>
            <p>
              Xiaomi launch a new phone with 4nm arkitecture build
              Octa-core-Qualcomm Snapdragon 8 Gen1 powerfullread more...
            </p>
            <div className="card-actions">
              <Link to={``} className="btn btn-primary">
                Show Detail
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`card ${
            dark ? "bg-gray-800" : "bg-white"
          } shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10`}
        >
          <figure className="px-10 pt-10">
            <img src={img2} alt={`mobile1 pic`} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xaomi 12 ultrapro</h2>
            <p>Status : Upcomming</p>
            <p>
              Xiaomi launch a new phone with 4nm arkitecture build
              Octa-core-Qualcomm Snapdragon 8 Gen1 powerfullread more...
            </p>
            <div className="card-actions">
              <Link to={``} className="btn btn-primary">
                Show Detail
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`card ${
            dark ? "bg-gray-800" : "bg-white"
          } shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10`}
        >
          <figure className="px-10 pt-10">
            <img src={img3} alt={`mobile1 pic`} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Xaomi 12 ultra pro max</h2>
            <p>Status : Upcomming</p>
            <p>
              Xiaomi launch a new phone with 4nm arkitecture build
              Octa-core-Qualcomm Snapdragon 8 Gen1 powerfullread more...
            </p>
            <div className="card-actions">
              <Link to={``} className="btn btn-primary">
                Show Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
