import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCars } from "../contexts/carsContext";
import Car from "../components/Car";
import ScrollToTop from "../utilities/ScrollToTop";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function Cars() {
  const { cars, setOrderBy } = useCars();
  const [currPage, setCurrPage] = useState(0);
  const itemsPerPage = 6;
  const totalNumCars = cars.length;
  const totalPages = Math.ceil(totalNumCars / itemsPerPage);

  // change pages based on the clicked page link
  function handlePageClick({ selected }) {
    setCurrPage(selected);
  }

  //get a selected cars range
  const displayCars = cars.slice(
    currPage * itemsPerPage,
    (currPage + 1) * itemsPerPage
  );
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
            <button
              onClick={() => setOrderBy("price")}
              className="m-2 px-2 md:px-4 bg-purple-500 text-gray-200 rounded-sm hover:bg-purple-400"
            >
              Price
            </button>
            <button
              onClick={() => setOrderBy("type")}
              className="m-2 px-2 md:px-4 bg-purple-500 text-gray-200 rounded-sm hover:bg-purple-400"
            >
              Type
            </button>
            <button
              onClick={() => setOrderBy("created_at")}
              className="m-2 px-2 md:px-4 bg-purple-500 text-gray-200 rounded-sm hover:bg-purple-400"
            >
              Recent Arival
            </button>
            <button className="m-2 px-2 md:px-4 bg-purple-500 text-gray-200 rounded-sm hover:bg-purple-400">
              Older Arival
            </button>
            <button
              onClick={() => setOrderBy("created_at")}
              className="m-2 px-2 md:px-4 bg-purple-500 text-gray-200 rounded-sm hover:bg-purple-400"
            >
              Dealer
            </button>
          </div>
          <div className="flex flex-wrap">
            {displayCars.map((car) => (
              // <Car key={car.id} car={car} /> from json-server
              <Car key={car._id} car={car} />
            ))}
          </div>
          <div>
            <ReactPaginate
              className="flex"
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              pageCount={totalPages}
              onPageChange={handlePageClick}
              pageClassName="p-4 border-2 border-blue-500 border-l-0 hover:bg-blue-200"
              previousClassName="p-4 border-2 border-blue-500 rounded-l-lg  bg-blue-300 hover:bg-blue-400"
              nextClassName="p-4 border-2 border-l-0 border-blue-500 rounded-r-lg bg-blue-300 hover:bg-blue-400"
              breakClassName="p-4 border-2 border-l-0 border-blue-500  hover:bg-blue-200"
              activeClassName="bg-blue-400"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
