import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ScrollToTop from "../utilities/ScrollToTop";

export default function BecomeADealer() {
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
        <form className=" items-center w-full flex flex-col " action="">
          <Input placeholder="Name" />
          <Input placeholder="Surname" />
          <Input placeholder="Company" />
          <Input
            type="textarea"
            placeholder="Brief story of you and your company"
          />
          <SubmitButton />
        </form>
      </div>
      <Footer />
    </>
  );
}
