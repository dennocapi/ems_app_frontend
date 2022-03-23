import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line } from 'recharts'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { getElectricalBills } from '../../api/apis'

const ElectricalBillLineGraph = () => {
    const [electricalBills, setElectricalBills] = useState([])
    const user = userStore(state => state.user)

    useEffect(() => {
        getElectricalBills().then((response) => {
            if (response && response.status === 200) {
                setElectricalBills(response.data.electricalBills)
            } else {
                console.log(response)
            }
        })
    },[]) 
    
    return (
        <div className='container'>
            {user &&<Link className='Link' to="/electricalBills">Electrical Bills</Link>}  &nbsp;
            {user &&<Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link>} &nbsp;
            {user && <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>}
            <div className='container'>
                <LineChart width={730} height={250} data={electricalBills}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default ElectricalBillLineGraph
