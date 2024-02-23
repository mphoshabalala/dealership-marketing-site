import React from "react";

export default function Cancel({ setModalOpen }) {
  return (
    <div className="flex justify-end w-full">
      <p
        className="font-bold border rounded-lg p-4 cursor-pointer hover:bg-gray-200"
        onClick={() => setModalOpen((prev) => !prev)}
      >
        X
      </p>
    </div>
  );
}
