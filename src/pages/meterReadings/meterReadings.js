import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MeterReading from './meterReading'
import axios from 'axios'

const MeterReadings = () => {
    const [meterReadings, setMeterReadings] = useState([])

    useEffect(() => {
        let isMounted = true

        axios.post(`${process.env.REACT_APP_BASEURL}/meterReadings/getMeterReadings`).then((response) => {
            if (isMounted) {
                setMeterReadings(response.data.meterReadings)
            }
        })
    }, [])

    return (
        <div className='container'>
            <Link className='Link' to="/meterReadings">Meter Readings</Link>  &nbsp;
            <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link> &nbsp;
            <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>
            <div className='container'>
                {meterReadings.map((meterReading) => (
                    <MeterReading
                        key={meterReading._id}
                        meterReading={meterReading}
                    />
                ))}
            </div>
        </div>
    )
}

export default MeterReadings
