import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddBill = () => {
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [electricalBills, setElectricalBills] = useState([])

    const addElectricalBill = async (bill) => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/electricalBills`
            , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(bill)
            })

        const data = await res.json()

        setElectricalBills([...electricalBills, data])
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!amount) {
            alert('Please input electrical bill amount')
            return
        }
        if (!date) {
            alert('Please input the date')
            return
        }

        addElectricalBill({ amount, date })

        setAmount('')
        setDate('')
    }

    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp; 
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp; 
            <Link className='Link' to={"/addBill"}>Add Electrical Bill</Link>
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

export default AddBill
