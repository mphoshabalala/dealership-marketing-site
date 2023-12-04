import React from "react";

export default function FileInput({ type, name, accept }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        accept={accept}
        class=" border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}
