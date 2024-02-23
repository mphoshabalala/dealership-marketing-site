import React from "react";
import car from "../images/carFront.svg";
import { Link } from "react-router-dom";
import CallToActionButton from "./CallToActionButton";

export default function CarsSection({ rightArrow }) {
  return (
    <div className="flex-col pt-8 bg-carImg bg-cover bg-center  bg-no-repeat px-8  h-screen flex items-center  text-gray-800 md:px-24 md:pt-0 md:flex-row">
      <div className=" w-full md:w-1/2">
        <img src={car} alt="" />
      </div>
      <div className="w-full   flex flex-col items-center sm:mt-8  md:w-1/2 md:items-start md:ml-8">
        <h1 className="text-2xl font-semibold text-center justify-center font-Bebas md:text-start md:font-bold md:text-4xl mb-8 ">
          PURCHASE YOUR{" "}
          <span className="text-blue-600 text-3xl md:text-5xl">DREAM</span>{" "}
          <span className="text-4xl md:text-5xl">CAR</span> FROM US
        </h1>
        <p className=" text-gray-600 font-semibold text-center md:text-2xl md:text-start">
          We sell a wide variety of cars that suit your lifestyle needs, our
          cars are well maintained and preserved for our beloved customers,
          click the link below and make a worthwile life decision.
        </p>
        <div className="border-blue-200 border-2 flex items-center justify-center  p-2 rounded mt-4">
          <CallToActionButton
            to="/cars"
            rightArrow={rightArrow}
            text="SEE MORE"
            bg_color="bg-red-700"
          />
        </div>
      </div>
    </div>
  );
}
