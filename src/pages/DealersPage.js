import React from "react";
import Header from "../components/Header";
import Dealers from "../components/Dealers";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";
import "animate.css";

export default function DealersPage() {
  return (
    <div className="animate__animated animate__fadeIn">
      <ScrollToTop />
      <Header />
      <Dealers />
      <Footer />
    </div>
  );
}
