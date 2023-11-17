import React from "react";

export default function CarReviewForm() {
  function handleFormSubmit() {
    console.log("form submitted");
  }
  return (
    <div className=" h-full my-8 mx-8 p-8 font-bold text-gray-700">
      <h1 className="text-5xl text-blue-600">
        Do you like this car? fill the form below to book for a car review with
        the dealer.
      </h1>

      <form
        className=" w-full flex flex-col items-center justify-center mt-16"
        action={() => handleFormSubmit}
      >
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder=" Full name"
        />
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="text"
          placeholder="Contacts"
        />
        <input
          className="w-80 p-4 border-2 border-gray-600 m-2"
          type="email"
          placeholder="Email"
        />
        <p className="text-red-700">
          When Will you be available for a review?, we can fit you in our
          schedule and help you get your car, pick any two dates below while the
          car is still available.
        </p>
        <div className="">
          <label htmlFor="date">From:</label>
          <input
            type="date"
            class="border m-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
          />
        </div>

        <div className="">
          <label htmlFor="date">To:</label>
          <input
            type="date"
            class="border m-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
          />
        </div>

        <button
          type="submit"
          className="w-80 p-4 bg-blue-700 mt-4 text-gray-50 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
