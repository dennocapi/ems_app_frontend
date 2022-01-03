import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line } from 'recharts'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ElectricalBillLineGraph = () => {
    const [electricalBills, setElectricalBills] = useState([])

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASEURL}/electricalBills/getElectricalBills`).then((response) => {
            setElectricalBills(response.data.electricalBills)
          })
    },[]) 
    
    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp;
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp;
            <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>
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
