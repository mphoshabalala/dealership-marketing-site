import React from "react";
import iphone from "../images/iphone.png";
import email from "../images/email.png";
import underline from "../images/underline.svg";

export default function Footer() {
  return (
    <>
      <img src={underline} className="w-full" alt="" />
      <div className=" mt-0 px-16 py-32 bg-purple-300 font-semibold flex justify-between text-gray-700">
        <div className="">
          <h1 className="font-bold text-3xl font-Bebas">CONTACT US DIRECTLY</h1>
          <div className="flex pt-8 ">
            <div className="flex pt-8 pr-24">
              <img src={iphone} alt="" />
              <div className="">
                <h1>CONTACTS</h1>
                <p>+27 71 569 1123</p>
              </div>
            </div>
            <div className="flex pt-8">
              <img src={email} alt="" />
              <div className="pl-4">
                <h1>CONTACTS</h1>
                <p>uraclinespace3343@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mr-8">
          <div className="mr-16">
            <h1 className="text-2xl font-Bebas font-bold">OUR SERVICES</h1>
            <ul>
              <li>
                <a href="#1">Buy Car</a>
              </li>
              <li>
                <a href="#2">Sell Car</a>
              </li>
              <li>
                <a href="#3">Marketing With Us</a>
              </li>
              <li>
                <a href="#4">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-Bebas font-bold">NAVIGATION</h1>
            <ul>
              <li>
                <a href="#1">Dealers</a>
              </li>
              <li>
                <a href="#2">Cars</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-purple-300 pr-24 pb-4 font-semibold">
        <p className=" border-b-8 border-blue-500">By UraclineSpace</p>
      </div>
      <div className="py-4 px-16 bg-gray-300">
        <p>&copy; {new Date().getFullYear()}, Copyright Reserved. </p>
      </div>
    </>
  );
}
