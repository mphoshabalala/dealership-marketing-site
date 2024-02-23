import axios from "axios";
import { createContext, useContext, useState } from "react";
const BASE_URL = "";
const NewsletterContext = createContext();

function NewsletterProvider({ children }) {
  const [isNewsletterClosed, setNewsletterCloased] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    //abstract name and value properties of the input event
    const { name, value } = e.target;
    //update the form
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    //prevent default form submit behavior
    e.preventDefault();
    //instantiate formData object to package form inputs
    const formData = new FormData();
    //append data into the form
    formData.append("email", form.email);
    //try sending data through the network into the server
    try {
      const res = await axios.post(BASE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 200) {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error(error.message());
    }
  };
  function handleNewsletterPopUp() {
    setNewsletterCloased((prev) => !prev);
  }
  return (
    <NewsletterContext.Provider
      value={{
        isNewsletterClosed,
        setNewsletterCloased,
        handleNewsletterPopUp,
        handleInputChange,
        handleFormSubmit,
        form,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
}

function useNewsletter() {
  const context = useContext(NewsletterContext);
  if (context === undefined)
    throw new Error("NewsLetterContext is used outside the NewsletterProvider");
  return context;
}

export { useNewsletter, NewsletterProvider };
