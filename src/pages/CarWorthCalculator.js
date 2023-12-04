import React from "react";
import ScrollToTop from "../utilities/ScrollToTop";
import Header from "../components/Header";
import Dealers from "../components/Dealers";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";

export default function CarWorthCalculator() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Calculator />
      <Footer />
    </>
  );
}
