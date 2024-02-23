import React, { useState } from "react";
// import supabase from "../supabase_config/supabase";

import Input from "../components/Input";
import axios from "axios";
const BASE_URL = "";
export default function MobileCarReviewForm({
  carModel,
  carBrand,
  id,
  setModalOpen,
}) {
  const [formError, setFormError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    contacts: "",
    email: "",
    fromDate: "",
    toDate: "",
    model: carModel,
    brand: carBrand,
    carId: id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("contacts", form.contacts);
    formData.append("email", form.email);
    formData.append("fromDate", form.fromDate);
    formData.append("toDate", form.toDate);
    formData.append("model", form.model);
    formData.append("brand", form.brand);
    formData.append("carId", form.carId);

    setForm({
      name: "",
      contacts: "",
      email: "",
      fromDate: "",
      toDate: "",
      model: carModel,
      brand: carBrand,
      carId: id,
    });

    try {
      const res = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      setFormError(error);
    }
  }

  return (
    <div className=" fixed items-center top-0 left-0 pt-16 w-screen h-full md:hidden bg-white font-bold text-gray-700">
      <div className="flex justify-end   mr-4">
        <p
          className="font-bold border rounded-lg p-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setModalOpen((prev) => !prev)}
        >
          X
        </p>
      </div>
      <h1 className=" text-center text-blue-600">
        Do you like this car? fill the form below to book for a car review with
        the dealer.
      </h1>

      <form
        className=" w-full flex flex-col items-center justify-center mt-2"
        onSubmit={handleFormSubmit}
      >
        {formError && <p>{formError}</p>}

        <div className="flex-col pl-4 w-full md:flex-row">
          <Input
            onChange={handleInputChange}
            value={form.name}
            name="name"
            placeholder="Full name"
          />
          <Input
            value={form.contacts}
            name="contacts"
            placeholder="Contacts"
            onChange={handleInputChange}
          />
          <Input
            value={form.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <p className="text-red-700 text-center">
          When Will you be available for a review?, we can fit you in our
          schedule and help you get your car, pick any two dates below while the
          car is still available.
        </p>
        <div className="flex-col md:flex">
          <div className="flex flex-col items-start">
            <label htmlFor="date">From:</label>
            <Input
              onChange={handleInputChange}
              value={form.fromDate}
              name="fromDate"
              type="date"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="date">To:</label>
            <Input
              onChange={handleInputChange}
              value={form.toDate}
              name="toDate"
              type="date"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-80 p-4 bg-blue-700 mt-2 text-gray-50 hover:bg-blue-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
