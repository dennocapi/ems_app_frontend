import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Equipments from "./pages/equipments/equipments";
import AddEquipment from "./pages/equipments/addEquipment";
import EquipmentBarChart from "./pages/equipments/equipmentBarChart";
import EquipmentPieChart from "./pages/equipments/equipmentsPieChart";
import AddElectricalBill from "./pages/electricalBills/addElectricalBill";
import ElectricalBills from "./pages/electricalBills/electricalBills";
import ElectricalBillLineGraph from "./pages/electricalBills/electricalBillLineGraph";
import AddMeterReading from "./pages/meterReadings/addMeterReading";
import MeterReadings from "./pages/meterReadings/meterReadings";
import MeterReadingLineGraph from "./pages/meterReadings/meterReadingLineGraph";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/addEquipment" element={<AddEquipment />} />
        <Route path="/pieChart" element={<EquipmentPieChart />} />
        <Route path="/barGraph" element={<EquipmentBarChart />} />
        <Route path="/addElectricalBill" element={<AddElectricalBill />} />
        <Route path="/electricalBills" element={<ElectricalBills />} />
        <Route path="/electricalBillLineGraph" element={<ElectricalBillLineGraph />} />
        <Route path="/addMeterReading" element={<AddMeterReading />} />
        <Route path="/meterReadings" element={<MeterReadings />} />
        <Route path="/meterReadingLineGraph" element={<MeterReadingLineGraph />} />

      </Routes>
    </Router>
  );
}

export default App;
