import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ScrollToTop from "../utilities/ScrollToTop";
import axios from "axios";
import FileInput from "../components/FileInput";
import { convertToBase64 } from "../utilities/Filestreams";
import TextArea from "../components/TextArea";

const BASE_URL = "";

export default function BecomeADealer() {
  const [form, setForm] = useState({
    companyName: "",
    owner: "",
    slogan: "",
    dealerLocation: "",
    dealershipInformation: "",
    weeklyOpenTime: "",
    weeklyCloseTime: "",
    weekendOpenTime: "",
    weekendCloseTime: "",
    dealerImg: "",
    logoImg: "",
  });

  // handle input change and update the setForm state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = async (e, field) => {
    const files = await e.target.files;
    //check if theres a file
    if (files && files.length > 0) {
      // convert the file to base64 encoding
      const base64 = await convertToBase64(files[0]);
      console.log(base64);
      // update the setForm state bny storing base64 file
      setForm((prevForm) => ({ ...prevForm, [field]: base64 }));
    }
  };

  const handleFormSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    // instantiate formData object for holding formData datatype
    const formData = new FormData();
    // append actual data
    formData.append("companyName", form.companyName);
    formData.append("owner", form.owner);
    formData.append("slogan", form.slogan);
    formData.append("dealerLocation", form.dealerLocation);
    formData.append("dealershipInformation", form.dealershipInformation);
    formData.append("weeklyOpenTime", form.weeklyOpenTime);
    formData.append("weeklyCloseTime", form.weeklyCloseTime);
    formData.append("weekendOpenTime", form.weekendOpenTime);
    formData.append("weekendCloseTime", form.weekendCloseTime);
    formData.append("dealerImg", form.dealerImg);
    formData.append("logoImg", form.logoImg);

    // Reset form after successful submission
    setForm({
      companyName: "",
      owner: "",
      slogan: "",
      dealerLocation: "",
      dealershipInformation: "",
      weeklyOpenTime: "",
      weeklyCloseTime: "",
      weekendOpenTime: "",
      weekendCloseTime: "",
      dealerImg: "",
      logoImg: "",
    });
    try {
      const res = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if (res.status !== 200) {
      //   throw new Error("Failed to submit data");
      // }

      // Reset form
      setForm({
        companyName: "",
        owner: "",
        slogan: "",
        dealerLocation: "",
        dealershipInformation: "",
        weeklyOpenTime: "",
        weeklyCloseTime: "",
        weekendOpenTime: "",
        weekendCloseTime: "",
        dealerImg: "",
        logoImg: "",
      });
    } catch (err) {
      console.error("Error submiting data:", err.message);
    }
  };

  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            BECOME A DEALER
          </h1>
        </div>
        <p>
          Fill this form below, note that you will be contacted for further
          approval{" "}
        </p>
        <form
          className=" items-center w-full flex flex-col "
          onSubmit={handleFormSubmit}
        >
          <div className="md:flex ">
            <Input
              name="companyName"
              placeholder="Company name"
              onChange={handleInputChange}
              value={form.companyName}
            />
            <Input
              name="owner"
              placeholder="Dealer's full name"
              onChange={handleInputChange}
              value={form.owner}
            />
          </div>
          <div className="md:flex">
            <Input
              name="slogan"
              placeholder="Slogan"
              onChange={handleInputChange}
              value={form.slogan}
            />
            <Input
              onChange={handleInputChange}
              placeholder="Dealership location"
              name="dealerLocation"
              value={form.dealerLocation}
            />
          </div>
          <div className="w-full md:px-60">
            <TextArea
              name="name"
              placeholder="Brief dealership descriptive information information"
              onChange={handleInputChange}
              value={form.dealershipInformation}
            />
          </div>
          <div className="md:flex">
            <div>
              <p className="text-green-600 pl-4">Week days open time</p>
              <Input
                name="weeklyOpenTime"
                type="time"
                onChange={handleInputChange}
                value={form.weeklyOpenTime}
              />
            </div>
            <div>
              <p className="text-green-600 pl-4">Week days close time</p>
              <Input
                name="weeklyCloseTime"
                type="time"
                onChange={handleInputChange}
                value={form.weeklyCloseTime}
              />
            </div>
          </div>
          <div className="md:flex">
            <div>
              <p className="text-green-600 pl-4">Weekend open time</p>
              <Input
                name="weekendOpenTime"
                type="time"
                onChange={handleInputChange}
                value={form.weekendOpenTime}
              />
            </div>
            <div>
              <p className="text-green-600 pl-4">Weekend close time</p>
              <Input
                name="weekendCloseTime"
                type="time"
                // placeholder="e.g. 08:00"
                onChange={handleInputChange}
                value={form.weekendCloseTime}
              />
            </div>
          </div>
          <div className="md:flex">
            <div>
              <p className="text-green-600 pl-4">Your image</p>

              <FileInput
                name="dealerImg"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "dealerImg")}
              />
            </div>
            <div>
              <p className="text-green-600 pl-4">Your company logo image</p>
              <FileInput
                name="logoImg"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "logoImg")}
              />
            </div>
          </div>
          <SubmitButton />
        </form>
      </div>
      <Footer />
    </>
  );
}
