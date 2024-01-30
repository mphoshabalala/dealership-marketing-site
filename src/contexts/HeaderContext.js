import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isMenuBarOpen, setIsMenubarOpen] = useState(false);

  function handleMenu() {
    setIsMenubarOpen((prev) => !prev);
  }

  return (
    <HeaderContext.Provider
      value={{ isMenuBarOpen, setIsMenubarOpen, handleMenu }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined)
    throw new Error("HeaderContext was used outside HeaderProvider");
  return context;
}

export { useHeader, HeaderProvider };
