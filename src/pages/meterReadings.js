import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MeterReading from './meterReading'

const MeterReadings = () => {
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
                {meterReadings.map((meterReading) => (
                    <MeterReading
                        key={meterReading.id}
                        meterReading={meterReading}
                    />
                ))}
            </div>
        </div>
    )
}

export default MeterReadings
