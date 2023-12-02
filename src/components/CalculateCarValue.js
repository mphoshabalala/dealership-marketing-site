import React from "react";
import { Link } from "react-router-dom";
export default function CalculateCarValue({ rightArrow }) {
  return (
    <div className="flex-col sm:mt-8  bg-cover bg-center px-8 md:px-24 h-screen flex items-center text-gray-800 md:flex-row">
      <div className="w-1/2 flex-col items-start">
        <h1 className="text-5xl font-bold ">HOW MUCH DOES YOUR CAR COST??</h1>
        <p className="md:text-2xl text-gray-600 font-semibold flex flex-col items-start">
          Let us help you determine the value of your car. At Echowheels we can
          help you dewtermine the value of your car, we use a trustworthy
          methodology that is being used by qualified accountants to determine
          the value of your car, let us help you find the actual worth of your
          car
        </p>
        <div className="border-blue-200 border-2 flex  justify-center  p-2 rounded mt-4 ">
          <Link
            to="/cars"
            className="bg-gray-700 px-4 py-2 md:py-4 md:px-8 md:text-2xl text-white font-semibold md:font-bold rounded flex items-center"
          >
            ESTIMATE CAR WORTH
            <span>
              <img
                className="h-4 ml-4  md:h-6  md:ml-8"
                src={rightArrow}
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
