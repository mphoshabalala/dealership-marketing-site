import { createContext, useContext, useEffect, useState } from "react";

const OrdersContext = createContext();
const BASE_URL = "http://localhost:8000/orders";
function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getOrders() {
      setIsLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const orders = await res.json();
        setOrders(orders);
        // console.log(orders);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getOrders();
  }, [error]);

  async function getOrder(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const order = await res.json();
      setCurrentOrder(order);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <OrdersContext.Provider
      value={{ orders, isLoading, currentOrder, getOrder, error }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined)
    throw new Error("OrdersContext was used outside the ordersProvider");
  return context;
}

export { useOrders, OrdersProvider };
