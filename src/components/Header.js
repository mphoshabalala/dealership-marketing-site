import { Link } from "react-router-dom";
import facebook from "../images/facebook.png";
import x from "../images/twitter.png";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";
import menu from "../images/hamburger.png";
import Menu from "./Menu";
import ScrollUp from "./ScrollUp";
import { useHeader } from "../contexts/HeaderContext";

export default function Header() {
  const { isMenuBarOpen, setIsMenubarOpen, handleMenu } = useHeader();

  return (
    <>
      <header className="w-screen px-8 md:w-full md:px-16 py-4 flex items-center text-gray-700 justify-center bg-blue-400 h-24 font-semibold fixed top-0 left-0 border-b-4 border-b-red-400 z-20">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <h1 className="md:text-3xl">ECOWHEELS</h1>
          </Link>

          <div>
            <ul className="hidden md:block">
              <li>
                <Link
                  to="/cars"
                  className="mr-4 hover:text-blue-200 transition-all"
                  href="#"
                >
                  BUY CAR
                </Link>
                <Link
                  to="/sell-your-car"
                  className="mr-4 hover:text-blue-200 transition-all"
                  href="#"
                >
                  SELL CAR
                </Link>

                {/* <Link to="/dealers" className="hover:text-blue-200 mr-4">
                  DEALERS
                </Link> */}
                <Link className="hover:text-blue-200 mr-4 transition-all">
                  BLOGS
                </Link>
                <Link
                  to="/account/login"
                  className=" hover:text-blue-200 transition-all"
                >
                  ACCOUNT
                </Link>
              </li>
            </ul>
            <button
              onClick={() => handleMenu()}
              className="block w-6 md:hidden"
            >
              <img src={menu} alt="" />
            </button>
          </div>
        </div>
      </header>
      <div className="fixed right-0  bottom-40 bg-white rounded-lg">
        <ul>
          <li>
            <a href="facebook.com">
              <img
                className="w-8   md:w-l2 md:h-12 mb-2"
                src={facebook}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img className="w-8  md:w-l2 md:h-12 mb-2" src={x} alt="" />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img
                className="w-8 h-8  md:w-l2 md:h-12 mb-2"
                src={instagram}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="facebook.com">
              <img className="w-8 h-8  md:w-l2 md:h-12" src={tiktok} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="fixed right-16 bottom-16">
        <ScrollUp />
      </div>

      {isMenuBarOpen && <Menu setIsMenubarOpen={setIsMenubarOpen} />}
    </>
  );
}
