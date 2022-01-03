import { FaTimes } from 'react-icons/fa'

const MeterReading = ({ meterReading }) => {
    return (
        <div className='equipment'>
        <h4>
            Date: {meterReading.date}
            <FaTimes 
            style={{ color: 'red', cursor: 'pointer' }} 
            />
        </h4>
        <p>Meter Reading: {meterReading.meterReading}</p>
    </div>
    )
}

export default MeterReading
