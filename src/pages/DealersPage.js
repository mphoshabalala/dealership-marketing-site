import React from "react";
import Header from "../components/Header";
import Dealers from "../components/Dealers";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";

export default function DealersPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Dealers />
      <Footer />
    </>
  );
}
