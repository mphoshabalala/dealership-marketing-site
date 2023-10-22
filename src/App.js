import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { DealersProvider } from "./contexts/dealersContext";
import Cars from "./pages/Cars";

function App() {
  return (
    <DealersProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </DealersProvider>
  );
}

export default App;
