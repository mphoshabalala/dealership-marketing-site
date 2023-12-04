import React, { useState } from "react";
// import supabase from "../supabase_config/supabase";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
export default function CarReviewForm({ carModel, carBrand, id }) {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState("");
  const [email, setEmail] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formError, setFormError] = useState(null);
  const brand = carModel;
  const model = carBrand;
  const navigate = useNavigate();

  return (
    <div className=" h-full my-8 mx-8 p-8 font-bold text-gray-700">
      <h1 className="text-5xl text-blue-600">
        Do you like this car? fill the form below to book for a car review with
        the dealer.
      </h1>

      <form
        className=" w-full flex flex-col items-center justify-center mt-16"
        // onSubmit={handleFormSubmit}
      >
        {formError && <p>{formError}</p>}

        <div className="flex">
          <Input type="email" placeholder="Full name" />
          <Input type="email" placeholder="Contacts" />
          <Input type="email" placeholder="Email" />
        </div>
        <p className="text-red-700">
          When Will you be available for a review?, we can fit you in our
          schedule and help you get your car, pick any two dates below while the
          car is still available.
        </p>
        <div className="flex">
          <div className="flex flex-col items-start">
            <label htmlFor="date">From:</label>
            <Input type="date" />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="date">To:</label>
            <Input type="date" />
          </div>
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
