import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useSearchParams } from "react-router-dom";
import { useCars } from "../contexts/carsContext";
import calender from "../images/calendar.png";
import mileage from "../images/mileage.png";
import automatic from "../images/automatic.png";
import manual from "../images/manual.png";
import fuel from "../images/gas.png";
import Loading from "../components/Loading";

export default function DetailedCar() {
  const location = useLocation();
  const carId = location.pathname.split("/").pop();
  const { getCar, isLoading, error, currentCar } = useCars();
  // const [currentCar, setCurrentCar] = useState({});

  useEffect(() => {
    getCar(carId);
  }, [carId]);

  console.log(carId);

  if (isLoading) {
    console.log("loading");
    return <Loading />;
  }
  if (error.message !== undefined) {
    console.log(error.message);
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Header />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100">
        <div className="block  border-spacing-4 border-red-400 border-b-8 mb-16">
          <h1 className="text-5xl font-Bebas">
            {currentCar.brand} {currentCar.model}
          </h1>
        </div>
        <div className="w-full px-24 py-8 flex">
          {currentCar.images ? (
            <div className="w-1/2">
              <img src={currentCar.images[0]} alt="" />
            </div>
          ) : (
            <div>Image Loading</div>
          )}
          <div className="w-1/2 bg-white">
            <ul className="p-4 font-bold text-gray-700 flex">
              <li className="h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                <img className="h-4 w-4 mr-2" src={calender} alt="" />{" "}
                <p>{currentCar.year}</p>
              </li>
              <li className="h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                <img className="h-4 w-4 mr-2" src={mileage} alt="" />{" "}
                <p>{currentCar.mileageLeft}km</p>
              </li>

              <li className="h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                {currentCar.driveMode === "Automatic" ? (
                  <>
                    <img className="h-4 w-4 mr-2" src={automatic} alt="" />
                    <p>{currentCar.driveMode}</p>
                  </>
                ) : (
                  <>
                    <img className="h-4 w-4 mr-2" src={manual} alt="" />
                    <p>{currentCar.driveMode}</p>
                  </>
                )}
              </li>
              <li className="h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2">
                <img className="h-4 w-4 mr-2" src={fuel} alt="" />{" "}
                <p>{currentCar.fuelType}</p>
              </li>
            </ul>
            <h1 className="px-4 font-bold font-Bebas text-4xl">
              R{currentCar.price}
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
