import axios from "axios";
import { createContext, useContext, useState } from "react";
const BASE_URL = "";
const LoginContext = createContext();

function LoginProvider({ children }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  async function handleFormSubmit(e) {
    //prevent default form behaveor
    e.preventDefault();
    //instantiate formData object
    const formData = new FormData();
    //appendData to formData
    formData.append("username", form.username);
    formData.append("password", form.password);

    try {
      const res = await axios.post(BASE_URL, formData, {
        hraders: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        throw new Error("Failed to submit data");
      }
    } catch (err) {
      console.error(err.message());
    }
  }
  return (
    <LoginContext.Provider
      value={{ form, handleInputChange, handleFormSubmit }}
    >
      {children}
    </LoginContext.Provider>
  );
}

// Login details custom hook
function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined)
    throw new Error("LoginContext was used outside LoginProvider");
  return context;
}

export { useLogin, LoginProvider };
