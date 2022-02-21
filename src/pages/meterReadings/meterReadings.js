import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MeterReading from './meterReading'
import { getMeterReadings } from '../../api/apis'

const MeterReadings = () => {
    const [meterReadings, setMeterReadings] = useState([])

    useEffect(() => {
        getMeterReadings().then((response) => {
            if (response && response.status === 200) {
                setMeterReadings(response.data.meterReadings)
            } else {
                console.log(response)
            }
        })
    },[])

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
