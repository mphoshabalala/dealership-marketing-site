import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.png";
import x from "../images/twitter.png";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";

export default function Header() {
  return (
    <>
      <header className="w-full px-16 py-4 flex items-center text-grey justify-center bg-blue-400 font-semibold fixed top-0 left-0 border-b-4 border-b-red-400">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <h1 className="text-3xl">BEST DEALERS</h1>
          </Link>

          <ul className="">
            <li>
              <Link to="cars" className="mr-4 hover:text-blue-200" href="#">
                BUY CAR
              </Link>
              <Link
                to="sell-your-car"
                className="mr-4 hover:text-blue-200"
                href="#"
              >
                SELL CAR
              </Link>

              <a href="#dealers" className="hover:text-blue-200">
                DEALERS
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="fixed right-0  bottom-40 bg-white rounded-lg">
        <ul>
          <li>
            <a href="facebook.com">
              <img className="w-l2 h-12 mb-2" src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img className="w-l2 h-12 mb-2" src={x} alt="" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img className="w-l2 h-12 mb-2" src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img className="w-l2 h-12" src={tiktok} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
