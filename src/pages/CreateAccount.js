import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ScrollToTop from "../utilities/ScrollToTop";
import { Link } from "react-router-dom";
import { useCreateAccount } from "../contexts/Account context/CreateAccountContext";
import "animate.css";
export default function CreateAccount() {
  //get CreateAccount state and functions
  const { form, handleFormSubmit, handleInputChange } = useCreateAccount();

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
            <h1 className="font-bold text-3xl">REGISTER</h1>
          </div>
          <div className="flex flex-col">
            <Input
              placeholder={"Username"}
              name="username"
              value={form.username}
              onChange={handleInputChange}
            />
            <Input
              placeholder={"Email"}
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <Input
              placeholder={"Password"}
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
            <Input
              placeholder={"Confirm Password"}
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleInputChange}
            />
            <SubmitButton />
          </div>
          <Link
            className=" underline hover:text-gray-900"
            to={"/account/login"}
          >
            Login
          </Link>
        </div>
      </form>
      <Footer />
    </>
  );
}
