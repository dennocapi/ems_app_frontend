import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddMeterReading = () => {
    const [meterReading, setMeterReading] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!meterReading) {
            alert('Please input meter reading')
            return
        }
        if (!date) {
            alert('Please input the date')
            return
        }

        try {
            await axios.post(`${process.env.REACT_APP_BASEURL}/meterReadings/add`, { meterReading, date })
        } catch (e) {
            console.log(e)
        }

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
