import React from "react";

export default function SubmitButton({
  onClick,
  text = "SUBMIT",
  background_color = "bg-blue-700",
  background_hover_color = "hover:bg-blue-600",
}) {
  return (
    <button
      onClick={onClick}
      className={`w-80 p-4 mx-2 ${background_color} mt-4 text-gray-50 ${background_hover_color}`}
    >
      {text}
    </button>
  );
}
