import React from "react";

export default function FileInput({ type = "file", name, accept, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        accept={accept}
        className=" m-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={onChange}
      />
    </div>
  );
}
