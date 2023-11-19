import supabase from "../supabase_config/supabase";

const { createContext, useContext, useState, useEffect } = require("react");

const BASE_URL = "http://localhost:8000/api/v1/cars"; //for backend api
const CarsContext = createContext();

function CarsProvier({ children }) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [error, setError] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  useEffect(() => {
    async function getCars() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("cars")
          .select()
          .order(orderBy, { ascending: false });
        setCars(data);
      } catch {
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCars();
  }, [error, orderBy]);

  async function getCar(id) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("cars")
        .select()
        .eq("_id", id)
        .single();

      setCurrentCar(data);

      if (error) console.log("Error", error);
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CarsContext.Provider
      value={{ cars, isLoading, error, currentCar, getCar, setOrderBy }}
    >
      {children}
    </CarsContext.Provider>
  );
}

function useCars() {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error("CarsContext was used outside the CarsProvider");
  }
  return context;
}

export { useCars, CarsProvier };
