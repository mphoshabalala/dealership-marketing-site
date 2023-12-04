import React from "react";
import { Link } from "react-router-dom";

export default function CallToActionButton({
  to,
  rightArrow,
  text,
  bg_color,
  text_color = "text-white",
}) {
  return (
    <Link
      to={to}
      className={`text-semibold ${bg_color} py-2 md:py-4 px-4 md:px-8 md:text-2xl ${text_color} md:font-bold  rounded flex items-center`}
    >
      {text}
      <span>
        <img className="h-4 ml-4  md:h-6  md:ml-8" src={rightArrow} alt="" />
      </span>
    </Link>
  );
}
