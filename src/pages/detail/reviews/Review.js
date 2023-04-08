import React from "react";
import Ratting from "../ratting/Ratting";

const Review = ({ ratting }) => {
  return (
    <div className="mx-auto w-4/5 lg:w-full my-5 border border-gray-200 rounded-lg p-5">
      <figure>
        <Ratting ratting={ratting}></Ratting>
        <blockquote>
          <p className="text-2xl font-semibold ">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-6 space-x-3">
          <img
            alt=""
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          />
          <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium">
              Bonnie Green
            </cite>
            <cite className="pl-3 text-sm ">
              CTO at Flowbite
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Review;
