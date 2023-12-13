import React from "react";
import iphone from "../images/iphone.png";
import email from "../images/email.png";
import underline from "../images/underline.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <img src={underline} className="w-full m-0" alt="" />
      <div
        className="w-full mt-0 px-8 md:px-16 py-32 bg-purple-300 font-semibold flex flex-col 
      md:flex-row items-center md:items-start  justify-between text-gray-700"
      >
        <div className=" items-center flex flex-col text-center ">
          <h1 className="text-center text-2xl  md:font-bold   md:text-4xl font-semibold  font-Bebas">
            CONTACT US DIRECTLY
          </h1>
          <div className="items-center  flex flex-col md:flex-row py-8 ">
            <div className="flex py-8 md:pr-24 items-center">
              {/* <img className="sm:w-8 sm:h-8" src={iphone} alt="" /> */}
              <div className="items-center">
                <h1 className="text-center text-2xl  md:font-bold   md:text-4xl ">
                  CONTACTS
                </h1>
                <p>+27 71 569 1123</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row pt-8 md:pt-0">
              {/* <img className="sm:w-8 sm:h-8 sm:hidden" src={email} alt="" /> */}
              <div className="md:pl-4">
                <h1 className="text-center text-2xl  md:font-bold   md:text-4xl ">
                  EMAIL
                </h1>
                <p className="sm:text-center ">uraclinespace3343@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mr-8">
          <div className="flex flex-col   md:mr-16">
            <h1 className="text-2xl  md:font-bold   md:text-4xl font-Bebas font-bold text-center ">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col items-center ">
              <li>
                <Link className="hover:text-gray-400" to="/cars">
                  Buy Car
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="/sell-your-car">
                  Sell Car
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="/become-a-dealer">
                  Marketing With Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="/about-us" href="#4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-gray-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center ">
            <h1 className="text-2xl md:font-bold   md:text-4xl font-Bebas font-bold py-8 md:py-0">
              NAVIGATION
            </h1>
            <ul className="text-center">
              <li>
                <Link to="/dealers">Dealers</Link>
              </li>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-purple-300 pr-24 pb-4 font-semibold">
        <p className=" border-b-8 border-blue-500">By UraclineSpace</p>
      </div>
      <div className="py-4 px-4 md:px-16 bg-gray-300">
        <p>&copy; {new Date().getFullYear()}, Copyright Reserved. </p>
      </div>
    </>
  );
}
