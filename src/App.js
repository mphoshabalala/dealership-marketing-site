import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { DealersProvider } from "./contexts/dealersContext";
import Cars from "./pages/Cars";
import { CarsProvier } from "./contexts/carsContext";
import DetailedCar from "./pages/DetailedCar";
import SellYourCar from "./pages/SellYourCar";
import DealersPage from "./pages/DealersPage";
import CarWorthCalculator from "./pages/CarWorthCalculator";
import BecomeADealer from "./pages/BecomeADealer";
import { SellYourCarProvider } from "./contexts/SellYourCarContext";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <DealersProvider>
      <CarsProvier>
        <SellYourCarProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/:id" element={<DetailedCar />} />
              <Route path="/sell-your-car" element={<SellYourCar />} />
              <Route path="/dealers" element={<DealersPage />} />
              <Route path="/become-a-dealer" element={<BecomeADealer />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/calculate-car-worth"
                element={<CarWorthCalculator />}
              />
            </Routes>
          </BrowserRouter>
        </SellYourCarProvider>
      </CarsProvier>
    </DealersProvider>
  );
}

export default App;
