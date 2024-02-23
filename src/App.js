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
import TermsAndConditions from "./pages/TermsAndConditions";
import Administration from "./pages/Administration";
import { OrdersProvider } from "./contexts/ordersContext";
import { HeaderProvider } from "./contexts/HeaderContext";
import { NewsletterProvider } from "./contexts/NewsletterContext";
import Login from "./pages/Login";
import RecoverAccount from "./pages/RecoverAccount";
import CreateAccount from "./pages/CreateAccount";
import { LoginProvider } from "./contexts/Account context/LoginContext";
import { CreateAccountProvider } from "./contexts/Account context/CreateAccountContext";
import { RecoverAccountProvider } from "./contexts/Account context/RecoverAccountContext";
import PageNotFoundPage from "./pages/PageNotFoundPage";

function App() {
  return (
    <DealersProvider>
      <CarsProvier>
        <SellYourCarProvider>
          <OrdersProvider>
            <HeaderProvider>
              <NewsletterProvider>
                <CreateAccountProvider>
                  <RecoverAccountProvider>
                    <LoginProvider>
                      <BrowserRouter>
                        <Routes>
                          <Route index element={<Homepage />} />
                          <Route path="/cars" element={<Cars />} />
                          <Route path="/cars/:id" element={<DetailedCar />} />
                          <Route
                            path="/sell-your-car"
                            element={<SellYourCar />}
                          />
                          <Route path="/dealers" element={<DealersPage />} />
                          <Route
                            path="/become-a-dealer"
                            element={<BecomeADealer />}
                          />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route
                            path="/terms-and-conditions"
                            element={<TermsAndConditions />}
                          />
                          <Route
                            path="/calculate-car-worth"
                            element={<CarWorthCalculator />}
                          />
                          <Route path="/account/login" element={<Login />} />
                          <Route
                            path="/account/recover-account"
                            element={<RecoverAccount />}
                          />
                          <Route
                            path="/account/create-account"
                            element={<CreateAccount />}
                          />

                          <Route path="/admin" element={<Administration />} />
                          <Route path="*" element={<PageNotFoundPage />} />
                        </Routes>
                      </BrowserRouter>
                    </LoginProvider>
                  </RecoverAccountProvider>
                </CreateAccountProvider>
              </NewsletterProvider>
            </HeaderProvider>
          </OrdersProvider>
        </SellYourCarProvider>
      </CarsProvier>
    </DealersProvider>
  );
}

export default App;
