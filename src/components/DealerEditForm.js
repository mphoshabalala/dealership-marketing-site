import React, { useState } from "react";
import Cancel from "./Cancel";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const BASE_URL = `${process.env.BASE_URL}/dealers`;
export default function DealerEditForm({
  selectedDealer,
  setEditDealerFormOpen,
}) {
  const [form, setForm] = useState({
    name: selectedDealer.name,
    companyName: selectedDealer.companyName,
    dealerLocation: selectedDealer.dealerLocation,
  });

  // handle form input change
  const handleInputChange = (e) => {
    console.log(form);
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // handle Form Submit
  const handleFormSubmit = async (e) => {
    // prevent default form submity behaveor
    e.preventDefault();
    // instantiate form data
    const formData = new FormData();
    // append data to form data
    formData.append("name", form.name);
    formData.append("companyName", form.companyName);
    formData.append("dealerLocation", form.dealerLocation);
    // reset form after succesful submision
    setForm({
      name: selectedDealer.name,
      companyName: selectedDealer.companyName,
      dealerLocation: selectedDealer.dealerLocation,
    });

    try {
      // edit data in the backend using axios
      const res = await axios.patch(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setForm({
        name: selectedDealer.name,
        companyName: selectedDealer.companyName,
        dealerLocation: selectedDealer.dealerLocation,
      });
    } catch (error) {
      console.error("Error submiting data", error.message);
    }
  };

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-black">
      <form
        className="p-8 bg-white flex flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        <Cancel setModalOpen={setEditDealerFormOpen} />
        <div className="flex flex-col">
          <label className="pl-2">Dealer Name: </label>
          <Input
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            value={form.name}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Dealer Company Name:
          </label>
          <Input
            name="companyName"
            placeholder="Car Model"
            value={form.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Dealer Location:
          </label>
          <Input
            name="dealerLocation"
            onChange={handleInputChange}
            placeholder="Car Price"
            value={form.dealerLocation}
          />
        </div>

        <SubmitButton text="EDIT" />
      </form>
    </div>
  );
}
