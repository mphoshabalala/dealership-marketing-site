import React, { useState } from "react";
import Cancel from "./Cancel";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const BASE_URL = `${process.env.BASE_URL}/orders`;
export default function OrderEditForm({ selectedOrder, setEditOrderFormOpen }) {
  const [form, setForm] = useState({
    name: selectedOrder.name,
    contacts: selectedOrder.contacts,
    email: selectedOrder.email,
    from: selectedOrder.from,
    to: selectedOrder.to,
    brand: selectedOrder.brand,
    model: selectedOrder.model,
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("contacts", form.contacts);
    formData.append("email", form.email);
    formData.append("from", form.from);
    formData.append("to", form.to);
    formData.append("brand", form.brand);
    formData.append("model", form.model);

    setForm({
      name: selectedOrder.name,
      contacts: selectedOrder.contacts,
      email: selectedOrder.email,
      from: selectedOrder.from,
      to: selectedOrder.to,
      brand: selectedOrder.brand,
      model: selectedOrder.model,
    });

    try {
      const res = await axios.patch(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setForm({
        name: selectedOrder.name,
        contacts: selectedOrder.contacts,
        email: selectedOrder.email,
        from: selectedOrder.from,
        to: selectedOrder.to,
        brand: selectedOrder.brand,
        model: selectedOrder.model,
      });
    } catch (error) {
      console.error("Error submiting data", error.message);
    }
  };
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-black">
      <form
        onSubmit={handleFormSubmit}
        className="p-8 bg-white flex flex-col items-center"
      >
        <Cancel setModalOpen={setEditOrderFormOpen} />
        <div className="flex flex-col">
          <label className="pl-2">Orderer's Name: </label>
          <Input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's Contacts:
          </label>
          <Input
            name="contacts"
            placeholder="Contacts"
            value={form.contacts}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's Email
          </label>
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's From Date:
          </label>
          <Input
            name="from"
            type="date"
            placeholder="From Date"
            value={form.from}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's To Date:
          </label>
          <Input
            name="to"
            type="date"
            placeholder="To Date"
            value={form.to}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's car Brand:
          </label>
          <Input
            name="brand"
            placeholder="Car Brand"
            value={form.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="pl-2" htmlFor="">
            Orderer's car Model:
          </label>
          <Input
            name="model"
            placeholder="Car Model"
            value={form.model}
            onChange={handleInputChange}
          />
        </div>
        <SubmitButton text="EDIT" />
      </form>
    </div>
  );
}
