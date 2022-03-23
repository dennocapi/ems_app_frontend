import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { addElectricalBill } from '../../api/apis'

const AddElectricalBill = () => {
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const user = userStore(state => state.user)

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!amount) {
            alert('Please input electrical bill amount')
            return
        }
        if (!date) {
            alert('Please input the date')
            return
        }

        try {
            addElectricalBill({ amount, date }).then((response) => {
                if (response && response.status === 200) {
                    window.location.href = "/electricalBills"
                    return false;
                } else {
                    console.log(response)
                }
            })
        } catch (e) {
            console.log(e)
        }

        setAmount('')
        setDate('')
    }

    return (
        <div className='container'>
            {user &&<Link className='Link' to="/electricalBills">Electrical Bills</Link>}  &nbsp;
            {user &&<Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link>} &nbsp;
            {user && <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>}
            <div className='signInContainer'>
                <h3>Add Bill</h3>

                <form className='add-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Amount(Ksh)</label>
                        <input type='number' placeholder='Billing amount'
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
                    <input type='submit' value='Add Electrical Bill' className='btn btn-block' />
                </form>
            </div>
        </div>
    )
}

export default AddElectricalBill
