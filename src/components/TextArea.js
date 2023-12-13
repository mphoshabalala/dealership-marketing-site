import React from "react";

export default function TextArea({
  name,
  cols = "44",
  rows = "10",
  placeholder,
}) {
  return (
    <textarea
      className="w-full p-2 border-2 rounded-md  border-gray-400 m-2"
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
}
