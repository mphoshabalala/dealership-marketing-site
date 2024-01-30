import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ScrollToTop from "../utilities/ScrollToTop";
import { Link } from "react-router-dom";
import { useRecoverAccount } from "../contexts/Account context/RecoverAccountContext";
import "animate.css";
export default function RecoverAccount() {
  const { form, handleInputChange, handleFormSubmit } = useRecoverAccount();
  return (
    <>
      <Header />
      <ScrollToTop />
      <form
        className="flex items-center justify-center h-screen bg-gray-100 animate__animated animate__fadeIn"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col">
          <div className="p-2">
            <h1 className="font-bold text-3xl">RECOVER ACCOUNT</h1>
            <p className="font-bold text-red-700">
              Recovery code will be sent to this email
            </p>
          </div>
          <div className="flex flex-col">
            <Input
              placeholder={"Email"}
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <SubmitButton text={"REQUEST CODE"} />
          </div>
          <div className="flex p-2 font-semibold">
            <Link
              className=" underline hover:text-gray-900"
              to={"/account/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
