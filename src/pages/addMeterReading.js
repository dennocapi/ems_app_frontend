import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddMeterReading = () => {
    const [meterReading, setMeterReading] = useState('')
    const [date, setDate] = useState('')
    const [MeterReadings, setMeterReadings] = useState([])

    const addMeterReading = async (reading) => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/meterReadings`
            , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(reading)
            })

        const data = await res.json()

        setMeterReadings([...MeterReadings, data])
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!meterReading) {
            alert('Please input meter reading')
            return
        }
        if (!date) {
            alert('Please input the date')
            return
        }

        addMeterReading({ meterReading, date })

        setMeterReading('')
        setDate('')
    }
    return (
        <div className='container'>
            <Link className='Link' to="/meterReadings">Meter Readings</Link>  &nbsp; 
            <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link> &nbsp; 
            <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link> 
            <div className='signInContainer'>
                <h3>Add Meter Reading</h3>

                <form className='add-form' onSubmit={onSubmit} >
                    <div className='form-control'>
                        <label>Meter reading</label>
                        <input type='number' placeholder='Meter reading'
                            value={meterReading}
                            onChange={(e) => setMeterReading(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Date</label>
                        <input type='date' placeholder='Date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <input type='submit' value='Add Meter Reading' className='btn btn-block' />
                </form>
            </div>
        </div>
    )
}

export default AddMeterReading
