import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Dealers from "../components/Dealers";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="text-gray-900">
      <Header />
      <Hero />
      <Dealers />
      <Footer />
    </div>
  );
}
