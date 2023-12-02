import React from "react";
import { Link } from "react-router-dom";
export default function BecomeADealer({ rightArrow }) {
  return (
    <div className="flex-col sm:mt-8 bg-carImg bg-cover bg-center bg-no-repeat px-8 md:px-24 h-screen flex items-center text-gray-800 md:flex-row">
      <div className="w-1/2 flex-col items-start">
        <h1 className="text-5xl font-bold ">
          WORK WITH US, AND BECOME A DEALER
        </h1>
        <p className="md:text-2xl text-gray-600 font-semibold">
          Let us help your business reach new heights, sign-up and become a
          dealer.
        </p>
        <div className="border-blue-200 border-2 flex flex-col md:flex-row  justify-center  p-2 rounded mt-4 w-fit">
          <Link
            to="/dealer-form"
            className="bg-purple-800 px-4 py-2 md:py-4 md:px-8 md:text-2xl text-white font-semibold md:font-bold    rounded flex items-center"
          >
            Become A dealer
            <span>
              <img
                className="h-4 md:h-6 ml-2  md:ml-4"
                src={rightArrow}
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
