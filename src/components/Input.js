import React from "react";

export default function Input({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) {
  return (
    <input
      className=" w-80 p-2 border-2 rounded-md  border-gray-400 m-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
}
