import React from "react";
import { Link } from "react-router-dom";

export default function Car({ car }) {
  return (
    <Link
      key={car.id}
      to={{
        pathname: `/cars/${car.id}`,
        search: `?model=${encodeURIComponent(car.model)}`,
      }}
      className="w-1/4 h-64 flex flex-col m-2 font-semibold hover:shadow-small "
    >
      <img className="w-full h-40" src={car.images[0]} alt="" />
      <p>
        {car.brand} {car.model}
      </p>
      <p>R {car.price}</p>
    </Link>
  );
}
