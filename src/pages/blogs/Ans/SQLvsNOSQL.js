import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";

const SQLvsNOSQL = () => {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div>
      <h3
        className={` text-xl font-bold ${dark ? "text-white" : "text-black"}`}
      >
        Qustion : Difference between SQL and NoSQL
      </h3>
      <p
        className={` mt-2 font-semibold ${dark ? "text-white" : "text-black"}`}
      >
        Difference between Structured Query Language (SQL) and non Structured
        Query Language (NoSQL) bellow ...
      </p>
      <div className="overflow-x-auto mt-5 mb-10" >
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Relational Database</td>
              <td>Non Realational Database</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Table Based Databased </td>
              <td>Document Base Database</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Predefined schama </td>
              <td>Dynamic schama</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Powerfull Query Language </td>
              <td>Non Query Language</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Not Easier to scale </td>
              <td>Easier to scale</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default SQLvsNOSQL;
