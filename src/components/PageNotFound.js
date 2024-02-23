import React from "react";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen font-extrabold bg-gray-100 flex items-center justify-center">
      <div className="bg-red-200 p-8 rounded">
        <h1 className=" text-4xl">404 Not Found!</h1>
        <p>The Requested page is not available</p>
      </div>
    </div>
  );
}
