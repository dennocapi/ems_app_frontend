import { useEffect, useState } from "react";
import './App.css';
import { userStore } from './store/stores';
import history from './default';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { refreshToken } from './api/apis';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Logout from './pages/logout';
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

  const user = userStore(state => state.user);
  const storeUser = userStore(state => state.storeUser);
  const setLoadingUser = userStore(state => state.setLoadingUser);

  useEffect(() => {
    const fetchNewToken = () => {
      setLoadingUser(true)
      refreshToken().then((response) => {
        if (response && response.status === 200) {
          storeUser(response.data.user)
          setLoadingUser(false)
        }
        else {
          setLoadingUser(false)
        }
      })
    }
    if (!user) {
      setLoadingUser(true)
      refreshToken().then((response) => {
        console.log('Refresh session------------')
        console.log(response)
        if (response && response.status === 200) {
          storeUser(response.data.user)
          setLoadingUser(false)
          setTimeout(fetchNewToken, 1.8e+6)
        }
        else {
          setLoadingUser(false)
        }
      })
    } else {
      setTimeout(fetchNewToken, 1.8e+6)
    }
  }, [user, storeUser])
  return (
    <Router history={history}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
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
