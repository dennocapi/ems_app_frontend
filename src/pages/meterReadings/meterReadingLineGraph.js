import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'
import { getMeterReadings } from '../../api/apis'

const MeterReadingLineGraph = () => {

    const [meterReadings, setMeterReadings] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            try {
                getMeterReadings().then((response) => {
                    if (response && response.status === 200) {
                        setMeterReadings(response.data.meterReadings)
                    } else {
                        setMessage(response.data.message)
                    }
                })
            } catch (e) {
                setMessage('Something went wrong.')
            }
        }
        return () => { isMounted = false }
    }, [])

    meterReadings.map((electricReading) => {
        let slicedDate = electricReading.date.slice(0, 10)
        electricReading.date = slicedDate

        return electricReading
    })

    return (
        <div className='container'>
            <Link className='Link' to="/meterReadings">Meter Readings</Link>  &nbsp;
            <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link> &nbsp;
            <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>
            <div className='container text-center'>
                {message && <p className='error'>{message}</p>}
                <h4>Meter readings graph</h4>
                <ResponsiveContainer width='100%' aspect={3}>
                    <LineChart width={730} height={250} data={meterReadings}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" name="Date" tick={{ fill: 'black' }} />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                        <Legend />
                        <Line type="monotone" dataKey="meterReading" name="Meter reading" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 10 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default MeterReadingLineGraph
