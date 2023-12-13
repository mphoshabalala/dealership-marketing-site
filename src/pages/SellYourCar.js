import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import { convertToBase64 } from "../utilities/convertToBase64";

const BASE_URL = "";

export default function SellYourCar() {
  const [form, setForm] = useState({
    model: "",
    brand: "",
    dateOfPurchase: "",
    mileage: "",
    carType: "",
    driveMode: "",
    fuelType: "",
    maxSpeed: "",
    fullCarExteriorImg: "",
    interiorDashboardImg: "",
    interior1Img: "",
    interior2Img: "",
    engineImg: "",
    yourIdImg: "",
    carRegistrationImg: "",
  });

  // handle input change and update the setForm state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  //handle file change and convert to base 64 encoding
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
    formData.append("model", form.model);
    formData.append("brand", form.brand);
    formData.append("dateOfPurchase", form.dateOfPurchase);
    formData.append("mileage", form.mileage);
    formData.append("carType", form.carType);
    formData.append("driveMode", form.driveMode);
    formData.append("fuelType", form.fuelType);
    formData.append("maxSpeed", form.maxSpeed);
    // File fields
    formData.append("fullCarExteriorImg", form.fullCarExteriorImg);
    formData.append("interiorDahboardImg", form.interiorDahboardImg);
    formData.append("interior1Img", form.interior1Img);
    formData.append("interior2Img", form.interior2Img);
    formData.append("engineImg", form.engineImg);
    formData.append("yourIdImg", form.yourIdImg);
    formData.append("carRegistrationImg", form.carRegistrationImg);

    // Reset form after successful submission
    setForm({
      model: "",
      brand: "",
      dateOfPurchase: "",
      mileage: "",
      carType: "",
      driveMode: "",
      fuelType: "",
      maxSpeed: "",
      fullCarExteriorImg: "",
      interiorDahboardImg: "",
      interior1Img: "",
      interior2Img: "",
      engineImg: "",
      yourIdImg: "",
      carRegistrationImg: "",
    });
    try {
      // install axios
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
        model: "",
        brand: "",
        dateOfPurchase: "",
        mileage: "",
        carType: "",
        driveMode: "",
        fuelType: "",
        maxSpeed: "",
        fullCarExteriorImg: "",
        interiorDahboardImg: "",
        interior1Img: "",
        interior2Img: "",
        engineImg: "",
        yourIdImg: "",
        carRegistrationImg: "",
      });
    } catch (err) {
      console.error("Error submiting data:", err.message);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="pt-24 w-full flex flex-col  items-center bg-gray-100 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            SELL YOUR CAR
          </h1>
        </div>
        <p className="md:text-2xl font-semibold text-center md:text-start text-gray-700">
          Let us help you sell your car to one of our professional deales.
        </p>

        <form className="w-full flex flex-col " onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <div className="w-full flex justify-center items-center flex-col ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700">
                Car Properties
              </h1>
              <div className="flex flex-col items-center">
                <div className="flex-col ">
                  <Input
                    placeholder={"Model"}
                    value={form.model}
                    onChange={handleInputChange}
                    name="model"
                  />
                  <Input
                    placeholder={"Brand"}
                    value={form.brand}
                    onChange={handleInputChange}
                    name="brand"
                  />
                </div>
                <div className=" flex-col ">
                  <p className="text-green-600 pl-4">Date of purchase</p>
                  <Input
                    placeholder={"Year Of Purchase"}
                    value={form.dateOfPurchase}
                    onChange={handleInputChange}
                    name="dateOfPurchase"
                    type="date"
                  />
                  <Input
                    placeholder={"Mileage"}
                    value={form.mileage}
                    onChange={handleInputChange}
                    name="mileage"
                  />
                </div>
                <div className="flex-col md:flex-row">
                  <Input
                    placeholder={"Type, e.g. Sedan, SUV"}
                    value={form.carType}
                    onChange={handleInputChange}
                    name="carType"
                  />
                  <Input
                    placeholder={"Drive mode, e.g Automatic"}
                    value={form.driveMode}
                    onChange={handleInputChange}
                    name="driveMode"
                  />
                </div>
                <div className="flex-col md:flex-row">
                  <Input
                    placeholder={"Fuel Type, e.g Petrol"}
                    value={form.fuelType}
                    onChange={handleInputChange}
                    name="fuelType"
                  />
                  <Input
                    placeholder={"Max speed"}
                    value={form.maxSpeed}
                    onChange={handleInputChange}
                    name="maxSpeed"
                  />
                </div>
                <p className="text-red-600">
                  Note: other features will be considerd after you have been
                  called for a review
                </p>
              </div>
            </div>
            <div className=" flex justify-center flex-col  items-center font-bold text-gray-700 ">
              <h1 className="text-2xl font-bold text-gray-700 mt-8">
                Car Images
              </h1>
              <div className="flex-col md:flex-row">
                <div className="flex flex-col m-4">
                  <p className="py-2">Full Exterior :</p>
                  <FileInput
                    type="file"
                    name="interiorDahboardImg"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "interiorDahboardImg")}
                  />
                </div>
                <div className="flex flex-col m-4">
                  <p className="py-2">Interior dashboard :</p>
                  <FileInput type="file" name="image" accept="image/*" />
                </div>
              </div>
              <div className="md:flex-row flex-col m-4">
                <p className="py-2">Two interior images :</p>
                <div className="flex">
                  <FileInput
                    type="file"
                    name="interior1Img"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "interior1Img")}
                  />
                  <FileInput
                    type="file"
                    name="interior2Img"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "interior2Img")}
                  />
                </div>
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Engine :</p>
                <FileInput
                  type="file"
                  name="engineImg"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "engineImg")}
                />
              </div>
            </div>
            <div className=" flex justify-center flex-col  items-center font-bold text-gray-700 ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700 mt-8">
                Your documents
              </h1>
              <div className="flex">
                <div className="flex flex-col m-4">
                  <p className="py-2">certified ID copy(pdf) :</p>
                  <FileInput
                    type="file"
                    name="yourIdImg"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "yourIdImg")}
                  />
                </div>
                <div className="flex flex-col m-4">
                  <p className="py-2">
                    Certified copy of your car registration document(pdf) :
                  </p>
                  <FileInput
                    type="file"
                    name="carRegistrationImg"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "carRegistrationImg")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center">
            <SubmitButton />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
