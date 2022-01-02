import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Equipments from "./pages/equipments";
import AddEquipment from "./pages/addEquipment";
import EquipmentBarChart from "./pages/equipmentBarChart";
import EquipmentPieChart from "./pages/equipmentsPieChart";
import AddBill from "./pages/addBill";
import ElectricalBills from "./pages/electricalBills";
import ElectricalBillLineGraph from "./pages/electricalBillLineGraph";
import AddMeterReading from "./pages/addMeterReading";
import MeterReadings from "./pages/meterReadings";
import MeterReadingLineGraph from "./pages/meterReadingLineGraph";

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
        <Route path="/addBill" element={<AddBill />} />
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
