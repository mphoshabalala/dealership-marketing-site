// import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DealersSection from "../components/DealersSection";
import CarsSection from "../components/CarsSection";
import SellYourCarSection from "../components/SellYourCarSection";
import ScrollToTop from "../utilities/ScrollToTop";
import BecomeADealer from "../components/BecomeADealer";
import rightArrow from "../images/rightArrow.png";
import CalculateCarValue from "../components/CalculateCarValue";
import NewsLetter from "../components/NewsLetter";
import "animate.css";
export default function Homepage() {
  return (
    <div className="text-gray-900 bg-gray-100 animate__animated animate__fadeIn">
      <ScrollToTop />
      <Header />
      <NewsLetter />
      <Hero rightArrow={rightArrow} />
      <CalculateCarValue rightArrow={rightArrow} />
      <CarsSection rightArrow={rightArrow} />
      <DealersSection rightArrow={rightArrow} />
      <SellYourCarSection rightArrow={rightArrow} />
      <BecomeADealer rightArrow={rightArrow} />
      <Footer />
    </div>
  );
}
