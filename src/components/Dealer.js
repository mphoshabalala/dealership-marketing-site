import React from "react";

export default function Dealer({ dealer }) {
  return (
    <div
      key={dealer.id}
      className="w-1/4 m-8 rounded p-4 shadow-small bg-white font-semibold text-gray-700 border-b-red-400 "
    >
      <img className="w-full h-64" src={dealer.dealerimg} alt="" />
      <p>Owner: {dealer.owner}</p>
      <p>Company: {dealer.companyName}</p>
      <p>Location: {dealer.dealerLocation}</p>
    </div>
  );
}
