import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ totalPages, handlePageClick }) {
  return (
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
  );
}
