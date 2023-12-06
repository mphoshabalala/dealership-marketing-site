import { createContext, useContext, useReducer } from "react";

//instantiate context
const SellYourCarContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    default:
      throw new Error("Unknown Error");
  }
}

const initialState = {
  model: "",
  brand: "",
  dateOfPurchase: "",
  mileage: "",
  carType: "",
  driveMode: "",
  fuelType: "",
  maxSpeed: "",
  fullExterior: null,
  interiorDahboardImg: null,
  interior1: null,
  interior2: null,
  engine: null,
  idCopy: null,
  registration: null,
  isLoading: false,
  error: "",
};

// context provider
function SellYourCarProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SellYourCarContext.Provider value={contextValue}>
      {children}
    </SellYourCarContext.Provider>
  );
}

// custom context hook
function useSellYourCarContext() {
  const context = useContext(SellYourCarContext);
  if (!context) {
    throw new Error(
      "useSellYourCarContext must be used within a SellYourCarProvider"
    );
  }

  return context;
}

export { useSellYourCarContext, SellYourCarProvider };
