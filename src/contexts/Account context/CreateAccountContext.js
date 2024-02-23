import axios from "axios";
import { createContext, useContext, useState } from "react";

const BASE_URL = "";
const CreateAccountContext = createContext();

//create a context provider for account information
function CreateAccountProvider({ children }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cconfirmPassword: "",
  });

  function handleInputChange(e) {
    // get name and value properties from an input change event
    const { name, value } = e.target;
    //update the form
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  async function handleFormSubmit(e) {
    //prevent default form submit behavior
    e.preventDefault();
    //instantiate formData object to package the data
    const formDtata = new FormData();
    //append form data to formData
    formDtata.append("username", form.username);
    formDtata.append("email", form.email);
    formDtata.append("password", form.password);
    formDtata.append("confirmPassword", form.confirmPassword);

    //attempt to send the data through the server using a third party library axios
    try {
      const res = await axios.post(BASE_URL, formDtata, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        throw new Error("Failed to submit data");
      }
    } catch (error) {}
  }
  return (
    <CreateAccountContext.Provider
      value={{ handleFormSubmit, handleInputChange, form }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
}
//create a custom Hook for context and its properties
function useCreateAccount() {
  const context = useContext(CreateAccountContext);
  if (context === undefined)
    throw new Error(
      "CreateAccountContext was used outside createAccountProvider"
    );

  return context;
}

export { CreateAccountProvider, useCreateAccount };
