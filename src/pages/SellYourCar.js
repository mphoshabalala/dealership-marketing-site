import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import SubmitButton from "../components/SubmitButton";

export default function SellYourCar() {
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

        <form className="w-full flex flex-col " action="">
          <div className="flex flex-col">
            <div className="w-full flex justify-center items-center flex-col ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700">
                Car Properties
              </h1>
              <div className="flex flex-col items-center">
                <div className="flex">
                  <Input placeholder={"Model"} />
                  <Input placeholder={"Brand"} />
                </div>
                <div className="flex-col">
                  <p className="text-green-600 pl-4">Date of purchase</p>
                  <Input placeholder={"Year Of Purchase"} />
                  <Input placeholder={"Mileage"} />
                </div>
                <div className="flex">
                  <Input placeholder={"Type, e.g. Sedan, SUV"} />
                  <Input placeholder={"Drive mode, e.g Automatic"} />
                </div>
                <div className="flex">
                  <Input placeholder={"Fuel Type, e.g Petrol"} />
                  <Input placeholder={"Max speed"} />
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
              <div className="flex">
                <div className="flex flex-col m-4">
                  <p className="py-2">Full Exterior :</p>
                  <FileInput type="file" name="image" accept="image/*" />
                </div>
                <div className="flex flex-col m-4">
                  <p className="py-2">Interior dashboard :</p>
                  <FileInput type="file" name="image" accept="image/*" />
                </div>
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Two interior images :</p>
                <div className="flex">
                  <FileInput type="file" name="image" accept="image/*" />
                  <FileInput type="file" name="image" accept="image/*" />
                </div>
              </div>
              <div className="flex flex-col m-4">
                <p className="py-2">Engine :</p>
                <FileInput type="file" name="image" accept="image/*" />
              </div>
            </div>
            <div className=" flex justify-center flex-col  items-center font-bold text-gray-700 ">
              <h1 className="text-2xl font-semibold md:font-bold text-gray-700 mt-8">
                Your documents
              </h1>
              <div className="flex">
                <div className="flex flex-col m-4">
                  <p className="py-2">certified ID copy(pdf) :</p>
                  <FileInput type="file" name="image" accept=".pdf" />
                </div>
                <div className="flex flex-col m-4">
                  <p className="py-2">
                    Certified copy of your car registration document(pdf) :
                  </p>
                  <FileInput type="file" name="image" accept=".pdf" />
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
