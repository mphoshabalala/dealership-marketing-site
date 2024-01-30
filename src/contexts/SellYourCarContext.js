import { createContext, useState, useContext } from "react";
import axios from "axios";
import { convertToBase64 } from "../utilities/Filestreams";

const SellYourCarContext = createContext();

const BASE_URL = "";

function SellYourCarProvider({ children }) {
  const [form, setForm] = useState({
    model: "",
    brand: "",
    dateOfPurchase: "",
    mileage: "",
    carType: "",
    driveMode: "",
    fuelType: "",
    maxSpeed: "",
    fullCarExteriorImg: "",
    interiorDashboardImg: "",
    interior1Img: "",
    interior2Img: "",
    engineImg: "",
    yourIdImg: "",
    carRegistrationImg: "",
  });

  // handle input change and update the setForm state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  //handle file change and convert to base 64 encoding
  const handleFileChange = async (e, field) => {
    const files = await e.target.files;
    //check if theres a file
    if (files && files.length > 0) {
      // convert the file to base64 encoding
      const base64 = await convertToBase64(files[0]);
      console.log(base64);
      // update the setForm state bny storing base64 file
      setForm((prevForm) => ({ ...prevForm, [field]: base64 }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // instantiate formData object for holding formData datatype
    const formData = new FormData();
    // append actual data
    formData.append("model", form.model);
    formData.append("brand", form.brand);
    formData.append("dateOfPurchase", form.dateOfPurchase);
    formData.append("mileage", form.mileage);
    formData.append("carType", form.carType);
    formData.append("driveMode", form.driveMode);
    formData.append("fuelType", form.fuelType);
    formData.append("maxSpeed", form.maxSpeed);
    // File fields
    formData.append("fullCarExteriorImg", form.fullCarExteriorImg);
    formData.append("interiorDahboardImg", form.interiorDahboardImg);
    formData.append("interior1Img", form.interior1Img);
    formData.append("interior2Img", form.interior2Img);
    formData.append("engineImg", form.engineImg);
    formData.append("yourIdImg", form.yourIdImg);
    formData.append("carRegistrationImg", form.carRegistrationImg);
    console.log(form);

    try {
      // post data to backend using axios
      const res = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        throw new Error("Failed to submit data");
      }
    } catch (err) {
      console.error("Error submiting data:", err.message);
    } finally {
      // Reset form after
      setForm({
        model: "",
        brand: "",
        dateOfPurchase: "",
        mileage: "",
        carType: "",
        driveMode: "",
        fuelType: "",
        maxSpeed: "",
        fullCarExteriorImg: "",
        interiorDahboardImg: "",
        interior1Img: "",
        interior2Img: "",
        engineImg: "",
        yourIdImg: "",
        carRegistrationImg: "",
      });
    }
  };

  return (
    <SellYourCarContext.Provider
      value={{
        form,
        setForm,
        handleInputChange,
        handleFileChange,
        handleFormSubmit,
      }}
    >
      {children}
    </SellYourCarContext.Provider>
  );
}

function useSellYourCar() {
  const context = useContext(SellYourCarContext);
  if (context === undefined)
    throw new Error("SellYourCarContext was used outside SellYourCarProvider");
  return context;
}

export { useSellYourCar, SellYourCarProvider };
