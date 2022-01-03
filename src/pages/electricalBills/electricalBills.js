import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ElectricalBill from './electricalBill'
import axios from 'axios'

const ElectricalBills = () => {
    const [electricalBills, setElectricalBills] = useState([])

    useEffect(() => {
        let isMounted = true

        axios.post(`${process.env.REACT_APP_BASEURL}/electricalBills/getElectricalBills`).then((response) => {
            if (isMounted) {
                setElectricalBills(response.data.electricalBills)
            }
        })
    }, [])

    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp;
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp;
            <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>
            <div className='container'>
            {electricalBills.map((electricalBill) => (
                    <ElectricalBill
                        key={electricalBill._id}
                        electricalBill={electricalBill}
                    />
                ))}
            </div>
        </div>
    )
}

export default ElectricalBills
