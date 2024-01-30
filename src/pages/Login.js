import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import ScrollToTop from "../utilities/ScrollToTop";
import { Link } from "react-router-dom";
import { useLogin } from "../contexts/Account context/LoginContext";
import "animate.css";

export default function Login() {
  const { form, handleInputChange, handleFormSubmit } = useLogin();
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
            <h1 className="font-bold text-3xl">LOGIN</h1>
          </div>
          <div className="flex flex-col">
            <Input
              placeholder={"Username"}
              value={form.username}
              onChange={handleInputChange}
              name="username"
            />
            <Input
              placeholder={"Password"}
              value={form.password}
              onChange={handleInputChange}
              type="password"
              name="password"
            />
            <SubmitButton />
          </div>
          <div className="flex p-2 font-semibold">
            <p>Forgot Credentals?</p>
            <Link
              className=" underline hover:text-gray-900"
              to={"/account/recover-account"}
            >
              Recover Here
            </Link>
          </div>
          <Link
            className=" underline hover:text-gray-900"
            to={"/account/create-account"}
          >
            Create Account
          </Link>
        </div>
      </form>
      <Footer />
    </>
  );
}
