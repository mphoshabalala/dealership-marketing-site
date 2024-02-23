import axios from "axios";
import { createContext, useContext, useState } from "react";
const BASE_URL = "";
const RecoverAccoutContext = createContext();

function RecoverAccountProvider({ children }) {
  const [form, setForm] = useState({
    email: "",
  });
  function handleInputChange(e) {
    //get name and value properties from the event.target object
    const { name, value } = e.target;
    //update form
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  async function handleFormSubmit(e) {
    //prevent default behaveor of form submission
    e.preventDefault();
    //instantiate FormData object to package form inputs
    const formData = new FormData();
    //append inputs into formData
    formData.append("email", form.email);
    //try to submit the formData through the network into the server
    try {
      const res = await axios.post(BASE_URL, formData, {
        headers: { "Content-Type": "application/json" },
      });
      //verify submission
      if (res.status !== 200) {
        throw new Error("Failed to send data");
      }
    } catch (error) {
      console.error(error.message());
    }
  }

  return (
    <RecoverAccoutContext.Provider
      value={{ form, handleFormSubmit, handleInputChange }}
    >
      {children}
    </RecoverAccoutContext.Provider>
  );
}

function useRecoverAccount() {
  const context = useContext(RecoverAccoutContext);
  if (context === undefined)
    throw new Error(
      "RecoverAccountContext is used outside the RecoverAccountProvider"
    );
  return context;
}

export { RecoverAccountProvider, useRecoverAccount };
