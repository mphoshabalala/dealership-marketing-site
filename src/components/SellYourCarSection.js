import React from "react";
import paidcar from "../images/paidCar.svg";
import CallToActionButton from "./CallToActionButton";

export default function SellYourCarSection({ rightArrow }) {
  return (
    // <div className=" h-full w-full bg-gray-100   p-8 md:p-24">
    <div className="flex-col justify-center  bg-center bg-no-repeat px-8   flex text-gray-800 md:justify-normal  md:items-center md:px-24 sm:mt-8 bg-cover md:flex-row">
      <div className="w-full flex justify-center md:w-1/2">
        <div className="border-2 w-80 h-80 border-blue-200 rounded bg-white p-2">
          <img className="w-full h-full" src={paidcar} alt="" />
        </div>
      </div>
      <div className=" w-full flex flex-col items-center md:items-start  md:w-1/2">
        <h1 className="font-semibold text-2xl text-center font-Bebas mb-8 md:text-start md:text-4xl md:justify-center md:font-bold">
          SELL YOUR CAR TO US AND
          <span className="text-green-800 text-3xl md:text-5xl">
            GET PAID IMMEDIATELY!!
          </span>
        </h1>
        <p className=" text-gray-600 font-semibold text-center md:text-2xl md:text-start">
          At ECOWHEELS we value your precious assets and that is why we offer
          deals that you can not regret, we follow legal and fair transactional
          process when purchasing your car.
        </p>
        <div className="border-blue-200 border-2 flex flex-col justify-center p-2 rounded mt-4 md:flex-row ">
          <CallToActionButton
            to="/sell-your-car"
            rightArrow={rightArrow}
            text="SELL YOUR CAR"
            bg_color="bg-green-500"
          />
        </div>
      </div>
    </div>
  );
}
