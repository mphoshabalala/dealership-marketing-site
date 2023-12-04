import React from "react";
import paidcar from "../images/paidCar.svg";
import CallToActionButton from "./CallToActionButton";

export default function SellYourCarSection({ rightArrow }) {
  return (
    // <div className=" h-full w-full bg-gray-100   p-8 md:p-24">
    <div className="flex-col-reverse sm:mt-8 bg-cover bg-center bg-no-repeat px-8 md:px-24  flex md:items-center text-gray-800 md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="border-2 w-80 h-80 border-blue-200 rounded bg-white p-2">
          <img className="w-full h-full" src={paidcar} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:items-start ">
        <h1 className="font-semibold  md:font-bold text-2xl sm:text-center  md:text-4xl  md:justify-center font-Bebas mb-8">
          SELL YOUR CAR TO US AND
          <span className="text-green-800 text-3xl md:text-5xl">
            GET PAID IMMEDIATELY!!
          </span>
        </h1>
        <p className="md:text-2xl text-gray-600 font-semibold">
          At ECOWHEELS we value your precious assets and that is why we offer
          deals that you can not regret, we follow legal and fair transactional
          process when purchasing your car.
        </p>
        <div className="border-blue-200 border-2 flex  md:justify-center mt-10  p-2 rounded md:mt-4">
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
