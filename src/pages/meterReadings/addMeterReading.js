import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { addMeterReading } from '../../api/apis'

const AddMeterReading = () => {
    const [meterReading, setMeterReading] = useState('')
    const [date, setDate] = useState('')
    const user = userStore(state => state.user)

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
            addMeterReading({ meterReading, date }).then((response) => {
                if (response && response.status === 200) {
                    window.location.href = "/meterReadings"
                    return false;
                } else {
                    console.log(response)
                }
            })
        } catch (e) {
            console.log(e)
        }

        setMeterReading('')
        setDate('')
    }
    return (
        <div className='container'>
            {user &&<Link className='Link' to="/meterReadings">Meter Readings</Link>}  &nbsp; 
            {user &&<Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link>} &nbsp; 
            {user &&<Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>}
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
