import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import DealersSection from "../components/DealersSection";
import CarsSection from "../components/CarsSection";
import SellYourCar from "./SellYourCar";
import SellYourCarSection from "../components/SellYourCarSection";
import supabase from "../supabase_config/supabase";

export default function Homepage() {
  const [cars, setCars] = useState([]);
  const [error, setFetchError] = useState(null);
  useEffect(() => {
    async function cars() {
      const { data, error } = await supabase.from("cars").select();
      if (error) {
        setFetchError("could not fetch the cars");
        setCars(null);
        console.log(error);
      }

      if (data) {
        setCars(data);
        setFetchError(null);
      }
    }

    cars();
  }, []);

  console.log(cars, "Error", error);
  return (
    <div className="text-gray-900 bg-gray-100">
      <Header />
      <Hero />
      <CarsSection />
      <DealersSection />
      <SellYourCarSection />
      <Footer />
    </div>
  );
}
