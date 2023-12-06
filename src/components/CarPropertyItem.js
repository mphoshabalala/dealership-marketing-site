import React from "react";

export default function CarPropertyItem({
  currentCarFeature,
  icon,
  text,
  SIUnit,
}) {
  return (
    <li className="md:h-8 px-2 bg-gray-200 flex justify-center items-center rounded mr-2 mb-2">
      <img className="h-4 w-4 mr-2" src={icon} alt="" />
      <p>
        {text}: {currentCarFeature} {SIUnit}
      </p>
    </li>
  );
}
