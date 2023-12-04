import React, { useEffect } from "react";
import { useDealers } from "../contexts/dealersContext";
import dealer from "../images/man1.png";
import { Link } from "react-router-dom";
import CallToActionButton from "./CallToActionButton";
export default function DealersSection({ rightArrow }) {
  return (
    <div className="bg-dealerImage  w-full bg-center bg-cover bg-no-repeat md:pt-16 h-3/4 p-8 mb-20  md:p-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h1 className="text-2xl  md:font-bold   md:text-4xl  justify-center font-Bebas mb-8 ">
            MEET OUR DEALERS AND PURCHASE YOUR
            <span className="text-blue-600 text-3xl md:text-5xl">DREAM</span>
            <span className="text-3xl md:text-5xl">CAR</span>
          </h1>
          <p className="md:text-2xl text-gray-600 font-semibold">
            Meet our reliable and trustworthy dealers who specializes in
            providing a world class service in the process of your car purchase.
          </p>
          <div className="border-blue-200 border-2 flex flex-col md:flex-row  justify-center  p-2 rounded mt-4">
            <CallToActionButton
              to="/dealers"
              rightArrow={rightArrow}
              text="MEET MORE"
              bg_color="bg-purple-800"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="border-2 w-30 h-35  md:w-60 md:h-70 border-blue-200 rounded bg-white p-2">
            <img className="" src={dealer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
