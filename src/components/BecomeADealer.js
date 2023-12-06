import React from "react";
import network from "../images/network.png";
import CallToActionButton from "./CallToActionButton";
export default function BecomeADealer({ rightArrow }) {
  return (
    <div className=" flex-col-reverse sm:mt-8 bg-carImg bg-cover bg-center bg-no-repeat px-8 md:px-24 h-full md:h-screen flex md:items-center text-gray-800 md:flex-row">
      <div className="w-full sm:mt-8  md:w-1/2 flex flex-col items-start md:ml-8">
        <h1 className="text-2xl  md:font-bold   md:text-4xl  justify-center font-Bebas mb-8 ">
          WORK WITH US, AND BECOME A DEALER
        </h1>
        <p className="md:text-2xl text-gray-600 font-semibold">
          Let us help your business reach new heights, sign-up and join a
          network of like minded individuals.
        </p>
        <div className="border-blue-200 border-2 flex flex-col md:flex-row  justify-center  p-2 rounded mt-4 w-fit">
          <CallToActionButton
            to="/become-a-dealer"
            rightArrow={rightArrow}
            text="JOIN NOW"
            bg_color="bg-purple-800"
          />
        </div>
      </div>
      <div className=" w-full md:w-1/2">
        <img src={network} alt="" />
      </div>
    </div>
  );
}
