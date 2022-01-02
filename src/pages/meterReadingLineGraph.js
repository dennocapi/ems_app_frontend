import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line } from 'recharts'
import { Link } from 'react-router-dom'

const MeterReadingLineGraph = () => {

    const [meterReadings, setMeterReadings] = useState([])

    useEffect(() => {
        const getMeterReadings = async () => {
            const meterReadingsFromServer = await fetchMeterReadings()
            setMeterReadings(meterReadingsFromServer)
        }

        getMeterReadings()

    }, [])

    const fetchMeterReadings = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/meterReadings`)
        const data = await res.json()
        return data
    }

    return (
        <div className='container'>
            <Link className='Link' to="/meterReadings">Meter Readings</Link>  &nbsp; 
            <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link> &nbsp; 
            <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link> 
            <div className='container'>
                <LineChart width={730} height={250} data={meterReadings}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="meterReading" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default MeterReadingLineGraph
