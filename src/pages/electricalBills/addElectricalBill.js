import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addElectricalBill } from '../../api/apis'

const AddElectricalBill = () => {
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

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


        // try {
        //     await axios.post(`${process.env.REACT_APP_BASEURL}/electricalBills/add`, { amount, date  })
        // } catch (e) {
        //     console.log(e)
        // }

        setAmount('')
        setDate('')
    }

    useEffect(() => {
        addElectricalBill({ amount, date }).then((response) => {
            if (response && response.status === 200) {
                window.location.href = "/electricalBills"
                return false;
            } else {
                console.log(response)
            }
        })
    }, [])

    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp;
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp;
            <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>
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
