import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editElectricalBill } from '../../api/apis'
import { useLocation } from 'react-router-dom'

const EditElectricalBill = () => {

    const location = useLocation()
    const electricalBill = location.state
    const navigate = useNavigate();

    let slicedDate = electricalBill.date.slice(0, 10)
    const [amount, setAmount] = useState(electricalBill.amount)
    const [date, setDate] = useState(slicedDate)
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        try {
            let electricalBillId = electricalBill._id
            editElectricalBill({ amount, date, electricalBillId }).then((response) => {
                if (response && response.status === 200) {
                    alert('Electrical bill updated successfully.')
                    navigate('/electricalBills')
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
            <h3>Edit electrical bill</h3>
            {message && <p className='error'>{message}</p>}
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Amount</label>
                    <input type='number' placeholder='Amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Date</label>
                    <input type='date' placeholder='Date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <input type='submit' value='Edit electrical bill' className='btn btn-success' />
            </form>
        </div>
    )
}


export default EditElectricalBill;
