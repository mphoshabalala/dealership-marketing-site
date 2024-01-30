import supabase from "../supabase_config/supabase";

const { createContext, useContext, useState, useEffect } = require("react");

// const BASE_URL = "http://localhost:8000/api/v1/cars"; //for backend api
const BASE_URL = "http://localhost:8000/cars"; //json-server
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
        // supabase data
        const { data, error } = await supabase
          .from("cars")
          .select()
          .order(orderBy, { ascending: false });

        // json server
        const res = await fetch(BASE_URL);
        const cars = await res.json();
        // setCars(data); //update for supabase
        setCars(cars); //update for json-server
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
      // const { data, error } = await supabase
      //   .from("cars")
      //   .select()
      //   .eq("_id", id)
      //   .single();
      const res = await fetch(`${BASE_URL}/${id}`);
      const car = await res.json();
      // setCurrentCar(data); //update from supabase
      setCurrentCar(car); //update from json-server

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
