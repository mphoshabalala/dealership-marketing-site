import React, { useState } from "react";
import Cancel from "./Cancel";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const BASE_URL = `${process.env.BASE_URL}/cars`;

export default function CarEditForm({ setEditCarFormOpen, selectedCar }) {
  const [form, setForm] = useState({
    brand: selectedCar.brand,
    model: selectedCar.model,
    price: selectedCar.price,
    driveMode: selectedCar.driveMode,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("brand", form.brand);
    formData.append("model", form.model);
    formData.append("price", form.price);
    formData.append("driveMode", form.driveMode);

    setForm({
      brand: selectedCar.brand,
      model: selectedCar.model,
      price: selectedCar.price,
      driveMode: selectedCar.driveMode,
    });

    try {
      const res = await axios.patch(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error submitting form data", error.message);
    }
  };

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-black">
      <form
        onSubmit={handleFormSubmit}
        className="p-8 bg-white flex flex-col items-center"
      >
        <Cancel setModalOpen={setEditCarFormOpen} />
        <div className="flex flex-col">
          <label className="pl-2">Brand: </label>
          <Input
            name="brand"
            placeholder="Car Brand"
            value={form.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Model:
          </label>
          <Input
            name="model"
            placeholder="Car Model"
            value={form.model}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Price:
          </label>
          <Input
            name="price"
            placeholder="Car Price"
            value={form.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Transmission:
          </label>
          <Input
            name="driveMode"
            placeholder="Car Price"
            value={form.driveMode}
            onChange={handleInputChange}
          />
        </div>
        <SubmitButton text="EDIT" />
      </form>
    </div>
  );
}
