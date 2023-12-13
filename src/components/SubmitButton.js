import React from "react";

export default function SubmitButton({ onClick, text = "SUBMIT" }) {
  return (
    <button
      onClick={onClick}
      className="w-80 p-4 bg-blue-700 mt-4 text-gray-50 hover:bg-blue-600"
    >
      {text}
    </button>
  );
}
