import React from "react";
import { Link } from "react-router-dom";
import calculator from "../images/calculator.png";
import CallToActionButton from "./CallToActionButton";
export default function CalculateCarValue({ rightArrow }) {
  return (
    <div className="flex-col sm:mt-8  bg-cover bg-center px-8 md:px-24 h-3/4 flex items-center text-gray-800 md:flex-row">
      <div className="w-full sm:mt-8  md:w-1/2 flex flex-col items-start md:ml-8">
        <h1 className="text-5xl font-bold ">HOW MUCH DOES YOUR CAR COST??</h1>
        <p className="md:text-2xl text-gray-600 font-semibold flex flex-col items-start">
          Let us help you determine the value of your car. At Echowheels we can
          help you determine the value of your car, we use a trustworthy
          methodology that is being used by qualified accountants to determine
          the value of your car, let us help you find the actual worth of your
          car
        </p>
        <div className="border-blue-200 border-2 flex  p-2 rounded mt-4 ">
          <CallToActionButton
            to="/calculate-car-worth"
            rightArrow={rightArrow}
            text=" ESTIMATE CAR WORTH"
            bg_color="bg-gray-700"
          />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <img src={calculator} alt="" />
      </div>
    </div>
  );
}
