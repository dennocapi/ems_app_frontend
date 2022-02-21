import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ElectricalBill from './electricalBill'
import { getElectricalBills } from '../../api/apis'

const ElectricalBills = () => {
    const [electricalBills, setElectricalBills] = useState([])

    useEffect(() => {
        getElectricalBills().then((response) => {
            if (response && response.status === 200) {
                setElectricalBills(response.data.electricalBills)
            } else {
                console.log(response)
            }
        })
    },[])

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
