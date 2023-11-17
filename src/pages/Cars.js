import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCars } from "../contexts/carsContext";
import Car from "../components/Car";
import ScrollToTop from "../utilities/ScrollToTop";

export default function Cars() {
  const { cars } = useCars();
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="w-full py-32 pt-16 flex justify-center items-center flex-col bg-gray-100 text-gray-700">
        <div className="block  border-spacing-4 border-red-400 border-b-8 mt-16 ">
          <h1 className="text-5xl font-Bebas">OUR CARS</h1>
        </div>
        <div className="flex flex-col p-8 md:p-24 flex-wrap">
          <div className="flex items-center">
            <p>SORT BY:</p>
            <button className="m-2 px-4 bg-purple-500 text-gray-200 rounded-sm">
              Price
            </button>
            <button className="m-2 px-4 bg-purple-500 text-gray-200 rounded-sm">
              Type
            </button>
            <button className="m-2 px-4 bg-purple-500 text-gray-200 rounded-sm">
              Dealer
            </button>
            <button className="m-2 px-4 bg-purple-500 text-gray-200 rounded-sm">
              Color
            </button>
          </div>
          <div className="flex flex-wrap">
            {cars.map((car) => (
              <Car key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
