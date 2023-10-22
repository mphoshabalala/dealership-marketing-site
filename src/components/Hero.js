import React from "react";
import polo from "../images/polonobg.png";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-heroImage bg-center bg-cover bg-no-repeat bg-blue-100 px-16">
      <div className="w-1/3 h-full  flex flex-col  justify-center">
        <h1 className="font-Bebas text-7xl">
          BUY FROM BEST DEALERS, WHERE QUALITY MEETS AFFORDABILITY
        </h1>
        <p className="font-semibold text-2xl text-gray-500">
          Easy Purchase. Affordable. Good Conditions.
        </p>
      </div>
      <img className="w-2/3" src={polo} alt="" />
    </div>
  );
}
