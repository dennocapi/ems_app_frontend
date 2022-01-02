import { FaTimes } from 'react-icons/fa'

const ElectricalBill = ({ electricalBill }) => {
    return (
        <div className='equipment'>
            <h3>
                Date: {electricalBill.date}
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                />
            </h3>
            <p>Amount: {electricalBill.amount}</p>
        </div>
    )
}

export default ElectricalBill
