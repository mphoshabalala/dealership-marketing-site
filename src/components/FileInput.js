import React from "react";

export default function FileInput({ name, type, accept, onChange, labelText }) {
  return (
    <div className=" font-medium text-sm">
      <label className="font-bold" htmlFor="name">
        {labelText}
      </label>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 w-80 p-2 border-2 rounded-md  border-gray-400 m-2"
      >
        Upload file
      </label>
      <div className="mt-1 flex items-center">
        {/* <span className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md text-sm font-medium text-gray-700 mr-2">
          Browse
        </span> */}
        <input
          type={type}
          id={name}
          name={name}
          accept={accept}
          className="hidden"
          onChange={onChange}
        />
      </div>
      <p>No File Uploaded</p>
    </div>
  );
}
