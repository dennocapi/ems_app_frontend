import { FaTimes } from 'react-icons/fa'

const ElectricalBill = ({ electricalBill }) => {
    return (
        <div className='equipment'>
            <h4>
                Date: {electricalBill.date}
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                />
            </h4>
            <p>Amount: {electricalBill.electricalBill}</p>
        </div>
    )
}

export default ElectricalBill
