import React from "react";
// import iphone from "../images/iphone.png";
// import email from "../images/email.png";
// import underline from "../images/underline.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <img src={underline} className="w-full m-0" alt="" /> */}
      <div
        className="w-full mt-0 px-8 md:px-16 py-32 bg-gray-900 font-semibold flex flex-col 
      md:flex-row items-center md:items-start  justify-between text-gray-400"
      >
        <div className=" items-start flex flex-col  ">
          <h1 className=" text-2xl  md:font-bold   md:text-4xl font-semibold  font-Bebas">
            CONTACT US DIRECTLY
          </h1>
          <div className="  flex flex-col  ">
            <div className="flex py-2 justify-center md:justify-normal ">
              {/* <img className="sm:w-8 sm:h-8" src={iphone} alt="" /> */}
              <div className="flex ">
                <h1 className=" font-bold  md:font-bold  ">CONTACTS :</h1>
                <p className="hover:text-gray-200 ">+27 71 569 1123</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:pt-0">
              {/* <img className="sm:w-8 sm:h-8 sm:hidden" src={email} alt="" /> */}
              <div className="flex">
                <h1 className=" font-bold  md:font-bold">EMAIL :</h1>
                <a href="" className="sm:text-center hover:text-gray-200 ">
                  uraclinespace3343@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mr-8">
          <div className="flex flex-col   md:mr-16">
            <h1 className="text-2xl  md:font-bold mt-4 md:mt-0 md:text-4xl font-Bebas font-bold  ">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col text-center md:text-start">
              <li>
                <Link className="hover:text-gray-200" to="/cars">
                  Buy Car
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" to="/sell-your-car">
                  Sell Car
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" to="/become-a-dealer">
                  Marketing With Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" to="/about-us" href="#4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-gray-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  ">
            <h1 className="text-2xl md:font-bold   md:text-4xl font-Bebas font-bold mt-4 md:mt-0 py-2 md:py-0">
              NAVIGATION
            </h1>
            <ul className="text-center md:text-start">
              <li>
                <Link className="hover:text-gray-200" to="/dealers">
                  Dealers
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200" to="/cars">
                  Cars
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end  bg-gray-900 pr-24 pb-4 font-semibold">
        <p className=" border-b-8 border-blue-500 text-gray-400">
          By UraclineSpace
        </p>
      </div>
      <div className="py-4 px-4 md:px-16 bg-gray-300">
        <p>&copy; {new Date().getFullYear()}, Copyright Reserved. </p>
      </div>
    </>
  );
}
