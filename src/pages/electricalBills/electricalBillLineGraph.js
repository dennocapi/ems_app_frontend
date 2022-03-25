import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'
import { getElectricalBills } from '../../api/apis'

const ElectricalBillLineGraph = () => {
    const [electricalBills, setElectricalBills] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        try {
            getElectricalBills().then((response) => {
                if (response && response.status === 200) {
                    setElectricalBills(response.data.electricalBills)
                } else {
                    setMessage(response.data.message)
                }
            })
        } catch (error) {
            setMessage('Something went wrong.')
        }
    }, [])
    electricalBills.map((bill) => {
        let slicedDate = bill.date.slice(0, 10)
        bill.date = slicedDate

        return bill
    })

    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp;
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp;
            <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>
            <div className='container text-center' >
                {message && <p className='error'>{message}</p>}
                <h4>Electric bills graph</h4>
                <ResponsiveContainer width='100%' aspect={3} >
                    <LineChart width={750} height={250} data={electricalBills}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#243240" />
                        <XAxis dataKey="date" name="Date" tick={{ fill: 'black' }} />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                        <Legend />
                        <Line type="monotone" dataKey="amount" name="Amount" strokeWidth="5" stroke="#8884d8" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 10 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ElectricalBillLineGraph
