import {useEffect, useState } from "react";
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
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const storeUser = userStore(state => state.storeUser);

  useEffect(() => {
    const fetchNewToken = () => {
      setIsLoadingUser(true)
      refreshToken().then((response) => {
        if (response && response.status === 200) {
          storeUser(response.data.user)
          setIsLoadingUser(false);
        }
      })
    }
    if (!user) {
      setIsLoadingUser(true)
      refreshToken().then((response) => {
        setIsLoadingUser(false)
        if (response && response.status === 200) {
          setIsLoadingUser(false)
          storeUser(response.data.user)
          setTimeout(fetchNewToken, 1.8e+6)
        }
      })
    } else {
      setTimeout(fetchNewToken, 1.8e+6)
    }
  }, [user, storeUser])
  console.log('User----------------',user)
  return (
    <Router history={history}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home isLoadingUser={isLoadingUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp  />} />
        <Route path="/equipments" element={<Equipments isLoadingUser={isLoadingUser} />} />
        <Route path="/addEquipment" element={<AddEquipment isLoadingUser={isLoadingUser} />} />
        <Route path="/pieChart" element={<EquipmentPieChart isLoadingUser={isLoadingUser} />} />
        <Route path="/barGraph" element={<EquipmentBarChart isLoadingUser={isLoadingUser} />} />
        <Route path="/addElectricalBill" element={<AddElectricalBill isLoadingUser={isLoadingUser} />} />
        <Route path="/electricalBills" element={<ElectricalBills isLoadingUser={isLoadingUser} />} />
        <Route path="/electricalBillLineGraph" element={<ElectricalBillLineGraph isLoadingUser={isLoadingUser} />} />
        <Route path="/addMeterReading" element={<AddMeterReading isLoadingUser={isLoadingUser} />} />
        <Route path="/meterReadings" element={<MeterReadings isLoadingUser={isLoadingUser} />} />
        <Route path="/meterReadingLineGraph" element={<MeterReadingLineGraph isLoadingUser={isLoadingUser}/>} />

      </Routes>
    </Router>
  );
}

export default App;
