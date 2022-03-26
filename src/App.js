import { useEffect } from "react";
import './App.css';
import { userStore } from './store/stores'
import history from './default';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import PrivateRoute from './components/privateRoute'
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
import EditEquipment from "./pages/equipments/editEquipment"
import Notifications from "./components/notifications"
import CostCalculator from "./components/costCalculator"
import EditElectricalBill from "./pages/electricalBills/editElectricalBill"
import EditMeterReading from "./pages/meterReadings/editMeterReading"

function App() {

  const user = userStore(state => state.user)
  const storeUser = userStore(state => state.storeUser)
  useEffect(() => {
    const fetchNewToken = () => {
      refreshToken().then((response) => {
        if (response && response.status === 200) {
          storeUser(response.data.user)
        }
        else {
          console.log(response)
        }
      })
    }
    if (!user) {
      refreshToken().then((response) => {
        console.log('Refresh session------------')
        console.log(response)
        if (response && response.status === 200) {
          storeUser(response.data.user)
          setTimeout(fetchNewToken, 1.8e+6)
        }
        else {

        }
      })
    } else {
      setTimeout(fetchNewToken, 1.8e+6)
    }
  }, [user, storeUser]);

  return (
    <Router history={history}>
      <Navbar />
      <Container>

        <Routes>
          {user ? <Route path="/" exact element={<Home />} /> : <Route path="/" element={<SignIn />} />}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<SignUp />} />
          {user ?  <Route path="/equipments" element={<Equipments />} /> : <Route path="/equipments" element={<SignIn />} />}
          {user ?  <Route path="/addEquipment" element={<AddEquipment />} /> : <Route path="/addEquipment" element={<SignIn />} />}
          {user ?  <Route path="/pieChart" element={<EquipmentPieChart />} /> : <Route path="/pieChart" element={<SignIn />} />}
          {user ?  <Route path="/barGraph" element={<EquipmentBarChart />} /> : <Route path="/barGraph" element={<SignIn />} />}
          {user ? <Route path="/addElectricalBill" element={<AddElectricalBill />} /> : <Route path="/addElectricalBill" element={<SignIn />} />}
          {user ? <Route path="/electricalBills" element={<ElectricalBills />} /> : <Route path="/electricalBills" element={<SignIn />} />}
          {user ? <Route path="/electricalBillLineGraph" element={<ElectricalBillLineGraph />} /> : <Route path="/electricalBillLineGraph" element={<SignIn />} />}
          {user ? <Route path="/addMeterReading" element={<AddMeterReading />} /> : <Route path="/addMeterReading" element={<SignIn />} />}
          {user ? <Route path="/meterReadings" element={<MeterReadings />} /> : <Route path="/meterReadings" element={<SignIn />} />}
          {user ? <Route path="/meterReadingLineGraph" element={<MeterReadingLineGraph />} /> : <Route path="/meterReadingLineGraph" element={<SignIn />} />}
          {user ? <Route path="/editEquipment" element={<EditEquipment />} /> : <Route path="/editEquipment" element={<SignIn />} />}
          {user ? <Route path="/notifications" element={<Notifications />} /> : <Route path="/notifications" element={<SignIn />} />}
          <Route path="/costCalculator" element={<CostCalculator />} />
          {user ? <Route path="/editElectricalBill" element={<EditElectricalBill />} /> : <Route path="/editElectricalBill" element={<SignIn />} />}
          {user ? <Route path="/editMeterReading" element={<EditMeterReading />} /> : <Route path="/editMeterReading" element={<SignIn />} />}

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
