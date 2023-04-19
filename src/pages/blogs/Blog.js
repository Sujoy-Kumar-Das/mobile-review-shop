import React from "react";
import SQLvsNOSQL from "./Ans/SQLvsNOSQL";
import JWT from "./Ans/JWT";
import JSvsNode from "./Ans/JSvsNode";
import NodeJsWork from "./Ans/NodeJsWork";
import UseTitle from "../../hooks/UseTitle";

const Blog = () => {
  UseTitle("blogs");
  return (
    <div className="mt-10 mb-20  w-4/5 lg:w-full mx-auto">
      <NodeJsWork></NodeJsWork>
      <JWT></JWT>
      <JSvsNode></JSvsNode>
      <SQLvsNOSQL></SQLvsNOSQL>
    </div>
  );
};

export default Blog;
