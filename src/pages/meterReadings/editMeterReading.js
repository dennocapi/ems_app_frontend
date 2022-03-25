import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editMeterReading } from '../../api/apis'
import { useLocation } from 'react-router-dom'

const EditMeterReading = () => {

    const location = useLocation()
    const mReading = location.state
    const navigate = useNavigate();

    let slicedDate = mReading.date.slice(0, 10)
    const [meterReading, setMeterReading] = useState(mReading.meterReading)
    const [date, setDate] = useState(slicedDate)
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        try {
            let meterReadingId = mReading._id
            editMeterReading({ meterReading, date, meterReadingId }).then((response) => {
                if (response && response.status === 200) {
                    alert('Meter reading updated successfully.')
                    console.log('resp---------', response.data)
                    navigate('/meterReadings')
                } else {
                    setMessage(response.data.message)
                }
            })
        } catch (e) {
            setMessage('Something went wrong.')
        }
    }

    return (
        <div className="text-center signInContainer">
            <h3>Edit meter reading</h3>
            {message && <p className='error'>{message}</p>}
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Amount</label>
                    <input type='number' placeholder='Amount'
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
                <input type='submit' value='Edit meter reading' className='btn btn-success' />
            </form>
        </div>
    )
}


export default EditMeterReading;
